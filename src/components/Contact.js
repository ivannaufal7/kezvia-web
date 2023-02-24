import React from 'react';

const Contact = () => {
  return <section id='contact' className='min-h-[700px] lg:min-h-[700px] bg-orange-100'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-2'
      data-aos='fade-up'
      data-aos-delay='500'
      >
        <h2 className='h2 text-3xl lg:text-4xl font-bold text-heading mt-[56px]'>Love to hear from you,<br />
          Get in touch 🚀</h2>
        <form className='mt-8'>
          <div className='flex flex-col gap-y-2 lg:flex-row lg:gap-x-8'>
            <div className='flex flex-col gap-y-2 w-full'>
              <label className='text-heading font-medium text-lg'>Your name</label>
              <input
                className='form-control'
                placeholder='Write your name'
                name='user_name'
                type='text'
                required
                disabled
              />
            </div>
            <div className='flex flex-col gap-y-2 w-full'>
              <label className='text-heading font-medium text-lg'>Your email</label>
              <input
                className='form-control'
                placeholder='Write your email'
                name='user_email'
                type='email'
                required
                disabled
              />
            </div>
          </div>
          <div className='flex flex-col gap-y-2 lg:mt-4'>
            <label className='text-heading font-medium text-lg'>Your message</label>
            <textarea
              className='form-control py-5 h-[165px] resize-none'
              placeholder='Message'
              name='user_message'
              required
              disabled
            ></textarea>
          </div>
          <button className='btn btn-lg btn-orange w-full mt-8 text-white' type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  </section>;
};

export default Contact;
