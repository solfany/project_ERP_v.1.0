import React from 'react';
import { Switch } from 'antd';

const TextScope = ({ IsPublic, onChangeScope }) => {
  return (
    <div className="form__scope">
      <div className="scope__switch">
        <Switch defaultChecked onChange={onChangeScope} />
      </div>
      {IsPublic ? (
        <>
          <span className="scope__public">게시글이 모두에게 공개됩니다.</span>
        </>
      ) : (
        <>
          <span className="scope__private">
            게시글이 관리자에게만 공개됩니다.
          </span>
        </>
      )}
    </div>
  );
};

export default TextScope;
