import React, { useState } from 'react';
import { dbService, storageService } from '../../../Loginbase';
import { doc, deleteDoc } from 'firebase/firestore';
import { deleteObject, ref } from '@firebase/storage';
import { message } from 'antd';
import NoticeOption from './NoticeOption';
import NoticeEditor from './NoticeEditor';
import Notice from './Notice';
import CommentForm from './comments/CommentForm';
import Comment from './comments/Comment';

const TextPage = ({
  isCreator,
  isOwner,
  noticeObj,
  commentsObject,
  userObj,
}) => {
  const [IsEditing, setIsEditing] = useState(false);
  const [CommentToggle, setCommentToggle] = useState(false);

  //삭제하려는 이미지 파일 가리키는 ref 생성하기
  // nweetObj의 attachmentUrl이 바로 삭제하려는 그 url임

  const toggleEditing = () => {
    setIsEditing((prev) => !prev);
  };

  const toggleComment = () => {
    setCommentToggle((prev) => !prev);
  };

  const onDeleteClick = async () => {
    const ok = window.confirm('해당 게시글을 삭제하시겠습니까?');
    const Comments = commentsObject.filter(
      (comment) => comment.responseTo === noticeObj.id
    );
    if (ok) {
      await deleteDoc(doc(dbService, `Notices/${noticeObj.id}`));
      if (Comments.length > 0) {
        for (let i = 0; i < Comments.length; i++) {
          await deleteDoc(doc(dbService, `noticeComments/${Comments[i].id}`));
        }
      }
      if (noticeObj.attachmentURL) {
        await deleteObject(ref(storageService, noticeObj.attachmentURL));
      }
      return message.success('게시글이 삭제되었습니다.');
    }
  };

  return (
    <div className="TextPage__container">
      {IsEditing ? (
        <NoticeEditor
          noticeObj={noticeObj}
          toggleEditing={toggleEditing}
          setIsEditing={setIsEditing}
        />
      ) : (
        <>
          <Notice noticeObj={noticeObj} />
          <NoticeOption
            isCreator={isCreator}
            isOwner={isOwner}
            onDeleteClick={onDeleteClick}
            commentsObject={commentsObject}
            toggleEditing={toggleEditing}
            toggleComment={toggleComment}
          />

          {CommentToggle &&
            commentsObject.map((comment) => (
              <Comment
                key={comment.id}
                userObj={userObj}
                noticeObj={noticeObj}
                commentObject={comment}
              />
            ))}
          {CommentToggle && (
            <CommentForm
              userObj={userObj}
              noticeObj={noticeObj}
              toggleComment={toggleComment}
            />
          )}
        </>
      )}
    </div>
  );
};

export default TextPage;
