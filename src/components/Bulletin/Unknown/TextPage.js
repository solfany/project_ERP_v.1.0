import React, { useState } from 'react';
import { dbService, storageService } from '../../../Loginbase';
import { doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { deleteObject, ref } from '@firebase/storage';
import { message } from 'antd';
import TextOptions from './TextOption';
import TextEditor from './TextEditor';
import Text from './Text';
import CommentForm from '../comments/CommentForm';
import Comment from '../comments/Comment';

const TextPage = ({ isCreator, isOwner, textObj, commentsObject, userObj }) => {
  const [IsEditing, setIsEditing] = useState(false);
  const [CommentToggle, setCommentToggle] = useState(false);
  const [newText, setNewText] = useState(textObj.text);
  const [IsPublic, setIsPublic] = useState(textObj.IsPublic);
  // const TextRef = doc(dbService, 'Texts', `${textObj.id}`);
  // const deleteRef = ref(storageService, textObj.attachmentUrl);

  //삭제하려는 이미지 파일 가리키는 ref 생성하기
  // nweetObj의 attachmentUrl이 바로 삭제하려는 그 url임

  const onChangeScope = async () => {
    setIsPublic(!IsPublic);
    await updateDoc(doc(dbService, 'Texts', textObj.id), {
      IsPublic: !IsPublic,
    });
    const result = !IsPublic
      ? '게시글이 모두에게 공개됩니다.'
      : '게시글이 관리자에게만 공개됩니다.';
    return message.success(result);
  };

  const toggleEditing = () => {
    setIsEditing((prev) => !prev);
  };

  const toggleComment = () => {
    setCommentToggle((prev) => !prev);
  };

  const onDeleteClick = async () => {
    const ok = window.confirm('해당 게시글을 삭제하시겠습니까?');
    const Comments = commentsObject.filter(
      (comment) => comment.responseTo === textObj.id
    );
    if (ok) {
      await deleteDoc(doc(dbService, `Texts/${textObj.id}`));
      if (Comments.length > 0) {
        for (let i = 0; i < Comments.length; i++) {
          await deleteDoc(doc(dbService, `Comments/${Comments[i].id}`));
        }
      }
      if (textObj.attachmentURL) {
        await deleteObject(ref(storageService, textObj.attachmentURL));
      }
      return message.success('게시글이 삭제되었습니다.');
    }
  };

  return (
    <div className="TextPage__container">
      {IsEditing ? (
        <TextEditor
          textObj={textObj}
          toggleEditing={toggleEditing}
          newText={newText}
          setNewText={setNewText}
        />
      ) : (
        <>
          <Text textObj={textObj} userObj={userObj} />
          <TextOptions
            isOwner={isOwner}
            isCreator={isCreator}
            textObj={textObj}
            onDeleteClick={onDeleteClick}
            toggleEditing={toggleEditing}
            toggleComment={toggleComment}
            onChangeScope={onChangeScope}
            IsPublic={IsPublic}
          />
          {isCreator && commentsObject.length > 0 && (
            <div className="notice">{`${commentsObject.length}개의 댓글이 있습니다 :)`}</div>
          )}
          {CommentToggle &&
            commentsObject.map((comment) => (
              <Comment
                key={comment.id}
                userObj={userObj}
                textObj={textObj}
                commentObject={comment}
              />
            ))}
          {CommentToggle && (
            <CommentForm
              userObj={userObj}
              textObj={textObj}
              toggleComment={toggleComment}
            />
          )}
        </>
      )}
    </div>
  );
};

export default TextPage;
