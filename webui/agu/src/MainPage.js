import React from 'react';
import './MainPage.css';

function MainPage(props) {
  const { handlePageChange } = props;
  
  return (
    <div className="MainPage">
      <div className="Header">
        <h1>ALL Ground Up</h1>
        <div className="Buttons">
          <button onClick={() => handlePageChange('SignUp')}>Sign Up</button>
          <button onClick={() => handlePageChange('Login')}>Login</button>
        </div>
      </div>
      <div className="Container">
        <div className="CenteredButtons">
          <button onClick={() => handlePageChange('Customer')}>Customer</button>
          <button onClick={() => handlePageChange('Driver')}>Driver</button>
          <button onClick={() => handlePageChange('Restaurant')}>Restaurant</button>
        </div>
      </div>
      <div className="Footer">
        <div className="FooterButtons">
          <button className="FooterButton">About Us</button>
          <button className="FooterButton">Contact Us</button>
          <button className="FooterButton">Reviews</button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
