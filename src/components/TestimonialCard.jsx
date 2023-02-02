import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className='w-full h-[248px] bg-[#FAFAFA] flex flex-col gap-4 items-center justify-center relative lg:w-[540px] ease-in duration-300 hover:lg:translate-y-8 hover:lg:cursor-pointer'>
      <img
        src={testimonial.image}
        alt='avatar'
        className='w-[72px] h-[72px] absolute bottom-[13.5rem]'
      />
      <h5 className='font-bold text-dark-blue leading-[23px] tracking-[-0.285714px] mt-4 lg:text-[18px]'>
        {testimonial.name}
      </h5>
      <p className='text-[14px] text-dark-blue leading-[26px] opacity-50 text-center px-8 lg:text-[16px]'>
        {testimonial.description}
      </p>
    </div>
  );
};

export default TestimonialCard;
