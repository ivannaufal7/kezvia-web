import React from 'react';
import Header from './Header'
import { FaTwitch, FaYoutube } from 'react-icons/fa'
import Kez1 from '../assets/img/hero/kez1.png'
import Kez2 from '../assets/img/hero/kez2.png'
import Kez3 from '../assets/img/hero/kez3.png'
import Kez4 from '../assets/img/hero/kez4.png'

const Hero = () => {
  return <section id='home' className='min-h-[800px] lg:min-h-[900px] pt-9 lg:bg-contour lg:bg-no-repeat lg:bg-right-top lg:bg-50%'>
    <div className='container mx-auto'>
      <Header />
      <div className='mt-[80px]'>
        <div className='flex flex-col gap-y-2'>
          <h1
            className='h1'
            data-aos='fade-down'
            data-aos-delay='500'
          >Hi 👋</h1>
          <span
            className='h1 text-orange-200'
            data-aos='fade-down'
            data-aos-delay='600'
          >I'm Kezvia</span>
          <p
            className='text-2xl text-heading lg:text-4xl'
            data-aos='fade-down'
            data-aos-delay='700'
          >A gaming streamer, singer, and voice over artist</p>
          <div
            className='flex flex-col gap-y-4 lg:flex-row lg:gap-x-8 mt-8'
            data-aos='fade-right'
            data-aos-delay='800'
          >
            <a href='https://www.twitch.tv/kezvia' target='_blank' rel='noreferrer' className='flex flex-row gap-x-[8px] items-center justify-center 
            text-lg min-w-[196px] bg-orange-100 text-orange p-4 rounded-lg shadow-primary
            hover:bg-orange hover:text-white transition'>
              <FaTwitch className='text-[20px]' />
              Twitch
            </a>
            <a href='https://www.youtube.com/@KEZVIA' target='_blank' rel='noreferrer' className='flex flex-row gap-x-[8px] items-center justify-center 
            text-lg min-w-[196px] border-2 border-orange-100 text-orange p-4 rounded-lg shadow-primary
            hover:bg-orange hover:text-white transition'>
              <FaYoutube className='text-[24px]' />
              Youtube
            </a>
          </div>
        </div>
        <div className='mt-28'>
          <div className='flex flex-row flex-wrap gap-x-8 gap-y-4'>
            <img src={Kez1} alt=''
              className='lg:max-w-[260px]'
              data-aos='fade-up'
              data-aos-delay='400'
            />
            <img src={Kez2} alt=''
              className='lg:max-w-[260px] lg:relative lg:top-24'
              data-aos='fade-up'
              data-aos-delay='500'
            />
            <img src={Kez3} alt=''
              className='lg:max-w-[260px] lg:relative lg:bottom-12'
              data-aos='fade-up'
              data-aos-delay='600'
            />
            <img src={Kez4} alt=''
              className='lg:max-w-[260px] lg:relative lg:top-32'
              data-aos='fade-up'
              data-aos-delay='700'
            />
          </div>
        </div>
      </div>
    </div>

  </section>;
};

export default Hero;
