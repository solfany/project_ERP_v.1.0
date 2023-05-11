import React, { useState } from 'react';
import { dbService } from '../../../Loginbase';
import { message } from 'antd';
import { doc, updateDoc } from 'firebase/firestore';
import EditorEditor from '../Editor/EditorEditor';

const NoticeEditor = ({ noticeObj, toggleEditing, setIsEditing }) => {
  const [newNotice, setNewNotice] = useState(noticeObj.noticeContent);
  const scrollToTop = () => {
    console.log('scrollToTop called'); // 함수 호출 확인
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  };

  const onUpdateSubmit = async (event) => {
    event.preventDefault();
    const noticeRef = doc(dbService, `Notices/${noticeObj.id}`);
    await updateDoc(noticeRef, { noticeContent: newNotice });
    setIsEditing((prev) => !prev);
    scrollToTop();
    return message.success('게시글이 업데이트 되었습니다.');
  };

  return (
    <>
      <div className="Text__container">
        <h4 className="Text__displayName">
          <span className="Text__author">작성자 :</span>
          {noticeObj.displayName}
          <img
            src={noticeObj.creatorPhoto}
            alt="프로필사진"
            className="Text__Pusa"
          />
        </h4>

        <div className="Notice__textcontainer">
          <div
            className="Notice__notice"
            style={{
              position: 'relative',
              display: 'flex',
            }}
          >
            &nbsp;
            <h4
              className="Notice__notice"
              style={{
                cursor: 'pointer',
                display: 'inline-block',
                color: 'black',
                fontWeight: '700',
              }}
            >
              {noticeObj.notice}
            </h4>
          </div>
        </div>
      </div>
      <form onSubmit={onUpdateSubmit} className="Edit">
        <EditorEditor
          value={newNotice}
          newNotice={newNotice}
          setNewNotice={setNewNotice}
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
