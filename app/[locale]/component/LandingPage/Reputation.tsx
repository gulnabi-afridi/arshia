import React from 'react';
import Wrapper from '../shared/ComponentWrapper/Wrapper';
import Image from 'next/image';
import * as Icons from '../../../../svg/Icons';
import ReputationCard from './Cards/ReputationCard';

const Reputation = () => {
  const reputationData = [
    {
      icon: '/assets/rating.svg',
      title: 'Collect reviews',
      arrow: (
        <Icons.arrow className='w-[200px] sm:w-[277px] h-[25px] sm:h-[33px]' />
      ),
      content:
        'Gather reviews effortlessly with easy-to-use forms, links, and importing from other platforms – simpler than ever before!',
    },
    {
      icon: '/assets/rating.svg',
      title: 'Collect reviews',
      arrow: (
        <Icons.arrow2 className='w-[220px] sm:w-[290px] h-[45px] sm:h-[56px]' />
      ),
      content:
        'Gather reviews effortlessly with easy-to-use forms, links, and importing from other platforms – simpler than ever before!',
    },
    {
      icon: '/assets/rating.svg',
      title: 'Collect reviews',
      content:
        'Gather reviews effortlessly with easy-to-use forms, links, and importing from other platforms – simpler than ever before!',
    },
  ];

  return (
    <div className='w-full bg-white-1 py-10 csm:py-16'>
      <Wrapper>
        <div className='w-full flex flex-col justify-center items-center gap-8 sm:gap-12'>
          <h2 className='text-[26px] sm:text-[32px] text-black-1 leading-[38px] sm:leading-[40px] lg:leading-[50px] font-extrabold'>
            All your reputation in one place
          </h2>
          <div className='w-full gap-x-6 gap-y-10 grid grid-cols-1 csm:grid-cols-2 lg:grid-cols-3'>
            {reputationData.map((item, index) => {
              return (
                <ReputationCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  arrow={item.arrow}
                  content={item.content}
                />
              );
            })}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Reputation;
