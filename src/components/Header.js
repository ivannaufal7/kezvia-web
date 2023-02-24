import React from 'react';

import Nav from './Nav'
import NavMobile from './NavMobile';
import Logo from '../assets/img/logo.png'
import { Link } from 'react-scroll'

const Header = () => {
  return <header>
    <div className='flex items-center justify-between'>
      <img src={Logo} alt='' />
      <div className='hidden lg:flex'>
        <Nav />
      </div>
      <div className='hidden lg:flex'>
        <a href='mailto:keziadtt@gmail.com' className='btn btn-md font-medium text-orange text-sm lg:text-base bg-orange-100 p-4 cursor-pointer hover:btn-orange hover:text-white'>Contact</a>
      </div>

      <NavMobile />
    </div>

  </header>;
};

export default Header;
