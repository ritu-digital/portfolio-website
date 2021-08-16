import { Button } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './NavbarStyles.css';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [header, setHeader] = useState(false);

  const changeHeader = () => {
    window.scrollY >= 60 ? setHeader(true) : setHeader(false);
  };
  window.addEventListener('scroll', changeHeader);

  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className='navbar'
      style={{ backgroundColor: header ? 'black' : 'transparent' }}
    >
      <div className='navbar__left'>
        <Logo />
      </div>
      <div className='navbar__menuSection'>
        <div className='navbar__toggleIcon' onClick={toggleHandler}>
          {isOpen ? <GiHamburgerMenu /> : <GiHamburgerMenu />}
        </div>
        <div className={isOpen ? 'navbar__right active' : 'navbar__right'}>
          <nav className='navbar__middle' onClick={toggleHandler}>
            <ul className='navbar__links'>
              <li>
                <NavLink
                  style={{ color: 'var(--secondary-clr' }}
                  to='/'
                  activeStyle={{ color: 'var(--secondary-clr' }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/about'>About</NavLink>
              </li>
              <li>
                <NavLink to='/portfolio'>Portfolio</NavLink>
              </li>
              <li>
                <NavLink to='/contact'>Contact</NavLink>
              </li>
            </ul>
          </nav>
          <NavLink
            to='/contact'
            className='navbar__end'
            style={{ textDecoration: 'none' }}
          >
            <Button
              variant='outlined'
              className='navbar__button'
              style={{
                border: '1px solid var(--secondary-clr)',
                color: 'white',
                textTransform: 'capitalize',
                fontWeight: '500',
                fontSize: '18px',
                padding: '0.5rem 2rem',
              }}
            >
              Let's Talk
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
