import React from 'react';

const Bulletin = (props) => {
  const { myProp } = props;
  return (
    <div className="content">
      <h1>Bulletin</h1>
      <p>myProp: {myProp}</p>
    </div>
  );
};

export default Bulletin;
