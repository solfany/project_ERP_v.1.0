import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';

const ScopeOption = ({ IsPublic, onChangeScope }) => {
  return (
    <>
      <span onClick={onChangeScope}>
        <FontAwesomeIcon icon={IsPublic ? faLockOpen : faLock} />
      </span>
    </>
  );
};

export default ScopeOption;

/*
  issue A. option 대상 설정
    > Scope가 변경시키는 대상이 tweet인지 comment인지 구분
      - props로 대상을 전달받아 onChangeScope 함수에 인자로 전달
*/
