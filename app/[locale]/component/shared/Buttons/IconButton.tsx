import React, { ReactNode } from 'react';

interface Props {
  text: any;
  styles?: string;
  event?: any;
  icon: ReactNode;
  isRight?: boolean;
}

const IconButton = ({
  text,
  styles = 'text-white-1 bg-purple-1 ',
  event = () => {},
  icon,
  isRight = false,
}: Props) => {
  return (
    <button
      onClick={event}
      className={`text-[16px] 1xl:text-[18px]  gap-[6px] flex justify-center items-center py-[8px] sm:py-[10px] px-[30px] sm:px-[28px] font-semibold hover:opacity-80 active:translate-y-[2px] rounded-lg ${styles}`}
    >
      {!isRight && icon}
      {text}
      {isRight && icon}
    </button>
  );
};

export default IconButton;
