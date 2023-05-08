import React from 'react';
import { dbService } from '../../../Loginbase';
import { message } from 'antd';
import { doc, updateDoc } from 'firebase/firestore';

const TextEditor = ({
  textObj,
  toggleEditing,
  NewText,
  setNewText,
  setIsEditing,
}) => {
  const onUpdateSubmit = async (event) => {
    event.preventDefault();
    const textRef = doc(dbService, `Texts/${textObj.id}`);
    await updateDoc(textRef, { text: NewText });
    setIsEditing((prev) => !prev);
    return message.success('게시글이 업데이트 되었습니다.');
  };

  const onEditingText = (event) => {
    const { value } = event.target;
    setNewText(value);
  };
  return (
    <>
      <h4>{textObj.displayName}</h4>
      <form onSubmit={onUpdateSubmit} className="container nweetEdit">
        <input
          type="text"
          value={NewText}
          placeholder="Edit Your Text"
          onChange={onEditingText}
          autoFocus
          required
          className="formInput"
        />
        <input type="submit" value="Edit Text" className="formBtn" />
        <span onClick={toggleEditing} className="formBtn cancelBtn">
          Cancel
        </span>
      </form>
    </>
  );
};

export default TextEditor;
