import React, { useState } from 'react';

import logo from '../assets/logo.svg';
import menuIcon from '../assets/icon-hamburger.svg';
import closeIcon from '../assets/icon-close.svg';

const links = ['Pricing', 'Product', 'About Us', 'Careers', 'Community'];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='w-[90%] m-auto'>
      <div className='flex flex-row pt-8 px-4 lg:px-8 items-center'>
        <img
          src={logo}
          className='w-[110px] h-[18px] lg:w-[147px] lg:h-[24px] hover:cursor-pointer hover:opacity-80'
        />
        <img
          src={!toggleMenu ? menuIcon : closeIcon}
          className='w-[20px] h-[18px] ml-auto lg:hidden'
          onClick={() => setToggleMenu(!toggleMenu)}
        />
        <ul className='hidden lg:flex flex-row gap-8 items-center m-auto mr-0'>
          {links?.map((link, index) => (
            <li
              key={index}
              className='text-[13px] font-medium leading-[19px] text-dark-blue hover:cursor-pointer hover:opacity-50'>
              {link}
            </li>
          ))}
        </ul>
        <button className='hidden lg:flex items-center justify-center w-[137px] h-[44px] ml-auto rounded-[22px] bg-bright-red text-white text-[13px] leading-[19px] font-bold hover:cursor-pointer hover:bg-bright-red-hover'>
          Get Started
        </button>
      </div>
      {toggleMenu && (
        <div className='lg:hidden w-[90%] h-[290px] m-auto mt-4 bg-gray-50 rounded-md'>
          <ul className='flex flex-col gap-6 items-center justify-center h-full'>
            {links?.map((link, index) => (
              <li key={index} className='text-[16px] font-bold leading-[23px] text-dark-blue'>
                {link}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
