import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownVisible(!dropdownVisible);
  };

  const userImage = '../assets/images/user/1.jpg';
  const userName = 'Bni Cyst';
  const userStatus = 'Available';

  const items = [
    { link: '../app/profile.html', title: 'My Profile', description: 'View personal profile details.', icon: 'ri-file-user-line', bgColor: 'primary' },
    { link: '../app/profile-edit.html', title: 'Edit Profile', description: 'Modify your personal details.', icon: 'ri-profile-line', bgColor: 'warning' },
    { link: '../app/account-setting.html', title: 'Account settings', description: 'Manage your account parameters.', icon: 'ri-account-box-line', bgColor: 'info' },
    { link: '../app/privacy-setting.html', title: 'Privacy Settings', description: 'Control your privacy parameters.', icon: 'ri-lock-line', bgColor: 'danger' },
  ];

  return (
    <div className="iq-top-navbar">
      <div className="iq-navbar-custom">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <div className="iq-navbar-logo d-flex justify-content-between">
            <Link to="/dashboard">
              <img src="../assets/images/logo.png" className="img-fluid" alt="" />
              <span>SocialV</span>
            </Link>
            <div className="iq-menu-bt align-self-center">
              <div className="wrapper-menu">
                <div className="main-circle"><i className="ri-menu-line"></i></div>
              </div>
            </div>
          </div>

          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item dropdown">
                <a href="#" className="d-flex align-items-center dropdown-toggle" id="drop-down-arrow" onClick={toggleDropdown}>
                  <img src={userImage} className="img-fluid rounded-circle me-3" alt="user" />
                  <div className="caption">
                    <h6 className="mb-0 line-height">{userName}</h6>
                  </div>
                </a>
                {dropdownVisible && <Dropdown userImage={userImage} userName={userName} userStatus={userStatus} items={items} />}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
