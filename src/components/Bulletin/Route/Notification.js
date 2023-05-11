import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import NoticePage from '../Notification/NoticePage';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Notification({ userObj, notices, noticeCommentList, isOwner }) {
  return (
    <div>
      <div className="noticeTitle">
        <h2 className="noticeTitleH2">공지사항</h2>
        <Link to="/admin/bulletin/공지사항/글쓰기">
          <div className="bulletin_box">
            <FontAwesomeIcon icon={faPenNib} className="noticeTitleWriteBtn" />
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Link>
      </div>
      {/* <NoticeFactory userObj={userObj} /> */}
      <hr />
      <div className="notice">{` ${notices.length}개의 게시글이 있습니다.`}</div>

      <div style={{ marginTop: 30 }}>
        {notices.map((notice) => (
          <NoticePage
            key={notice.id}
            noticeObj={notice}
            isCreator={userObj.uid === notice.creatorId}
            isOwner={isOwner}
            userObj={userObj}
            commentsObject={noticeCommentList(notice.id)}
          />
        ))}
      </div>
    </div>
  );
}
export default Notification;
