import Factory from '../Unknown/Factory';
import TextPage from '../Unknown/TextPage';

function Unknown({ userObj, texts, commentList, isOwner }) {
  return (
    <>
      <Factory userObj={userObj} />
      <hr />
      <div className="notice">{` ${texts.length}개의 게시글이 있습니다.`}</div>

      <div style={{ marginTop: 30 }}>
        {texts.map((text) => (
          <TextPage
            key={text.id}
            textObj={text}
            isCreator={userObj.uid === text.creatorId}
            isOwner={isOwner}
            userObj={userObj}
            commentsObject={commentList(text.id)}
          />
        ))}
      </div>
    </>
  );
}
export default Unknown;
