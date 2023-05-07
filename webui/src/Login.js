import React, { useState } from 'react';
import './Login.css';
import LoginSuccess from './LoginSuccess.js';

function Login(props) {
  const { handlePageChange } = props;
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e, property) => {
    setFormData({
      ...formData,
      [property]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;
    const data = {
      username,
      password
    };
  
    fetch('http://127.0.0.1:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          console.log('Form submission successful!');
          setIsFormSubmitted(true);
        } else {
          console.error('Error submitting form:', data.error);
        }
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });  
  };  

  const handleCancel = () => {
    handlePageChange('MainPage');
  };

  return (
    <div className="login-container">
      {isFormSubmitted ? (
        <LoginSuccess handlePageChange={handlePageChange} />
      ) : (
      <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label>
            Username:
            <input type="text" value={formData.username} onChange={(e) => handleChange(e, 'username')} />
          </label>
        </div>
        <div className="form-input">
          <label>
            Password:
            <input type="text" value={formData.password} onChange={(e) => handleChange(e, 'password')} />
          </label>
        </div>
        <div className="form-input">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
        </form>
      </>
    )}
  </div>
  );
}

export default Login;
