import React from 'react';
import * as Icons from '../../../../../svg/Icons';
import Image from 'next/image';

const FeedbackCard = () => {
  return (
    <div className='w-full grid gap-2 sm:gap-3 grid-cols-[70px,1fr] sm:grid-cols-[80px,1fr] justify-start bg-white-1 rounded-[10px] feedbackSha p-3 sm:p-4'>
      {/* left portion --->  */}
      <div className='w-full h-[80px] relative'>
        <Image src='/assets/feedack.svg' fill className='object-fill' alt='' />
      </div>
      {/* right por ---->  */}
      <div className='flex flex-col w-full gap-2 sm:gap-3'>
        <div className='w-full flex justify-between items-start'>
          <div className='flex flex-col gap-1'>
            <p className='text-[16px] sm:text-[18px] font-semibold text-purple-1'>
              Arshia
            </p>
            <div className='flex justify-center items-center gap-1'>
              {[0, 1, 2, 3, 4].map((item, index) => {
                return <Icons.star className='w-[12px] h-[12px]' />;
              })}
            </div>
          </div>
          <p className='text-[14px] sm:text-[16px] text-black-3 font-normal'>
            2 days ago
          </p>
        </div>
        {/* context -->  */}
        <p className='text-[14px] sm:text-[16px] font-medium text-black-3'>
          The product convinced me a lot, in addition to the attention given and
          the installation, thank you very much. I hope you continue to grow.
          Thank you very much.
        </p>
      </div>
    </div>
  );
};

export default FeedbackCard;
