import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loader = () => {
  return (
    <div className="loader__container">
      <FontAwesomeIcon
        icon={faSpinner}
        spinPulse
        size="2xl"
        style={{ color: '#005cfa' }}
      />
    </div>
  );
};

export default Loader;
