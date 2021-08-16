import React from 'react';
import { GiArrowScope } from 'react-icons/gi';
import './LogoStyles.css';

const Logo = () => {
  return (
    <div className='logo'>
      <div className='logo__img'>
        <GiArrowScope style={{ width: '50px', height: '50px' }} />
      </div>
      <h1>RS</h1>
    </div>
  );
};

export default Logo;
