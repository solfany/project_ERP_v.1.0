import React from 'react';
import { Switch } from 'antd';

const NoticeScope = ({ IsImportant, onChangeScope }) => {
  return (
    <div className="form__scope">
      <div className="scope__switch">
        <Switch defaultChecked onChange={onChangeScope} />
      </div>
      {IsImportant ? (
        <>
          <span className="scope__public">
            <span style={{ color: 'red', fontWeight: '700' }}>[필독]</span> 을
            표시합니다.
          </span>
        </>
      ) : (
        <>
          <span className="scope__private">[필독]을 표시하지 않습니다.</span>
        </>
      )}
    </div>
  );
};

export default NoticeScope;
