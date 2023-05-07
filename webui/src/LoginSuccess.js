import React from 'react';
import './SuccessPage.css';

function LoginSuccess(props) {
  const { handlePageChange } = props;

  const handleClick = () => {
    handlePageChange('MainPage');
  };

  return (
    <div>
      <h1>Login Successful!</h1>
      <p>You have successfully logged into your account.</p>
      <div className="button-container">
        <button onClick={handleClick}>Main Page</button>
      </div>
    </div>
  );
}

export default LoginSuccess;
