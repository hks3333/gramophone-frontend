// src/components/topbar.tsx
import { FC } from 'react';
import "./topbar.css"


const Topbar: FC = () => {
  return (
    <div className='huh flex h-24 border-b-2 border-black flex-shrink-0 fixed top-0 left-0 right-0 z-60 items-center px-4 w-fit rounded-br-[50px]'>
      <div>
        <img src="/vinyl.png" alt="" className='w-20 mr-4'/>
      </div>
      <div className='logo'>Waves</div>
      
    </div>
  );
};

export default Topbar;