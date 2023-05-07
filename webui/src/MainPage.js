  import React, { useState } from 'react';
  import './MainPage.css';
  import logo from './img/agu logo 4.png';
  import backgroundImg from './img/background.png';

  function MainPage(props) {
    const { handlePageChange } = props;
    const backgroundStyle = {
      backgroundImage: `url(${backgroundImg})`,
    };
    
    const [showAboutUs, setShowAboutUs] = useState(false);

    const toggleAboutUs = () => {
      setShowAboutUs(!showAboutUs);
    };

    return (
      <div className="MainPage">
        <div className="Header">
          <img src={logo} alt="All Ground Up Logo" />
          <div className="Buttons">
            <button onClick={() => handlePageChange('SignUp')}>Sign Up</button>
            <button onClick={() => handlePageChange('Login')}>Login</button>
          </div>
        </div>
        <div className="Container" style={backgroundStyle}>
          <div className="SearchContainer">
            <form className="SearchBar">
            <input type="text" placeholder="Search your favorite local coffee shops..." />
            <button type="submit">Search</button>
            </form>
          </div>
          <div className="Slogan">
          <h2>"Life's Too Short For Bad Coffee"</h2>
          </div>
        </div>
        <div className="Footer">
          <div className="FooterButtons">
            <button className="FooterButton" onClick={toggleAboutUs}>About Us</button>
            <button className="FooterButton">Contact Us</button>
            <button className="FooterButton">Reviews</button>
          </div>
        </div>
        {showAboutUs && 
          <div className="AboutUsModal">
            <div className="AboutUsContent">
              <span className="CloseButton" onClick={toggleAboutUs}>&times;</span>
              <p>All Ground Up is a cloud-based web application designed to allow users to order coffee delivery from their favorite local coffee shops with ease. The application supports consumers, vendors, and drivers. The customers can order from the application and the order will be sent directly to one of the drivers with the best route for delivery. Vendors can change and update their menu which will be updated directly for the customers to view. All Ground up is created using Docker containers and deployed through Kubernetes.</p>
            </div>
          </div>
        }
      </div>
    );
  }

  export default MainPage;
