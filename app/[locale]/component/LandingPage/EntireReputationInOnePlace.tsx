import React from 'react';
import Wrapper from '../shared/ComponentWrapper/Wrapper';
import IconButton from '../shared/Buttons/IconButton';

const EntireReputationInOnePlace = () => {
  return (
    <div className='w-full bg-[#f6f6ff] py-10 csm:py-16'>
      <Wrapper>
        <div className='w-full flex flex-col gap-4 csm:gap-6 lg:gap-10'>
          {/* top sec ---->  */}
          <div className='w-full flex justify-between items-start'>
            <div className='flex flex-col gap-0'>
              <p className='text-purple-1 text-[18px] sm:text-[22px] font-semibold'>
                Grow with ease
              </p>
              <h2 className='text-[26px] sm:text-[32px] text-black-1 leading-[38px] sm:leading-[40px] lg:leading-[50px] font-extrabold'>
                Your entire reputation, on one dashboard
              </h2>
              <p className='text-[18px] max-w-[700px] font-medium text-black-3'>
                Explore insightful analytics like top-performing products,
                overall trade value, review growth trends, import reviews,
                review management, and additional features.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default EntireReputationInOnePlace;
