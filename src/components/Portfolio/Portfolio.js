import React from 'react';
import './PortfolioStyles.css';
import weatherimg from '../../images/weather6.png';
import googleimg from '../../images/google6.png';
import foodimg from '../../images/food6.png';
import agencyimg from '../../images/agency6.png';
import { SiWebmoney } from 'react-icons/si';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <div className='blob'>
        <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
          <path
            fill='#943149'
            d='M32.9,-22.8C39.2,-8.2,38.3,6.7,31.6,18.1C24.9,29.5,12.4,37.4,-3.5,39.4C-19.4,41.4,-38.7,37.5,-45.4,26C-52.2,14.6,-46.2,-4.3,-36.5,-20.9C-26.9,-37.4,-13.4,-51.6,0,-51.6C13.4,-51.5,26.7,-37.3,32.9,-22.8Z'
            transform='translate(100 100)'
          />
        </svg>
      </div>
      <div className='portfolio__webIcon'>
        <SiWebmoney />
      </div>
      <h1>Portfolio</h1>
      <div className='portfolio__project'>
        <a
          href='https://ritu-digital.github.io/appandgeek/'
          className='portfolio__project__image'
        >
          <img src={agencyimg} alt='weather' />
        </a>
        <a
          href='https://ritu-digital.github.io/google-clone/'
          className='portfolio__project__image'
        >
          <img src={googleimg} alt='google' />
        </a>
        <a
          href='https://ritu-digital.github.io/food-blog/'
          className='portfolio__project__image'
        >
          <img src={foodimg} alt='food' />
        </a>
        <a
          href='https://ritu-digital.github.io/react-weather-app/'
          className='portfolio__project__image'
        >
          <img src={weatherimg} alt='weather' />
        </a>
      </div>
      <div className='portfolio__bottom'>
        <a href='https://github.com/ritu-digital?tab=repositories'>
          <p>See more Work...</p>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
