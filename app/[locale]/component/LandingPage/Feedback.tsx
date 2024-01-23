import React from 'react';
import Wrapper from '../shared/ComponentWrapper/Wrapper';
import Image from 'next/image';
import * as Icons from '../../../../svg/Icons';
import FeedbackCard from './Cards/FeedbackCard';

const Feedback = () => {
  return (
    <div className='w-full bg-[#f6f6ff] py-16'>
      <Wrapper>
        <div className='w-full flex flex-col gap-10'>
          {/* text ---->  */}
          <div className='flex flex-col gap-0'>
            <p className='text-purple-1 text-[22px] font-semibold'>
              Freelancers feedback
            </p>
            <h2 className='text-[32px] text-black-1 font-extrabold'>
              See what freelancers say about itsolve reviews!
            </h2>
          </div>
          {/* feedback card ----->  */}
          <div className='w-full gap-4 grid grid-cols-2 '>
            <FeedbackCard />
            <FeedbackCard />

            <FeedbackCard />
            <FeedbackCard />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Feedback;
