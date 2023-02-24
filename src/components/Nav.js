import React from 'react';
import { Link } from 'react-scroll'

const Nav = () => {
  return <nav className='ml-[70px]'>
    <ul className='flex gap-x-[48px]'>
      <li>
        <Link to='home' spy={true} smooth={true} className='cursor-pointer'>Home</Link>
      </li>
      <li>
        <Link to='videos' spy={true} smooth={true} className='cursor-pointer'>Videos</Link>
      </li>
      <li>
        <Link to='collections' spy={true} smooth={true} className='cursor-pointer'>My Collections</Link>
      </li>
    </ul>
  </nav>;
};

export default Nav;
