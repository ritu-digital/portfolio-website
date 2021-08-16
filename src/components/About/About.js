import React from 'react';
import './AboutStyles.css';
import website from '../../images/about.svg';
import { Button } from '@material-ui/core';
import { FaReact } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div className='about'>
      <h1>About Me</h1>
      <div className='about__overlay'>
        <h3>
          Web <span style={{ display: 'block' }}>Enthusiast</span>{' '}
        </h3>
        <div
          className='about__overlayIcon'
          style={{
            color: 'white',
            fontSize: '3rem',
            right: '4.6rem',
            bottom: '1.5rem',
            position: 'relative',
            zIndex: '70',
          }}
        >
          <FaReact />
        </div>
      </div>
      <div className='about__content'>
        <div className='about__left'>
          <img src={website} alt='website' />
        </div>
        <div className='about__right'>
          <h2>I create products with Code and Elegance</h2>
          <p>
            My name is Ritu Sharma. I’m a self taught React developer with a
            Bachelor degree in Information Technology. I’ve always found coding
            intuitive and have pushed myself to learn the most effective ways to
            achieve a result. I’m a fast learner and willing to share my skills
            so that I can provide value to the company and the customers.
          </p>
          <NavLink to='/contact' style={{ textDecoration: 'none' }}>
            <Button
              variant='outlined'
              className='about__button'
              style={{
                width: '150px',
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

export default About;
