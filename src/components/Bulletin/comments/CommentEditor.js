import React from 'react';
import { dbService } from './../../../Loginbase';
import { message } from 'antd';

const CommentEditor = ({
  comment,
  onToggleCommentEditMode,
  NewComment,
  setNewComment,
}) => {
  const onUpdateSubmit = async (event) => {
    event.preventDefault();

    await dbService.doc(`Comments/${comment.id}`).update({
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
      <form onSubmit={onUpdateSubmit} className="container nweetEdit">
        <input
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
