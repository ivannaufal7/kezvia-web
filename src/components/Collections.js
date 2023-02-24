import React from 'react';

const Collections = () => {
  return <section id='collections' className='min-h-[600px] lg:min-h-[500px]'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:gap-x-16 mt-24'>
        <div
          className='flex flex-col gap-y-2 justify-center lg:mb-24'
          data-aos='fade-right'
          data-aos-delay='400'
        >
          <span className='text-heading font-light text-lg'>Collections</span>
          <h2 className='h2 text-heading font-semibold'>KEZ’s Top Picks 💗</h2>
          <p className='text-grey font-normal text-lg lg:text-2xl lg:max-w-[450px]'>Choose recommendation girls things from me</p>
        </div>
        <div className='flex flex-col gap-y-4'>
          <div
            className='bg-fashion1 w-full lg:w-[642px] h-[192px] bg-no-repeat bg-cover rounded-lg'
            data-aos='fade-up'
            data-aos-delay='500'
          >
            <div className='flex flex-col lg:flex-row lg:items-center lg:justify-center'>
              <p className='text-2xl lg:text-3xl text-white mt-8 ml-8 lg:mt-14 w-[250px] lg:w-[400px]'>Shopee: My Collection & Picks</p>
              <a href='https://mycollection.shop/kezvia' 
              target='_blank' 
              rel='noreferrer'
              className='bg-orange-100 text-orange mt-4 ml-8 lg:mt-14 lg:mr-8 lg:w-[146px] lg:h-[60px] w-[146px] h-[50px]
            hover:bg-orange hover:text-white transition rounded-md shadow-primary text-lg flex items-center justify-center'>View</a>
            </div>
          </div>
          <div
            className='bg-fashion2 w-full lg:w-[642px] h-[192px] bg-no-repeat bg-cover rounded-lg'
            data-aos='fade-up'
            data-aos-delay='600'
          >
            <div className='flex flex-col justify-center lg:flex-row lg:items-center lg:justify-center'>
              <p className='text-2xl lg:text-3xl text-white mt-8 ml-8 lg:mt-14 w-[250px] lg:w-[400px]'>Shop: Rom&nd Juicy Lasting Tint</p>
              <a href='https://shopee.sg/product/214105150/6213712656?utm_campaign=-&utm_content=----&utm_medium=affiliates&utm_source=an_14327320000&utm_term=8tv36jyshhks' 
              target='_blank'
              rel='noreferrer'
              className='bg-orange-100 text-orange mt-4 ml-8 lg:mt-14 lg:mr-8 lg:w-[146px] lg:h-[60px] w-[146px] h-[50px]
            hover:bg-orange hover:text-white transition rounded-md shadow-primary text-lg flex items-center justify-center'>View</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
};

export default Collections;
