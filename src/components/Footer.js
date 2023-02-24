import React from 'react';

import { FaTwitch, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa'
import { HiOutlineMail} from 'react-icons/hi'

const Footer = () => {
  return <footer className='pt-[20px] pb-[20px]'>
    <div className='container mx-auto'>
      <div className='flex flex-row justify-between items-center'>
        <h3 className='text-[14px] lg:text-[24px]'>Build with love by <a href='https://instagram.com/ivannaufal' target='_blank' rel='noreferrer' className='font-semibold text-orange'>flyingdutchman</a></h3>
        <div className='flex flex-row gap-x-8 text-md lg:text-[24px] text-orange'>
          <a href='https://www.twitch.tv/kezvia' target='_blank' rel='noreferrer'><FaTwitch/></a>
          <a href='https://www.youtube.com/@KEZVIA' target='_blank' rel='noreferrer'><FaYoutube/></a>
          <a href='https://www.instagram.com/kezvia' target='_blank' rel='noreferrer'><FaInstagram/></a>
          <a href='https://www.tiktok.com/@kezvia' target='_blank' rel='noreferrer'><FaTiktok/></a>
          <a href='mailto:keziadtt@gmail.com'><HiOutlineMail/></a>
        </div>
      </div>
    </div>
  </footer>;
};

export default Footer;
