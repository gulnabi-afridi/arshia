'use client';

import React from 'react';
import Wrapper from '../shared/ComponentWrapper/Wrapper';
import * as Icons from '../../../../svg/Icons';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="w-full h-[calc(100vh-100px)] bg-[url('/assets/heroBg.svg')] bg-cover bg-center ">
      <Wrapper style='h-full'>
        <div className='w-full h-full grid gap-12 grid-cols-[1.1fr,1fr] justify-center items-center'>
          {/* left portion ---->  */}
          <div className='flex flex-col items-start gap-6'>
            <h1 className='text-[60px] font-extrabold leading-[80px]'>
              All your reputation in one place
            </h1>
            <p className='text-[18px] font-medium text-black-3 leading-[28px]'>
              Wave goodbye to having all of your reputation split across 7
              different websites. Centralize all your reviews on one streamlined
              platform, allowing you to showcase them collectively. Tailored for
              freelancers like yourself.
            </p>
            {/* search input ----->  */}
            <div className='w-full py-[8px] rounded-lg bg-white-1 grid grid-cols-[1fr,auto] justify-center items-center px-4'>
              {/* input --->  */}
              <input
                type='text'
                className='w-full h-full text-black-3 focus:outline-0 text-[16px] font-semibold rounded-lg'
                placeholder='Find users by username, display name, or itsolve ID'
              />
              {/* button --->  */}
              <button className='flex px-[14px] hover:opacity-80 rounded-md py-2 justify-center items-center gap-2 bg-purple-1'>
                <Icons.search className='w-[24px] h-[24px]' />
                <p className='text-[18px] font-medium text-white-1'>Search</p>
              </button>
            </div>
            {/* user ---->  */}
            <div className='flex justify-start items-center gap-0'>
              <div className='flex justify-center items-center'>
                {user.map((item, index) => {
                  const value = index * 12;
                  return (
                    <div
                      style={{ transform: `translate(-${value}px)` }}
                      key={index}
                      className='w-[50px] h-[50px] relative'
                    >
                      <Image src={item} alt='' fill className='object-fill' />
                    </div>
                  );
                })}
              </div>
              {/*  */}
              <p className='text-[18px] font-normal text-black-3 -ml-3'>
                <span className='font-semibold'> +1200 </span>{' '}
                <span className='font-semibold'> other </span> use itsolve
              </p>
            </div>
            {/* read docs --->  */}
            <button className='flex hover:opacity-80 justify-center items-center gap-3'>
              <Icons.docs className='w-[24px] h-[24px]' />
              <p className='text-[18px] font-semibold text-black-3'>
                Read docs
              </p>
            </button>
          </div>
          {/* right por ---->  */}
          <div className='w-full relative'>
            <div className='w-full h-[540px] relative'>
              <Image
                src='/assets/hero.png'
                alt=''
                fill
                className='object-cover rounded-md'
              />
            </div>
            {/* total value traded widget --->  */}
            <div className='w-fit absolute top-0 px-[24px] py-[16px] rounded-lg widgetShadow flex bg-white-1 justify-center items-center gap-1'>
              <div className='flex flex-col'>
                <p className='text-[16px] font-medium text-black-3'>
                  Total value traded
                </p>
                <p className='text-[18px] text-black-1 font-bold'>$438.72</p>
              </div>
              <p className='text-[14px] font-semibold text-white-1 bg-green-1 py-[2px] px-[12px] rounded-[16px]'>
                +23%
              </p>
            </div>
            {/* popular product widget --->  */}
            <div className='w-fit absolute bottom-28 -left-3 px-[24px] py-[16px] rounded-lg widgetShadow flex bg-white-1 justify-center items-center gap-2'>
              <div className='flex flex-col'>
                <p className='text-[16px] font-medium text-black-3'>
                  Popular Product
                </p>
                <p className='text-[18px] text-black-1 font-bold'>Web Design</p>
              </div>
              <Icons.share className='w-[24px] h-[24px]' />
            </div>
            {/* start widget ---->  */}
            <div className='w-fit absolute -right-20 top-28 px-[24px] py-[16px] rounded-lg widgetShadow flex bg-white-1 justify-center items-center gap-2'>
              <Image
                src='/assets/heroStar.svg'
                width={52}
                height={50}
                alt=''
                className='object-fill rounded-full'
              />
              <div className='flex flex-col items-start gap-2'>
                <div className='flex justify-center items-center gap-1'>
                  {[0, 1, 2, 3, 4].map((item, index) => {
                    return (
                      <Icons.star key={index} className='w-[12px] h-[12px]' />
                    );
                  })}
                </div>
                <div className='w-[112px] h-[5px] rounded-[30px] bg-white-3'></div>
                <div className='w-[87px] h-[5px] rounded-[30px] bg-white-3'></div>
                <div className='w-[57px] h-[5px] rounded-[30px] bg-white-3'></div>
              </div>
            </div>
            {/* cross icon --->  */}
            <div className='absolute right-24 top-10'>
              <Icons.cross className='w-[24px] h-[24px]' />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

const user = [
  '/assets/user1.svg',
  '/assets/user2.svg',
  '/assets/user3.svg',
  '/assets/user4.svg',
];

export default Hero;
