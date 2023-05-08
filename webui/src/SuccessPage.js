import React from 'react';
import './SuccessPage.css';

function SuccessPage(props) {
  const { handlePageChange } = props;

  const handleClick = () => {
    handlePageChange('MainPage');
  };

  return (
    <div>
      <h1>Sign Up Successful!</h1>
      <p>Your account has been created successfully.</p>
      <div className="button-container">
        <button onClick={handleClick}>Main Page</button>
      </div>
    </div>
  );
}

export default SuccessPage;
