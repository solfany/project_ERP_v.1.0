import { useEffect, useState } from "react";
import "./BulletinTab.css";
import Notification from "../Route/Notification";
import Unknown from "../Route/Unknown";
import NoticeFactory from "../Notification/NoticeFactory";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";
// Data array
const tabTitle = [
  {
    tabname: "공지사항",
  },
  {
    tabname: "익명게시판",
  },
];

function BulletinTab({
  userObj,
  texts,
  commentList,
  notices,
  noticeCommentList,
}) {
  const [tabIndex, setTabIndex] = useState(0);
  const [tabObj, setTabObj] = useState(tabTitle[tabIndex]);
  const history = useHistory();
  const { REACT_APP_OWNER_UID: OWNER_UID } = process.env;
  const isOwner = userObj.uid === OWNER_UID;

  useEffect(() => {
    history.push("/admin/bulletin/공지사항");
  }, [history]);

  useEffect(() => {
    setTabObj(tabTitle[tabIndex]);
  }, [tabIndex]);

  function handleBtnClick(e) {
    setTabIndex(parseInt(e.target.id));
    history.push(
      `/admin/bulletin/${tabTitle[parseInt(e.target.id)].tabname.toLowerCase()}`
    );
  }

  const btnLabels = tabTitle.map((obj) => obj.tabname);

  return (
    <>
      <div className="tabContainer">
        <div className="navWrapper">
          <Nav
            btnLabels={btnLabels}
            tabIndex={tabIndex}
            handleBtnClick={handleBtnClick}
          />
        </div>
        <div className="tabcontent">
          <Switch>
            <Route
              path="/admin/bulletin/공지사항/글쓰기"
              render={() => <NoticeFactory userObj={userObj} />}
            />
            <Route
              path="/admin/bulletin/공지사항"
              render={() => (
                <Notification
                  userObj={userObj}
                  notices={notices}
                  noticeCommentList={noticeCommentList}
                  isOwner={isOwner}
                />
              )}
            />
            <Route
              path="/admin/bulletin/사내게시판"
              render={() => (
                <Unknown
                  userObj={userObj}
                  texts={texts}
                  commentList={commentList}
                  isOwner={isOwner}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </>
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
      className={id === tabIndex ? "tablinks active" : "tablinks"}
      id={id}
      onClick={(e) => handleBtnClick(e)}
    >
      {tabname}
    </button>
  );
}

export default BulletinTab;
