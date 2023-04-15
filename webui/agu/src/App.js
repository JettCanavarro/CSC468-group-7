// App.js

import React, { useState } from 'react';
import MainPage from './MainPage';
import SignUp from './SignUp';
import Login from './Login';

function App() {
  const [currentPage, setCurrentPage] = useState('MainPage');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  let page;

  if (currentPage === 'SignUp') {
    page = <SignUp handlePageChange={handlePageChange} />;
  } else if (currentPage === 'Login') {
    page = <Login handlePageChange={handlePageChange} />;
  } else {
    page = <MainPage handlePageChange={handlePageChange} />;
  }

  return (
    <div>
      {page}
    </div>
  );
}

export default App;

