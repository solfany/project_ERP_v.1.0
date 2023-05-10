import React, { useState } from 'react';
import { Image } from 'antd';
import { Button, Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

const Notice = ({ noticeObj }) => {
  const email = noticeObj.email.split('@')[0];
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="Text__container">
      <h4 className="Text__displayName">
        <span className="Text__author">작성자 :</span>
        {noticeObj.displayName}
        <span className="Text__email">{email}</span>
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
          {noticeObj.IsImportant ? (
            <h4
              style={{
                color: 'red',
                fontWeight: '700',
                display: 'inline-block',
              }}
            >
              [필독]
            </h4>
          ) : null}
          &nbsp;
          <h4
            className="Notice__notice"
            onClick={toggle}
            style={{
              cursor: 'pointer',
              display: 'inline-block',
              color: 'black',
              fontWeight: '700',
            }}
          >
            {noticeObj.notice}
          </h4>
          <div
            className="notice__Icon"
            style={{
              fontSize: '20px',
              color: 'black',
              position: 'absolute',
              right: '12px',
            }}
          >
            {isOpen ? (
              <FontAwesomeIcon icon={faSortDown} />
            ) : (
              <FontAwesomeIcon icon={faCaretUp} />
            )}
          </div>
        </div>
        <div>
          <Collapse isOpen={isOpen}>
            <div className="Notice__noticeContent">
              <h4>{noticeObj.noticeContent}</h4>
            </div>
          </Collapse>
        </div>
        <div>
          {noticeObj.attachmentUrl && (
            <img
              src={noticeObj.attachmentUrl}
              alt="첨부이미지"
              className="Text__attachmentImg"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Notice;

/*
  issue 1
    > 트윗 공개 여부에 따라 메시지 표시 or 비공개 트윗 표시
      - noticeObj.IsPublic ? noticeObj.text : "비공개 트윗입니다."
    > 비공개 트윗일 경우 작성자이거나 OWNER 계정일 경우 공개, 다른 유저일 경우 비공개
      - userObj.uid === OWNER_UID || noticeObj.creatorId === userObj.uid
      - ? {noticeObj.text}
      - : {"비공개 트윗입니다."}
*/
