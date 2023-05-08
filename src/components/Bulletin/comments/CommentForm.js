import React, { useState } from 'react';
import { dbService } from './../../../Loginbase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { addDoc, collection } from 'firebase/firestore';

const CommentForm = ({ userObj, textObj, toggleComment }) => {
  const [Comment, setComment] = useState('');
  const [IsPublic, setIsPublic] = useState(true);

  const onSubmitComment = async (event) => {
    event.preventDefault();

    const commentObject = {
      email: userObj.email,
      displayName: userObj.displayName,
      text: Comment,
      createdAt: new Date(),
      creatorId: userObj.uid,
      IsPublic,
      responseTo: textObj.id,
    };

    await addDoc(collection(dbService, 'Comments'), commentObject);
    setComment('');
  };

  const onChangeComment = (event) => {
    setComment(event.currentTarget.value);
  };

  const onChangeCommentScope = () => {
    setIsPublic((prev) => !prev);
  };

  return (
    <>
      <div className="form__scope" onClick={onChangeCommentScope}>
        {IsPublic ? (
          <>
            <FontAwesomeIcon icon={faLockOpen} />
            <span>댓글이 모두에게 공개됩니다.</span>
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faLock} />
            <span>댓글이 {textObj.displayName} 님에게만 공개됩니다.</span>
          </>
        )}
      </div>
      <form onSubmit={onSubmitComment} className="container nweetEdit">
        <input
          type="text"
          value={Comment}
          placeholder="댓글을 입력하세요."
          onChange={onChangeComment}
          className="formInput"
          required
        />
        <input type="submit" value="답글달기" className="formBtn" />
      </form>
    </>
  );
};

export default CommentForm;

/*
  issue A. comment 입력 양식 및 업데이트
    > comment data
      - id: String, uuidv4()를 통한 임의의 id 생성
      - IsPublic: Boolean, 공개/비공개 여부
      - email: String, 작성자 email
      - displayName: String, 작성자 displayName
      - text: String, 작성된 comment 내용
      - createdAt: Date, 작성 시점
      - creatorId: String, 작성자 uid
    > update
      - firebaseStore에서 원글의 데이터를 찾아 comments 배열 정보를 가져온다.
      - 가져온 정보에 comment data를 추가해 update 한다.
    
  issue B. comment 구조 재구성
    > 문제점: comment 등록, 업데이트, 삭제가 복잡함.
      - tweet doc의 내부 필드값으로 comment를 관리하기가 어려움.
    > 해결방안 : comment doc를 새로 만들고 comment를 관리
      - comment정보와 tweet 정보를 매칭시킬 기능 구현
        - tweet.id === comment.responseTo matching
      - 등록(add), 업데이트(update), 삭제(delete)로 각각 하나의 기능을 수행하는 method 구성
*/
