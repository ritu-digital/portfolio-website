import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { Button } from '@material-ui/core';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 220) {
      setVisible(true);
    } else if (scrolled <= 220) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <Button
      style={{
        position: 'fixed',
        width: '70%',
        left: '60%',
        bottom: '40px',
        height: '20px',
        fontSize: '2rem',
        zIndex: '1000',
        cursor: 'pointer',
        color: '#FE3E57',
        opacity: '0.7',
      }}
    >
      <FaArrowCircleUp
        onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }}
      />
    </Button>
  );
};

export default ScrollToTopButton;
