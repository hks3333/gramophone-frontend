// src/components/topbar.tsx
import { FC } from 'react';
import "./topbar.css"


const Topbar: FC = () => {
  return (
    <div className='flex justify-between w-full fixed top-0 left-0 right-0 h-24 z-50'>
      <div className='logo-div flex w-[450px] min-w-[450px] border-b-2 border-r-2 border-black items-center px-4 rounded-br-[50px]'>
        <div>
          <img src="/vinyl.png" alt="" className='w-20 mr-4' />
        </div>
        <div className='logo'>Waves</div>
      </div>
      <div className='hidden lg:block ml-2 poster w-2/3 h-full border-b-2 border-l-2 rounded-bl-[50px] border-black'>
      </div>
    </div>
  );
};

export default Topbar;