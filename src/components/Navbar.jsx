import React from 'react';

import logo from '../assets/logo.svg';
import menuIcon from '../assets/icon-hamburger.svg';

const Navbar = () => {
  return (
    <div className='w-[11/12]'>
      <div className='flex flex-row pt-8 px-8'>
        <img src={logo} className='w-[110px] h-[18px]' />
        <img src={menuIcon} className='w-[25px] h-[18px] ml-auto lg:hidden' />
      </div>
    </div>
  );
};

export default Navbar;
