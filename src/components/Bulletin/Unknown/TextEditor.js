import React from 'react';
import { dbService } from '../../../Loginbase';
import { message } from 'antd';
import { doc, updateDoc } from 'firebase/firestore';
import { Input } from 'reactstrap';

const TextEditor = ({ textObj, newText, setNewText, setIsEditing }) => {
  const textRef = doc(dbService, 'Texts', `${textObj.id}`);

  const onUpdateSubmit = async (event) => {
    event.preventDefault();

    await updateDoc(textRef, { text: newText });

    setIsEditing((prev) => !prev);
    return message.success('게시글이 업데이트 되었습니다.');
  };

  const onEditingText = (event) => {
    const { value } = event.target;
    setNewText(value);
  };
  return (
    <>
      <h4 className="noticeComment__displayName">{textObj.displayName}</h4>
      <form onSubmit={onUpdateSubmit} className="Edit">
        <Input
          type="text"
          value={newText}
          placeholder="Edit Your Text"
          onChange={onEditingText}
          autoFocus
          required
          className="formInput"
        />
        <input type="submit" value="Edit Text" className="formBtn" />
        <span
          onClick={() => setIsEditing((prev) => !prev)}
          className="formBtn cancelBtn"
        >
          Cancel
        </span>
      </form>
    </>
  );
};

export default TextEditor;
