import React from 'react';

import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <div className='flex flex-row px-4 pt-8'>
      <img src={logo} className='w-[110px] h-[18px]' />
    </div>
  );
};

export default Navbar;
