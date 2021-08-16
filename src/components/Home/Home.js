import React from 'react';
import './HomeStyles.css';
import { RiGithubFill } from 'react-icons/ri';
import { RiLinkedinFill } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import girl from '../../images/workingGirl.svg';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
const Home = () => {
  return (
    <>
      <div className='home'>
        <div className='home__Left'>
          <div className='home__content'>
            <h1>
              I'm <span style={{ color: 'var(--secondary-clr)' }}>Ritu</span>{' '}
              Sharma
            </h1>
            <p>React Developer | Front-End</p>
            <div className='home__contentSocial'>
              <IconContext.Provider value={{ style: { fontSize: '3rem' } }}>
                <a
                  href='https://github.com/ritu-digital'
                  className='home__contentSocialIcons'
                  style={{
                    border: '1px solid #E84B89',
                    textDecoration: 'none',
                    color: 'white',
                  }}
                >
                  <RiGithubFill />
                </a>
                <a
                  href='https://www.linkedin.com/in/ritu-sharma-64818a21a/'
                  className='home__contentSocialIcons'
                  style={{
                    border: '1px solid #4176FA',
                    textDecoration: 'none',
                    color: 'white',
                  }}
                >
                  <RiLinkedinFill />
                </a>
              </IconContext.Provider>
            </div>
          </div>
        </div>

        <div className='home__Right'>
          <div className='home__RightBlur'></div>
          <img
            src={girl}
            alt='working girl'
            style={{ maxHeight: '700px', maxWidth: '800px' }}
          />
        </div>
      </div>
      <About />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;
