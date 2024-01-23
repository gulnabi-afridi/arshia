import React from 'react';
import Wrapper from '../shared/ComponentWrapper/Wrapper';
import FeedbackCard from './Cards/FeedbackCard';

const Feedback = () => {
  return (
    <div className='w-full bg-[#f6f6ff] py-10 csm:py-16'>
      <Wrapper>
        <div className='w-full flex justify-center items-center'>
          <div className='w-full lg:max-w-full max-w-[600px] flex flex-col gap-4 csm:gap-6 lg:gap-10'>
            {/* text ---->  */}
            <div className='flex flex-col gap-0'>
              <p className='text-purple-1 text-[18px] sm:text-[22px] font-semibold'>
                Freelancers feedback
              </p>
              <h2 className='text-[26px] sm:text-[32px] text-black-1 leading-[38px] sm:leading-[40px] lg:leading-[50px] font-extrabold'>
                See what freelancers say about itsolve reviews!
              </h2>
            </div>
            {/* feedback card ----->  */}
            <div className='w-full gap-4 grid grid-cols-1 lg:grid-cols-2 '>
              <FeedbackCard />
              <FeedbackCard />
              <FeedbackCard />
              <FeedbackCard />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Feedback;
