'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as Icons from '../../../../../svg/Icons';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  //   footer data --->
  const footerData = {
    links: [
      {
        path: '#',
        text: t('common:f_home'),
      },
      {
        path: '#',
        text: t('common:f_about'),
      },
      {
        path: '#',
        text: t('common:f_documentation'),
      },
      {
        path: '#',
        text: t('common:f_news_event'),
      },
      {
        path: '#',
        text: t('common:f_blog'),
      },
      {
        path: '#',
        text: t('common:f_help'),
      },
      {
        path: '#',
        text: t('common:f_about'),
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

  return (
    <div className='w-full py-10'>
      <div className='w-full m-auto max-w-[1400px] gap-4 sm:gap-6 px-4 md:px-8 flex flex-col justify-center items-center'>
        {/* logo --->  */}
        <div className='w-[110px] md:w-[170px] h-[50px] md:h-[70px] relative'>
          <Image src='/assets/logo.svg' alt='' fill className='object-fill' />
        </div>
        {/* links --->  */}
        <div className='flex flex-wrap justify-center items-center gap-x-6 gap-y-1'>
          {footerData.links.map((item, index) => {
            return (
              <Link
                href={item.path}
                key={index}
                className='text-[16px] capitalize sm:text-[18px] font-normal text-black-2 relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-purple-1 hover:after:w-full after:duration-200'
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
