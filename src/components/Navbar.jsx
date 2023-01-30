import React from 'react';

import logo from '../assets/logo.svg';
import menuIcon from '../assets/icon-hamburger.svg';

const links = ['Pricing', 'Product', 'About Us', 'Careers', 'Community'];

const Navbar = () => {
  return (
    <div className='w-[90%] m-auto'>
      <div className='flex flex-row pt-8 px-4 lg:px-8 items-center'>
        <img
          src={logo}
          className='w-[110px] h-[18px] lg:w-[147px] lg:h-[24px] hover:cursor-pointer hover:opacity-80'
        />
        <img src={menuIcon} className='w-[25px] h-[18px] ml-auto lg:hidden' />
        <ul className='hidden lg:flex flex-row gap-8 items-center m-auto mr-0'>
          {links?.map((link) => (
            <li className='text-[13px] font-medium leading-[19px] text-dark-blue hover:cursor-pointer hover:opacity-50'>
              {link}
            </li>
          ))}
        </ul>
        <button className='hidden lg:flex items-center justify-center w-[137px] h-[44px] ml-auto rounded-[22px] bg-bright-red text-white text-[13px] leading-[19px] font-bold hover:cursor-pointer hover:bg-bright-red-hover'>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
