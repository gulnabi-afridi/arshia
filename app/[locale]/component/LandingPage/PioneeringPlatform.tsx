import React from 'react';
import Wrapper from '../shared/ComponentWrapper/Wrapper';
import * as Icons from '../../../../svg/Icons';
import Image from 'next/image';

const PioneeringPlatform = () => {
  return (
    <div className='w-full bg-[#f6f6ff] py-10 csm:py-16'>
      <Wrapper>
        <div className='w-full flex flex-col gap-10 justify-center items-center'>
          {/* text ---->  */}
          <div className='flex flex-col justify-center items-start md:items-center gap-0'>
            <p className='text-purple-1 text-[18px] sm:text-[22px] font-semibold'>
              The world's pioneering platform
            </p>
            <h2 className='text-[26px] sm:text-[32px] text-black-1 leading-[38px] sm:leading-[40px] lg:leading-[50px] font-extrabold'>
              The only review platform for freelancers
            </h2>
          </div>
          {/* cards ------>  */}
          <div className='w-full flex justify-center items-center'>
            <div className='w-full max-w-[960px] grid gap-4 lg:gap-7 grid-cols-1 md:grid-cols-2 '>
              {data.map((item, pIndex) => {
                return (
                  <div
                    key={pIndex}
                    className='w-full flex justify-center items-center'
                  >
                    <div className='w-full max-w-[450px] flex flex-col gap-6 rounded-xl bg-white-1 p-4 lg:p-6'>
                      {/* image --->  */}
                      <div className='w-full h-[170px] sm:h-[194px] flex justify-center items-center rounded-xl bg-[#f6f6ff]'>
                        <div className='w-[180px] sm:w-[188px] h-[147px] sm:h-[147px] relative'>
                          <Image
                            src={item.img}
                            fill
                            alt=''
                            className={`object-fill ${
                              pIndex === 0 && 'grayscale'
                            }`}
                          />
                        </div>
                      </div>
                      {/* list --->   */}
                      <div className='flex flex-col items-start gap-4'>
                        {item.list.map((ls, index) => {
                          return (
                            <div
                              key={index}
                              className='flex justify-center items-center gap-2'
                            >
                              {pIndex === 0 ? (
                                <Icons.crossIcon className='w-[20px] h-[21px]' />
                              ) : (
                                <Icons.check className='w-[20px] h-[21px]' />
                              )}
                              <p className='text-[18px] text-black-2 font-normal'>
                                {ls}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

const data = [
  {
    img: '/assets/trustPiolt.svg',
    list: [
      'Free public API',
      'Free review listener and user lookup',
      'Import existing reviews',
      'User attributes',
      'Verification',
      'More free dynamic widgets',
      'Advanced user browsing',
      'Made for freelancers like you',
      'User leaderboard for reviews',
      'Custom solutions for agencies and teams',
    ],
  },
  {
    img: '/assets/logo.svg',
    list: [
      'Free public API',
      'Free review listener and user lookup',
      'Import existing reviews',
      'User attributes',
      'Verification',
      'More free dynamic widgets',
      'Advanced user browsing',
      'Made for freelancers like you',
      'User leaderboard for reviews',
      'Custom solutions for agencies and teams',
    ],
  },
];

export default PioneeringPlatform;