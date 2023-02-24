import React from 'react';

import Nav from './Nav'
import Logo from '../assets/img/logo.png'
import { Link } from 'react-scroll'

const Header = () => {
  return <header>
    <div className='flex items-center justify-between'>
      <img src={Logo} alt='' />
      <Nav />
      <div>
        <a href='mailto:keziadtt@gmail.com' className='btn btn-md font-medium text-orange text-sm lg:text-base bg-orange-100 p-4 cursor-pointer hover:btn-orange hover:text-white'>Contact</a>
      </div>
    </div>

  </header>;
};

export default Header;
