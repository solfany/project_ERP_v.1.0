import React from 'react';
import { dbService } from './../../../Loginbase';
import { message } from 'antd';
import { doc, updateDoc } from 'firebase/firestore';
import { Input } from 'reactstrap';

const CommentEditor = ({
  comment,
  onToggleCommentEditMode,
  NewComment,
  setNewComment,
}) => {
  const CommentRef = doc(dbService, 'Comments', `${comment.id}`);

  const onUpdateSubmit = async (event) => {
    event.preventDefault();

    await updateDoc(CommentRef, {
      text: NewComment,
    });

    onToggleCommentEditMode((prev) => !prev);
    return message.success('댓글이 업데이트 되었습니다.');
  };

  const onEditingComment = (event) => {
    const { value } = event.target;
    setNewComment(value);
  };

  return (
    <>
      <h4>{comment.displayName}</h4>
      <form onSubmit={onUpdateSubmit} className="Edit">
        <Input
          type="text"
          value={NewComment}
          placeholder="Edit Your Comment"
          onChange={onEditingComment}
          autoFocus
          required
          className="formInput"
        />
        <input type="submit" value="Edit Comment" className="formBtn" />
        <span onClick={onToggleCommentEditMode} className="formBtn cancelBtn">
          Cancel
        </span>
      </form>
    </>
  );
};

export default CommentEditor;
