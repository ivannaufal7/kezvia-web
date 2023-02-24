import React, { useState } from 'react';

//import menu btn icon
import { BiMenu } from 'react-icons/bi'

import { Link } from 'react-scroll'



const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuClick = () => {
    setIsOpen(false)
  }

  return <nav className='lg:hidden'>
    <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer text-3xl text-heading ml-[10px] lg:hidden'>
      <BiMenu />
    </div>
    <ul className={`${isOpen ? 'max-h-60 p-8' : 'max-h-0 p-0'} flex flex-col absolute w-full bg-white top-24 left-0 shadow-primary space-y-6
    overflow-hidden transition-all z-50`}>
      <li>
        <Link to='home' spy={true} smooth={true} onClick={handleMenuClick} className='cursor-pointer'>Home</Link>
      </li>
      <li>
        <Link to='videos' spy={true} smooth={true} onClick={handleMenuClick} className='cursor-pointer'>Videos</Link>
      </li>
      <li>
        <Link to='collections' spy={true} smooth={true} onClick={handleMenuClick} className='cursor-pointer'>My Collections</Link>
      </li>
    </ul>
  </nav>;
};

export default NavMobile;
