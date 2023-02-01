import React from 'react';

import Navbar from '../components/Navbar';
import charts from '../assets/illustration-intro.svg';
import data from '../data.json';

const Home = () => {
  return (
    <div className='w-[90%] m-auto flex flex-col gap-16 lg:gap-[6rem] items-center lg:w-[80%]'>
      <Navbar />
      <div className='flex flex-col lg:flex-row gap-4 items-center'>
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
      <div className='flex flex-col lg:flex-row gap-12 items-center lg:items-start'>
        <div className='flex flex-col gap-4 px-2 lg:w-[50%] lg:pl-6'>
          <h3 className='text-[30px] text-dark-blue font-extrabold leading-[45px] text-center lg:text-[40px] lg:leading-[44px] lg:text-start'>
            What's different about Manage?
          </h3>
          <p className='text-[14px] text-dark-blue leading-[28px] opacity-50 text-center lg:leading-[26px] lg:text-start lg:w-[70%] lg:mt-2'>
            Manage provides all the functionality your team needs, without the complexity. Our
            software is tailor-made for modern digital product teams.
          </p>
        </div>
        <div className='flex flex-col gap-4 lg:w-[50%]'>
          <div className='flex flex-col gap-8'>
            {data.features.map((feature, index) => (
              <div key={index}>
                <div className='flex flex-row gap-2 items-center rounded-[39px_0px_0px_39px] bg-[#FFF0EC] lg:bg-transparent mr-[-1.2rem]'>
                  <div className='bg-bright-red rounded-[39px] w-[67px] h-[39px] flex flex-col items-center justify-center text-white font-bold leading-[23px] tracking-[-0.285714px]'>
                    {`0${index + 1}`}
                  </div>
                  <h5 className='font-bold text-dark-blue leading-[23px] text-[16px]'>
                    {feature.name}
                  </h5>
                </div>
                <p className='text-[14px] text-dark-blue leading-[28px] opacity-50 mt-4 lg:leading-[26px]'>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
