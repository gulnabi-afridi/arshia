import React, { ReactNode } from 'react';

interface Props {
  text: any;
  styles?: string;
  event?: any;
  icon: ReactNode;
}

const IconButton = ({
  text,
  styles = 'text-white-1 bg-purple-1 ',
  event = () => {},
  icon,
}: Props) => {
  return (
    <button
      onClick={event}
      className={`text-[18px] gap-2 flex justify-center items-center  py-[8px] sm:py-[10px] px-[30px] sm:px-[32px] font-semibold hover:opacity-80 active:translate-y-[2px] rounded-lg ${styles}`}
    >
      {icon}
      {text}
    </button>
  );
};

export default IconButton;
