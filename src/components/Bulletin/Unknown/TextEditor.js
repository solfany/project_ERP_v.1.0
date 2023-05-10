import React, { useState } from 'react';
import { dbService } from '../../../Loginbase';
import { message } from 'antd';
import { doc, updateDoc } from 'firebase/firestore';
import { Input } from 'reactstrap';

const TextEditor = ({ textObj, setIsEditing, toggleEditing }) => {
  const textRef = doc(dbService, 'Texts', `${textObj.id}`);
  const [newText, setNewText] = useState(textObj.text);
  const onUpdateSubmit = async (event) => {
    event.preventDefault();

    await updateDoc(textRef, { text: newText });

    toggleEditing();
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
          onChange={onEditingText}
          autoFocus
          required
          className="formInput"
        />
        <input
          type="submit"
          value="수정하기"
          className="formBtn"
          onClick={onUpdateSubmit}
        />
        <span onClick={toggleEditing} className="formBtn cancelBtn">
          취소
        </span>
      </form>
    </>
  );
};

export default TextEditor;
