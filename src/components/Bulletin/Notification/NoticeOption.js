import React from 'react';
import ReplyOption from './Option/ReplyOption';
import DeleteOption from './Option/DeleteOption';
import EditOption from './Option/EditOption';
import { Tooltip } from 'antd';

function NoticeOption({
  isCreator,
  onDeleteClick,
  toggleEditing,
  toggleComment,
}) {
  return (
    <div className="OptionContainer" style={{ fontSize: '20px' }}>
      <Tooltip title="댓글">
        <span>
          <ReplyOption toggleComment={toggleComment} />
        </span>
      </Tooltip>
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
        </div>
      ) : null}
    </div>
  );
}

export default NoticeOption;
