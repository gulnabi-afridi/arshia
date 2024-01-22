'use client';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';
import FillButton from '../Buttons/FillButton';
import IconButton from '../Buttons/IconButton';
import * as Icons from '../../../../../svg/Icons';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { RxCross1 } from 'react-icons/rx';
import { RxHamburgerMenu } from 'react-icons/rx';

const Navibar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <div className='w-full bg-white-1 headerSha'>
        <div className='w-full m-auto max-w-[1400px] h-[60px] md:h-[100px] px-4 md:px-8 flex justify-between items-center'>
          {/* logo -->  */}
          <div className='w-[110px] md:w-[190px] h-[50px] md:h-[70px] relative'>
            <Image src='/assets/logo.svg' alt='' fill className='object-fill' />
          </div>
          {/* right por ---->  */}
          <div className='hidden clg:flex justify-center items-center gap-4 xl:gap-8'>
            {/* search bar ------> */}
            <div className='w-fit pl-4 xl:pl-8 pr-4 xl:pr-14 text-[16px] text-black-3 font-semibold py-[16px] border-[1px] border-white-2 rounded-lg'>
              {t('common:how_search')}
            </div>
            {/* docs --->  */}
            <Link
              href='#'
              className='text-black-3 text-[16px] font-semibold relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-purple-1 hover:after:w-full after:duration-200'
            >
              {' '}
              {t('common:docs')}
            </Link>
            {/* Browse users --> */}
            <Link
              href='#'
              className='text-black-3 text-[16px] font-semibold relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-purple-1 hover:after:w-full after:duration-200'
            >
              {' '}
              {t('common:browse_users')}
            </Link>
            <div className='flex justify-center items-center gap-3'>
              <FillButton
                styles='bg-purple-1/20 text-purple-1'
                text={t('common:login')}
              ></FillButton>
              <IconButton
                styles='bg-purple-1 text-white-1'
                text={t('common:register')}
                icon={<Icons.location className='w-[16px] h-[16px]' />}
              ></IconButton>
            </div>
          </div>
          {/* hamburger for small scren ---->  */}
          <button className='clg:hidden block' onClick={toggleDrawer}>
            <RxHamburgerMenu className='text-[30px] md:text-[45px] text-purple-1' />
          </button>
        </div>
      </div>
      {/* drawer for small screen ---->  */}
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='right'
        className='drawer'
      >
        <div className='flex flex-col p-6 justify-center items-center '>
          {/* =========>top bar */}
          <div className='w-full flex justify-end items-center'>
            <RxCross1
              onClick={toggleDrawer}
              className='text-[35px] text-white-main '
            />
          </div>
          {/* logo -->  */}
          <div className='w-[150px] h-[100px] relative mt-10'>
            <Image src='/assets/logo.svg' alt='' fill className='object-fill' />
          </div>
          {/* links  */}
          <div className='flex w-full justify-center items-center flex-col gap-6 mt-6'>
            {/* search */}
            <div className='w-full hideScroll px-2 max-w-[350px] whitespace-nowrap overflow-auto text-[14px] text-black-3 font-medium py-[10px] border-[1px] border-white-2 rounded-lg'>
              {t('common:how_search')}
            </div>
            {/* docs --->  */}
            <Link
              href='#'
              className='text-black-3 text-[16px] font-semibold relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-purple-1 hover:after:w-full after:duration-200'
            >
              {' '}
              {t('common:docs')}
            </Link>
            {/* Browse users --> */}
            <Link
              href='#'
              className='text-black-3 text-[16px] font-semibold relative after:absolute after:w-0 after:bottom-0 after:left-0 after:h-[2px] after:bg-purple-1 hover:after:w-full after:duration-200'
            >
              {' '}
              {t('common:browse_users')}
            </Link>
            {/* buttons  */}
            <div className='flex justify-center items-center gap-3 mt-4'>
              <FillButton
                styles='bg-purple-1/20 text-purple-1'
                text={t('common:login')}
              ></FillButton>
              <IconButton
                styles='bg-purple-1 text-white-1'
                text={t('common:register')}
                icon={<Icons.location className='w-[16px] h-[16px]' />}
              ></IconButton>
            </div>
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default Navibar;
