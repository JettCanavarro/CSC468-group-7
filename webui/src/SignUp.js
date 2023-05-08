import React, { useState } from 'react';
import './SignUp.css';
import SuccessPage from './SuccessPage.js';

function SignUp(props) {
  const { handlePageChange } = props;
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
    zipcode: '',
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
    const { firstName, lastName, username, email, password, phoneNumber, address, zipcode } = formData;
    const data = {
      firstName,
      lastName,
      username,
      email,
      password,
      phoneNumber,
      address,
      zipcode
    };
  
    fetch('http://127.0.0.1:5000/api/signup', {
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
    <div className="signup-form-container">
      {isFormSubmitted ? (
        <SuccessPage handlePageChange={handlePageChange} />
      ) : (
      <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label>
            First Name:
            <input type="text" value={formData.firstName} onChange={(e) => handleChange(e, 'firstName')} />
          </label>
        </div>
        <div className="form-input">
          <label>
            Last Name:
            <input type="text" value={formData.lastName} onChange={(e) => handleChange(e, 'lastName')} />
          </label>
        </div>
        <div className="form-input">
          <label>
            Username:
            <input type="text" value={formData.username} onChange={(e) => handleChange(e, 'username')} />
          </label>
        </div>
        <div className="form-input">
          <label>
            Email:
            <input type="text" value={formData.email} onChange={(e) => handleChange(e, 'email')} />
          </label>
        </div>
        <div className="form-input">
          <label>
            Password:
            <input type="text" value={formData.password} onChange={(e) => handleChange(e, 'password')} />
          </label>
        </div>
        <div className="form-input">
          <label>
            Phone Number:
            <input type="text" value={formData.phoneNumber} onChange={(e) => handleChange(e, 'phoneNumber')} />
          </label>
        </div>
        <div className="form-input">
          <label>
            Address:
            <input type="text" value={formData.address} onChange={(e) => handleChange(e, 'address')} />
          </label>
        </div>
        <div className="form-input">
          <label>
            Zipcode:
            <input type="int" value={formData.zipcode} onChange={(e) => handleChange(e, 'zipcode')} />
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

export default SignUp;
