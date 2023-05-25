import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import { useState } from 'react';

const navbarLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'menu', label: 'Menu' },
  { id: 'awards', label: 'Awards' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenuHandler = () => {
    setToggleMenu((prevToggleMenu) => !prevToggleMenu);
  };

  return (
    <nav className="app__navbar">
      {/* logo */}
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="logo" />
      </div>

      {/* Links   */}
      <ul className="app__navbar-links">
        {navbarLinks.map(({ id, label }) => (
          <li key={id} className="p__opensans">
            <a href={`#${id}`} title={label}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* login  */}
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log In / Resgister
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>

      {/* desktop version end */}

      {/* Moblie version */}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={toggleMenuHandler}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={toggleMenuHandler}
            />
            <ul className="app__navbar-smallscreen-links">
              {navbarLinks.map(({ id, label }) => (
                <li key={id} className="p__opensans">
                  <a href={`#${id}`} title={label}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* end */}
    </nav>
  );
};

export default Navbar;
