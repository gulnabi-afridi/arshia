import React from 'react';
import Image from 'next/image';

const WhyItSolveCard = () => {
  return (
    <div className='w-full flex justify-center items-center'>
      <div className='w-full max-w-[285px] bg-white-1 px-3 py-3 rounded-lg flex flex-col items-start gap-3'>
        <div className='w-[48px] h-[48px] relative'>
          <Image src='/assets/import.svg' fill className='object-fill' alt='' />
        </div>

        <h4 className='text-[20px] font-semibold text-black-2'>
          Import reviews
        </h4>
        <p className='text-[16px] font-medium text-black-3'>
          Effortlessly bring in reviews from other platforms directly into your
          itsolve review collection with Itsolve&apos;s easy import feature.
        </p>
        <button className='text-[16px] text-purple-1 font-semibold underline hover:opacity-80'>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default WhyItSolveCard;
