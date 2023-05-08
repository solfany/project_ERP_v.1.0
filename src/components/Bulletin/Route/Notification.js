import NoticeFactory from '../Notification/NoticeFactory';
import NoticePage from '../Notification/NoticePage';

function Notification({ userObj, notices, noticeCommentList, isOwner }) {
  return (
    <>
      <NoticeFactory userObj={userObj} />
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
    </>
  );
}
export default Notification;
