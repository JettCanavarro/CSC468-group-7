import React from 'react';
import './SecondaryPage.css';

function SecondaryPage(props) {
  const { handlePageChange } = props;
  
  return (
    <div className="SecondaryPage">
      <div className="CenteredButtons">
        <button onClick={() => handlePageChange('Customer')}>Customer</button>
        <button onClick={() => handlePageChange('Driver')}>Driver</button>
        <button onClick={() => handlePageChange('Restaurant')}>Restaurant</button>
      </div>
    </div>
  );
}

export default SecondaryPage;
