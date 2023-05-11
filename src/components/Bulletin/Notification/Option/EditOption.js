import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const EditOption = ({ toggleEditing }) => {
  return (
    <>
      <span onClick={toggleEditing}>
        <FontAwesomeIcon icon={faPencilAlt} />
      </span>
    </>
  );
};

export default EditOption;

/*
  issue A. props 변경
    > 전달받은 props에 따라 다른 기능 수행
      - Tweet 업데이트
      - Tweet.comments 업데이트
*/
