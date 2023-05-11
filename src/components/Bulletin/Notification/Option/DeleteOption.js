import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const DeleteOption = ({ onDeleteClick }) => {
  return (
    <>
      <span onClick={onDeleteClick}>
        <FontAwesomeIcon icon={faTrash} />
      </span>
    </>
  );
};

export default DeleteOption;

/*
  issue A. props 변경
    > props로 전달받은 method에 따라 삭제 대상 변경
      - Tweet 삭제
      - Tweet.comments 업데이트
*/
