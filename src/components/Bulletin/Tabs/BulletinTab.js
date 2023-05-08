import { useEffect, useState } from 'react';
import './BulletinTab.css';
import Notification from '../Route/Notification';
import Unknown from '../Route/Unknown';
// Data array
const tabTitle = [
  {
    tabname: '공지사항',
    descr: 'qwer',
  },
  {
    tabname: '익명게시판',
    descr: 'asdf',
  },
];

function BulletinTab({
  userObj,
  texts,
  commentList,
  notices,
  noticeCommentList,
  isOwner,
}) {
  const [tabIndex, setTabIndex] = useState(0);
  const [tabObj, setTabObj] = useState(tabTitle[tabIndex]);

  // When tabIndex updates, this updates tabObj then renders
  useEffect(() => {
    setTabObj(tabTitle[tabIndex]);
  }, [tabIndex]);

  function handleBtnClick(e) {
    setTabIndex(parseInt(e.target.id));
  }

  const btnLabels = tabTitle.map((obj) => obj.tabname);

  return (
    <div className="tabContainer">
      <div className="navWrapper">
        <Nav
          btnLabels={btnLabels}
          tabIndex={tabIndex}
          handleBtnClick={handleBtnClick}
        />
      </div>
      <Display
        tabObj={tabObj}
        userObj={userObj}
        texts={texts}
        commentList={commentList}
        notices={notices}
        noticeCommentList={noticeCommentList}
        isOwner={isOwner}
      />
    </div>
  );
}

function Nav({ btnLabels, tabIndex, handleBtnClick }) {
  return (
    <nav className="tab">
      {btnLabels.map((label, i) => {
        return (
          <Button
            key={label}
            id={i}
            tabname={label}
            tabIndex={tabIndex}
            handleBtnClick={handleBtnClick}
          />
        );
      })}
    </nav>
  );
}

function Button({ tabname, id, tabIndex, handleBtnClick }) {
  return (
    <button
      className={id === tabIndex ? 'tablinks active' : 'tablinks'}
      id={id}
      onClick={(e) => handleBtnClick(e)}
    >
      {tabname}
    </button>
  );
}

function Display({
  tabObj,
  userObj,
  texts,
  commentList,
  notices,
  noticeCommentList,
  isOwner,
}) {
  return (
    <div className="tabcontent">
      {tabObj.tabname === '공지사항' ? (
        <Notification
          userObj={userObj}
          notices={notices}
          noticeCommentList={noticeCommentList}
          isOwner={isOwner}
        />
      ) : (
        <Unknown
          userObj={userObj}
          texts={texts}
          commentList={commentList}
          isOwner={isOwner}
        />
      )}
    </div>
  );
}
export default BulletinTab;
