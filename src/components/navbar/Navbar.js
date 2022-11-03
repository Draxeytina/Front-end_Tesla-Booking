/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faGithub,
  faLinkedin,
  faAngellist,
} from '@fortawesome/free-brands-svg-icons';
import Tesla from '../../assets/Fondo-tesla.png';
import './navbar.scss';
import { Main } from '../main';

function Navbar(props) {
  const data = props;
  const { admin, handleLogout } = data;
  const main = new Main();
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
          <NavLink to="/home" className={navbarLink} onClick={toggle}>Models</NavLink>
          <NavLink to="/reserve" className={navbarLink} onClick={toggle}>Reserve</NavLink>
          <NavLink to="/reservations" className={navbarLink} onClick={toggle}>My Reservations</NavLink>
          {admin
            ? (
              <>
                <NavLink to="/new" className={navbarLink} onClick={toggle}>New</NavLink>
                <NavLink to="/delete" className={navbarLink} onClick={toggle}>Delete</NavLink>
              </>
            )
            : (
              <>
              </>
            )}
          <button type="button" className={navbarLink} onClick={() => main.handleLogoutClick(handleLogout)}>Logout</button>
        </div>
        <footer>
          <div className="social-icons">
            <a href="https://github.com/Draxeytina/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://github.com/waqaskanju" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://github.com/Gopxfs" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://github.com/franclobo" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://github.com/fibini" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faAngellist} /></a>
          </div>
          <small>&copy; Tesla Booking 2022</small>
        </footer>
      </nav>
      {/* <div className="navbutton-boxleft">
        <button type="button">
          <FontAwesomeIcon icon={faArrowCircleLeft} />
        </button>
      </div> */}
    </>
  );
}

export default Navbar;
