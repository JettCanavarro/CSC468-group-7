import React, { useState } from 'react';
import './SignUp.css';

function SignUp(props) {
  const { handlePageChange } = props;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic for submitting the form data
    console.log(formData);
    handlePageChange('MainPage');
  };

  const handleCancel = () => {
    handlePageChange('MainPage');
  };

  return (
    <div className="signup-form-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label>
            First Name:
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          </label>
        </div>
        <div className="form-input">
          <label>
            Last Name:
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          </label>
        </div>
        <div className="form-input">
          <label>
            Username:
            <input type="username" name="username" value={formData.userName} onChange={handleChange} />
          </label>
        </div>
        <div className="form-input">
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
        </div>
        <div className="form-input">
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
          </label>
        </div>
        <div className="form-input">
          <label>
            Phone Number:
            <input type="phone number" name="phone" value={formData.phoneNumber} onChange={handleChange} />
          </label>
        </div>
        <div className="form-input">
          <label>
            Address:
            <input type="address" name="address" value={formData.address} onChange={handleChange} />
          </label>
        </div>
        <div className="form-input">
          <label>
            Zipcode:
            <input type="zipcode" name="zipcode" value={formData.zipcode} onChange={handleChange} />
          </label>
        </div>
        <div className="form-input">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
