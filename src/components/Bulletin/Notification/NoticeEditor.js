import React from 'react';
import { dbService } from '../../../Loginbase';
import { message } from 'antd';
import { doc, updateDoc } from 'firebase/firestore';

const NoticeEditor = ({
  noticeObj,
  toggleEditing,
  NewNotice,
  setNewNotice,
  setIsEditing,
}) => {
  const onUpdateSubmit = async (event) => {
    event.preventDefault();
    const noticeRef = doc(dbService, `Notices/${noticeObj.id}`);
    await updateDoc(noticeRef, { notice: NewNotice });
    setIsEditing((prev) => !prev);
    return message.success('게시글이 업데이트 되었습니다.');
  };

  const onEditingNotice = (event) => {
    const { value } = event.target;
    setNewNotice(value);
  };
  return (
    <>
      <h4>{noticeObj.displayName}</h4>
      <form onSubmit={onUpdateSubmit} className="container nweetEdit">
        <input
          type="text"
          value={NewNotice}
          placeholder={noticeObj.noticeContent}
          onChange={onEditingNotice}
          autoFocus
          required
          className="formInput"
        />
        <input type="submit" value="Edit Notice" className="formBtn" />
        <span onClick={toggleEditing} className="formBtn cancelBtn">
          Cancel
        </span>
      </form>
    </>
  );
};

export default NoticeEditor;
