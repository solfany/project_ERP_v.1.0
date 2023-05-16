import { useState } from 'react';
import './CheckButton.css';
import { message } from 'antd';
import Welcome from './Welcome';

function CheckButton() {
  const [isClicked, setIsClicked] = useState(false);

  const handleToggle = () => {
    if (!isClicked) {
      message.success('출근 등록이 완료되었습니다.');
    } else {
      message.success('퇴근 등록이 완료되었습니다.');
    }
    setIsClicked((prev) => !prev);
  };

  return (
    <div class="CBcontent">
      <label for="big-check">
        <input type="checkbox" id="big-check" onClick={handleToggle} />
        <div class="CBcontainer">
          <div class="blok check-a"></div>
          <div class="blok side-top"></div>
          <div class="blok check-b"></div>
          <div class="blok side-left"></div>
          <div class="blok center"></div>
          <div class="blok side-right"></div>
          <div class="blok check-d"></div>
          <div class="blok side-bottom"></div>
          <div class="blok check-c"></div>
        </div>
      </label>
    </div>
  );
}
export default CheckButton;
