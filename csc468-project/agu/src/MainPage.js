import React from 'react';
import CustomersPage from './CustomersPage';

import './MainPage.css';


function MainPage() {
  return (
    <div className="MainPage">
      <div className="Header HeaderImage">
        <h1>ALL Ground Up</h1>
      </div>
      <div className="ButtonContainer">
        <button>Customer</button>
        <button>Coffee Shop</button>
        <button>Driver</button>
      </div>
    </div>
  );
}

export default MainPage;
