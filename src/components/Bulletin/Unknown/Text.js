import React from 'react';
import { Image } from 'antd';

const Text = ({ textObj, userObj }) => {
  const OWNER_UID = process.env.REACT_APP_OWNER_UID;
  const email = textObj.email.split('@')[0];

  return (
    <div className="Text__container">
      <h4 className="Text__displayName">
        <span className="Text__author">작성자 :</span>
        {textObj.displayName}
        <span className="Text__email">{email}</span>
        <img
          src={textObj.creatorPhoto}
          alt="프로필사진"
          className="Text__Pusa"
        />
      </h4>
      {textObj.IsPublic ? (
        <div className="Text__textcontainer">
          <div>
            <h4 className="Text__text">{textObj.text}</h4>
          </div>
          <div>
            {textObj.attachmentUrl && (
              <img
                src={textObj.attachmentUrl}
                alt="첨부이미지"
                className="Text__attachmentImg"
              />
            )}
          </div>
        </div>
      ) : userObj.uid === OWNER_UID || textObj.creatorId === userObj.uid ? (
        <>
          <h4 className="Text__text">{textObj.text}</h4>
          {textObj.attachmentUrl && <Image src={textObj.attachmentUrl} />}
        </>
      ) : (
        <h4 className="Text__text private">비공개 게시글 입니다.</h4>
      )}
    </div>
  );
};

export default Text;

/*
  issue 1
    > 트윗 공개 여부에 따라 메시지 표시 or 비공개 트윗 표시
      - textObj.IsPublic ? textObj.text : "비공개 트윗입니다."
    > 비공개 트윗일 경우 작성자이거나 OWNER 계정일 경우 공개, 다른 유저일 경우 비공개
      - userObj.uid === OWNER_UID || textObj.creatorId === userObj.uid
      - ? {textObj.text}
      - : {"비공개 트윗입니다."}
*/
