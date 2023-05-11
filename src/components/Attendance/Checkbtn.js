import React, { useRef, useState } from 'react';
import { message } from 'antd';

const Checkbtn = ({ IsChecked, setIsChecked }) => {
  const checkboxRef = useRef(null);
  const [isSwitching, setIsSwitching] = useState(false);

  const toggleElementCheck = (element) => {
    if (element.classList.contains('-unchecked')) {
      element.classList.remove('-unchecked');
    }
    element.classList.toggle('-checked');
  };

  const check = () => {
    checkboxRef.current
      .querySelector('.checkbox__background')
      .classList.add('-checked');
    toggleElementCheck(checkboxRef.current.querySelector('.checkbox__border'));
    setTimeout(() => {
      toggleElementCheck(checkboxRef.current.querySelector('.checkbox__check'));
    }, 360);
    setTimeout(() => {
      toggleElementCheck(checkboxRef.current);
    }, 400);
  };

  const unCheck = () => {
    toggleElementCheck(checkboxRef.current.querySelector('.checkbox__check'));
    toggleElementCheck(checkboxRef.current);
    setTimeout(() => {
      toggleElementCheck(
        checkboxRef.current.querySelector('.checkbox__border')
      );
    }, 200);
  };

  const toggle = () => {
    if (isSwitching) return;
    setIsSwitching(true);
    checkboxRef.current.classList.add('-animating');
    if (IsChecked) {
      unCheck();
      setIsChecked(false);
      message.success('출근 등록이 완료되었습니다.');
    } else {
      check();
      setIsChecked(true);
      message.success('퇴근 등록이 완료되었습니다.');
    }
  };

  const handleAnimationEnd = () => {
    setIsSwitching(false);
    if (!IsChecked) {
      checkboxRef.current
        .querySelector('.checkbox__background')
        .classList.remove('-checked');
    }
  };

  return (
    <>
      <svg
        className={`checkbox ${IsChecked ? '-checked' : '-unchecked'} ${
          isSwitching ? '-animating' : ''
        }`}
        ref={checkboxRef}
        xmlns="http://www.w3.org/1000/svg"
        onClick={toggle}
        onAnimationEnd={handleAnimationEnd}
      >
        <rect className="checkbox__border -unchecked" rx="2.5rem" />
        <rect className="checkbox__background" rx="2.5rem" />
        <path
          className="checkbox__check -unchecked"
          d="M104.869,1.3,21.024,93.876.949,75.457"
        />
      </svg>
    </>
  );
};

export default Checkbtn;
