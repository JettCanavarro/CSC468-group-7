import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './MainPage';
import CustomersPage from './CustomersPage';
import VendorsPage from './VendorsPage';
import DriversPage from './DriversPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/" element={<CustomersPage />} />
        <Route path="/vendors" component={VendorsPage} />
        <Route path="/drivers" component={DriversPage} />
      </Routes>
    </Router>
  );
}

export default App;
