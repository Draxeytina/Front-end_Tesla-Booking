import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import Tesla from '../../assets/Tesla.png';
import './navbar.scss';

function Navbar() {
  const [hidden, setHidden] = useState(true);
  const toggle = () => setHidden(!hidden);
  const changeClass = (hidden) => (hidden ? 'hidden green' : 'white');
  const navbarLink = 'wrap link no-shadow';

  return (
    <>
      <button className={`burger-div wrap ${changeClass(!hidden)}`} type="button" onClick={toggle}>
        <div className="burger top" />
        <div className="burger invisible" />
        <div className="burger bottom" />
      </button>
      <nav className={`${changeClass(hidden)}`}>
        <div className="side-bar">
          <img src={Tesla} alt="Tesla garage logo" />
          <NavLink to="/" className={navbarLink} onClick={toggle}>Models</NavLink>
          <NavLink to="/reserve" className={navbarLink} onClick={toggle}>Reserve</NavLink>
          <NavLink to="/users/:id/reserved_cars" className={navbarLink} onClick={toggle}>My Reservations</NavLink>
          <NavLink to="/new" className={navbarLink} onClick={toggle}>New</NavLink>
          <NavLink to="/delete" className={navbarLink} onClick={toggle}>Delete</NavLink>
        </div>
        <footer>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
          <small>&copy; Tesla Booking 2022</small>
        </footer>
      </nav>
    </>
  );
}

export default Navbar;