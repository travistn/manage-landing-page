import React from 'react';

import Navbar from '../components/Navbar';
import charts from '../assets/illustration-intro.svg';

const Home = () => {
  return (
    <div className='w-[90%] m-auto flex flex-col gap-8 items-center lg:w-[80%]'>
      <Navbar />
      <div className='flex flex-col lg:flex-row gap-4 items-center mt-8 w-full'>
        <div className='lg:order-1 lg:w-[50%]'>
          <img
            src={charts}
            alt='charts'
            className='w-[318px] h-[286px] lg:w-[540px] lg:h-[485px] lg:ml-auto'
          />
        </div>
        <div className='flex flex-col gap-6 items-center lg:w-[50%] lg:items-start lg:pl-8'>
          <h2 className='text-[40px] text-dark-blue font-bold leading-[50px] text-center tracking-[-1px] lg:text-[56px] lg:leading-[64px] lg:text-start'>
            Bring everyone together to build better products.
          </h2>
          <p className='text-[16px] leading-[28px] text-center text-dark-blue opacity-50 font-light lg:font-normal lg:leading-[26px] lg:text-start lg:w-[75%]'>
            Manage makes it simple for software teams to plan day-to-day tasks while keeping the
            larger team goals in view.
          </p>
          <button className='w-[137px] h-[44px] bg-bright-red text-white rounded-[22px] shadow-[#FF9F8E] hover:cursor-pointer hover:bg-bright-red-hover'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
