import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { dbService, storageService } from '../../../Loginbase';
import { ref, uploadString, getDownloadURL } from '@firebase/storage';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
// import TextEditor from './TextEditor';
import { message } from 'antd';
import { Input } from 'reactstrap';
import NoticeScope from './NoticeScope';
import QuillEditor from '../Editor/QuillEditor';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const NoticeFactory = ({ userObj }) => {
  const history = useHistory();
  const [notice, setNotice] = useState('');
  const [noticeContent, setNoticeContent] = useState('');
  const [attachment, setAttachment] = useState('');
  //사진 첨부 없이 텍스트만 트윗하고 싶을 때도 있으므로 기본 값을 ""로 해야한다.
  //트윗할 때 텍스트만 입력시 이미지 url ""로 비워두기 위함
  const [IsImportant, setIsImportant] = useState(true);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (notice === '') return message.error('내용을 작성해주세요.');
    let attachmentUrl = '';
    if (attachment !== '') {
      message.info('공지사항을 업로드 중입니다.');
      const attachmentRef = ref(storageService, `${userObj.uid}/${uuidv4()}`);
      //storage 참조 경로로 파일 업로드 하기
      const response = await uploadString(
        attachmentRef,
        attachment,
        'data_url'
      );
      //storage 참조 경로에 있는 파일의 URL을 다운로드해서 attachment 변수에 넣어서 업데이트
      attachmentUrl = await getDownloadURL(attachmentRef);
    }
    //이미지 첨부하지 않고 텍스트만 올리고 싶을 때도 있기 때문에 attachment가 있을때만 아래 코드 실행
    //이미지 첨부하지 않은 경우엔 attachment=""이 된다.
    const noticeObj = {
      email: userObj.email,
      displayName: userObj.displayName,
      notice: notice,
      noticeContent: noticeContent,
      createdAt: serverTimestamp(),
      creatorId: userObj.uid,
      creatorPhoto: userObj.photoURL,
      IsImportant,
      attachmentUrl,
    };
    await addDoc(collection(dbService, 'Notices'), noticeObj);
    setNotice('');
    setNoticeContent('');
    onClearAttachment();
    history.push(`/admin/bulletin/공지사항`);

    return message.success('공지사항이 업로드 되었습니다.');
  };

  const onNoticeChange = ({ target: { value } }) => {
    setNotice(value);
  };
  const onNoticeContentChange = ({ target: { value } }) => {
    setNoticeContent(value);
  };

  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(theFile);
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };
  };

  const onClearAttachment = () => {
    const input = document.querySelector('input[type=file]');
    input.value = ''; // 파일 선택 창 초기화
    setAttachment('');
  };
  const onChangeScope = () => {
    setIsImportant(!IsImportant);
  };

  return (
    <div className="factoryContainer">
      <NoticeScope IsImportant={IsImportant} onChangeScope={onChangeScope} />
      <h3> 공지사항 </h3>
      <form onSubmit={onSubmit} className="factoryForm">
        <div className="factoryInput__container">
          <Input
            className="factoryInput__input"
            id="noticefactoryInput__notice"
            type="text"
            placeholder="공지사항 제목을 입력해주세요"
            onChange={onNoticeChange}
            maxLength={120}
            value={notice}
            style={{
              border: '2px solid #04AAFF',
            }}
          />
          <QuillEditor
            value={noticeContent}
            noticeContent={noticeContent}
            setNoticeContent={setNoticeContent}
          />
        </div>
        <div className="factoryInput__attach">
          <label htmlFor="attach-file" className="factoryInput__label">
            <span>사진 추가하기</span> &nbsp;
            <FontAwesomeIcon icon={faPlus} />
          </label>
          <input
            id="attach-file"
            type="file"
            accept="image/*"
            onChange={onFileChange}
            style={{
              opacity: 0,
            }}
          />

          {attachment && (
            <div className="factoryForm__attachment">
              <img
                alt="이미지를 불러오는데 실패했습니다."
                src={attachment}
                style={{
                  backgroundImage: attachment,
                }}
              />
              <div className="factoryForm__clear" onClick={onClearAttachment}>
                <span>Remove</span>
                <FontAwesomeIcon icon={faTimes} />
              </div>
            </div>
          )}
        </div>
        <div className="box boxInnerFactory" onClick={onSubmit}>
          <FontAwesomeIcon icon={faPenNib} className="noticeTitleWriteBtn" />
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </form>
    </div>
  );
};

export default NoticeFactory;
