import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as Icons from '../../../../../svg/Icons';

const Footer = () => {
  return (
    <div className='w-full'>
      <div className='w-full m-auto max-w-[1400px] gap-4 sm:gap-6 px-4 md:px-8 flex flex-col justify-center items-center'>
        {/* logo --->  */}
        <div className='w-[110px] md:w-[170px] h-[50px] md:h-[70px] relative'>
          <Image src='/assets/logo.svg' alt='' fill className='object-fill' />
        </div>
        {/* links --->  */}
        <div className='flex flex-wrap justify-center items-center gap-4 gap-y-1'>
          {footerData.links.map((item, index) => {
            return (
              <Link
                href={item.path}
                key={index}
                className='text-[16px] sm:text-[18px] font-normal text-black-2 relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-purple-1 hover:after:w-full after:duration-200'
              >
                {item.text}
              </Link>
            );
          })}
        </div>
        {/* social --> */}
        <div className='flex justify-center items-center gap-3'>
          {footerData.social.map((item, index) => {
            return (
              <Link
                href={item.path}
                key={index}
                className='w-[40px] sm:w-[48px] h-[40px] sm:h-[48px] flex hover:opacity-80 active:translate-y-[2px] justify-center items-center rounded-full bg-purple-1'
              >
                {item.icon}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;

const footerData = {
  links: [
    {
      path: '#',
      text: 'Home',
    },
    {
      path: '#',
      text: 'About itsolve',
    },
    {
      path: '#',
      text: 'News and events',
    },
    {
      path: '#',
      text: 'Blog',
    },
    {
      path: '#',
      text: 'Help',
    },
    {
      path: '#',
      text: 'Rule',
    },
  ],
  social: [
    {
      path: '#',
      icon: (
        <Icons.facebook className='w-[22px] sm:w-[25px] h-[22px] sm:h-[25px]' />
      ),
    },
    {
      path: '#',
      icon: (
        <Icons.instagram className='w-[20px] sm:w-[24px] h-[20px] sm:h-[25px]' />
      ),
    },
    {
      path: '#',
      icon: (
        <Icons.linkedin className='w-[20px] sm:w-[24px] h-[20px] sm:h-[24px]' />
      ),
    },
  ],
};
