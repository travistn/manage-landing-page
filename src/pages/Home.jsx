import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import TestimonialCard from '../components/TestimonialCard';
import charts from '../assets/illustration-intro.svg';
import data from '../data.json';
import footerLogo from '../assets/footer-logo.svg';

const Home = () => {
  const [testimonial, setTestimonial] = useState(data.testimonials[0]);

  const getTestimonial = (e) => {
    const findTestimonial = data.testimonials.find(
      (testimonial) => e.currentTarget.id === testimonial.name
    );

    setTestimonial(findTestimonial);
  };

  return (
    <div className='w-[90%] m-auto flex flex-col gap-16 lg:gap-[8rem] items-center lg:w-[80%]'>
      <Navbar />
      <section className='flex flex-col lg:flex-row gap-4 items-center'>
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
      </section>
      <section className='flex flex-col lg:flex-row gap-12 items-center lg:items-start'>
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
      </section>
      <section className='flex flex-col gap-12 items-center'>
        <h1 className='text-dark-blue text-[32px] leading-[45px] font-extrabold mb-8 lg:mb-12 lg:text-[40px] lg:leading-[44px]'>
          What they've said
        </h1>
        <div className='hidden lg:flex flex-row gap-8 w-screen px-8'>
          {data.testimonials.map((testimonial) => (
            <TestimonialCard testimonial={testimonial} key={testimonial.name} />
          ))}
        </div>
        <div className='lg:hidden'>
          <TestimonialCard testimonial={testimonial} />
        </div>
        <div className='flex flex-row gap-4 lg:hidden'>
          {data.testimonials.map((testi, index) => (
            <div
              key={index}
              id={testi.name}
              onClick={getTestimonial}
              className={`w-[12px] h-[12px] rounded-full border-[1px] border-bright-red mt-[-1rem] ${
                testi.name === testimonial.name ? 'bg-bright-red' : ''
              }`}
            />
          ))}
        </div>
        <button className='w-[137px] h-[44px] rounded-[22px] bg-bright-red text-[13px] font-bold leading-[19px] text-white hover:cursor-pointer hover:bg-bright-red-hover'>
          Get Started
        </button>
      </section>
      <section className='w-screen h-[405px] flex flex-col justify-center items-center gap-8 bg-bright-red bg-cta-mobile bg-no-repeat bg-left lg:bg-cta-desktop lg:h-[220px] lg:flex-row'>
        <h1 className='text-[40px] leading-[50px] tracking-[-1px] text-white font-bold text-center px-8'>
          Simplify how your team works today.
        </h1>
        <button className='w-[137px] h-[44px] rounded-[22px] bg-white text-bright-red text-[13px] font-bold leading-[19px] hover:cursor-pointer hover:text-bright-red/50'>
          Get Started
        </button>
      </section>
      <footer className='w-screen bg-[#1D1E25] mt-[-4rem] flex flex-col justify-center items-center gap-12 py-12 lg:mt-[-8rem] lg:flex-row lg:px-16 lg:gap-[8rem] lg:items-start'>
        <div className='flex flex-col lg:order-3 lg:gap-[4.5rem]'>
          <div className='flex flex-row gap-4'>
            <input
              placeholder='Updates in your inbox...'
              className='w-[239px] h-[44px] rounded-[22px] bg-white text-[13px] pl-6'
            />
            <button className='w-[80px] h-[44px] bg-bright-red rounded-[22px] text-[13px] leading-[13px] text-white lg:hover:bg-[#F98F75]'>
              Go
            </button>
          </div>
          <p className='text-[13px] leading-[19px] text-white opacity-50 font-light hidden lg:flex lg:justify-center'>
            Copyright 2023. All Rights Reserved
          </p>
        </div>
        <div className='flex flex-row gap-[6rem] lg:order-2 lg:gap-[8rem]'>
          <div className='flex flex-col gap-4 text-white text-[15px] leading-[22px] font-light'>
            <p className='lg:hover:cursor-pointer lg:hover:text-bright-red'>Home</p>
            <p className='lg:hover:cursor-pointer lg:hover:text-bright-red'>Pricing</p>
            <p className='lg:hover:cursor-pointer lg:hover:text-bright-red'>Products</p>
            <p className='lg:hover:cursor-pointer lg:hover:text-bright-red'>About Us</p>
          </div>
          <div className='flex flex-col gap-4 text-white text-[15px] leading-[22px] font-light'>
            <p className='lg:hover:cursor-pointer lg:hover:text-bright-red'>Careers</p>
            <p className='lg:hover:cursor-pointer lg:hover:text-bright-red'>Community</p>
            <p className='lg:hover:cursor-pointer lg:hover:text-bright-red'>Privacy Policy</p>
          </div>
        </div>
        <div className='flex flex-col gap-12 lg:order-1 lg:gap-[5.5rem]'>
          <div className='flex flex-row gap-8 lg:order-2 lg:gap-4'>
            {data.companies.map((company) => (
              <img
                src={company.logo}
                alt={company.name}
                key={company.name}
                className='w-[32px] h-[32px] lg:w-[20px] lg:h-[20px] hover:cursor-pointer'
              />
            ))}
          </div>
          <img src={footerLogo} className='h-[26px] lg:order-1 lg:h-[24px]' />
        </div>
        <p className='text-[13px] leading-[19px] text-white opacity-50 font-light lg:hidden'>
          Copyright 2023. All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Home;
