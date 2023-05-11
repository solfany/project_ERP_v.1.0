import React from 'react';
import ReplyOption from '../Option/ReplyOption';
import DeleteOption from '../Option/DeleteOption';
import EditOption from '../Option/EditOption';
import ScopeOption from '../Option/ScopeOption';
import { Tooltip } from 'antd';

function TextOptions({
  isCreator,
  isOwner,
  onDeleteClick,
  toggleEditing,
  toggleComment,
  onChangeScope,
  IsPublic,
}) {
  return (
    <div style={{ fontSize: '20px' }}>
      {IsPublic || isCreator || isOwner ? (
        <Tooltip title="댓글">
          <span>
            <ReplyOption toggleComment={toggleComment} />
          </span>
        </Tooltip>
      ) : null}
      {isCreator ? (
        <div style={{ fontSize: '20px' }}>
          <Tooltip title="삭제하기">
            <span>
              <DeleteOption onDeleteClick={onDeleteClick} />
            </span>
          </Tooltip>
          <Tooltip title="수정하기">
            <span>
              <EditOption toggleEditing={toggleEditing} />
            </span>
          </Tooltip>
          <Tooltip title="공개범위설정">
            <span>
              <ScopeOption IsPublic={IsPublic} onChangeScope={onChangeScope} />
            </span>
          </Tooltip>
        </div>
      ) : null}
    </div>
  );
}

export default TextOptions;

/*
    issue 1. TextOptions 출력 조건 설정
    > 트윗 작성자 검증
      - isCreator(tweet.creatorId === UserObject.uid)
    > 관리자 검증
      - isOwner(UserObject.uid === REACT_APP_OWNER_UID)
    > TextOptions에 전달된 조건에 따라 options component 출력
      A. <ReplyText />
        - 공개글일 경우 모두에게 공개, 미공개글일 경우 작성자와 관리자에게만 출력
      B. <DeleteText />
        - isCreator ? <DeleteText /> : null
      C. <EditText />
        - isCreator ? <EditText /> : null
      D. <Scope />
        - isCreator ? <EditText /> : null
  
  
  */
