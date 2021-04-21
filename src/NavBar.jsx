import React, { useState, useEffect } from 'react';
import './NavBar.css';
import Logo from './Assets/Logo_Trans.png';
import Avatar from './Assets/Avatar.png';
import { useHistory } from 'react-router-dom';

function NavBar() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img
          onClick={() => history.push('/')}
          className="nav__logo"
          src={Logo}
          alt="Logo"
        />
        <img
          onClick={() => history.push('/profile')}
          className="nav__avatar"
          src={Avatar}
          alt="Avatar"
        />
      </div>
    </div>
  );
}

export default NavBar;
