import React from 'react';

function Contact_us() {
  return (
    <>
      <div className='mt-32 bg-gradient-to-r from-[#31333f] to-[#1a1c24] py-16'> {/* Gradient background */}
        <div className='w-8/12 mx-auto'>

          {/* Section Heading */}
          <div className='flex flex-col justify-center items-start'>
            <h1 className='text-white font-metropolis-bold uppercase text-xl'>Contact Us</h1>
            <div className='bg-[#ef6603] w-20 h-1 rounded-full'></div>
          </div>

          {/* Contact Content */}
          <div className='grid grid-cols-2 gap-10 mt-10'>

            {/* Contact Form */}
            <div className='flex flex-col'>
              <form className='space-y-6'>
                <div className='flex flex-col space-y-2'>
                  <label htmlFor="name" className='text-white font-nexa-light'>Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className='p-3 rounded-lg bg-[#2a2c36] text-white placeholder-[#b0b0b0] focus:outline-none focus:ring-2 focus:ring-[#ef6603]'
                    placeholder="Enter your name"
                  />
                </div>
                <div className='flex flex-col space-y-2'>
                  <label htmlFor="email" className='text-white font-nexa-light'>Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className='p-3 rounded-lg bg-[#2a2c36] text-white placeholder-[#b0b0b0] focus:outline-none focus:ring-2 focus:ring-[#ef6603]'
                    placeholder="Enter your email"
                  />
                </div>
                <div className='flex flex-col space-y-2'>
                  <label htmlFor="message" className='text-white font-nexa-light'>Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className='p-3 rounded-lg bg-[#2a2c36] text-white placeholder-[#b0b0b0] focus:outline-none focus:ring-2 focus:ring-[#ef6603]'
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-[#ef6603] px-6 py-3 rounded-lg text-white font-metropolis-bold hover:bg-[#cc5500] transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information and Map */}
            <div className='flex flex-col space-y-10'>
              {/* Contact Information */}
              <div className='space-y-6'>
                <h2 className='text-white font-metropolis-bold text-lg'>Get in Touch</h2>
                <div className='space-y-4'>
                  <div className='flex items-center space-x-4'>
                    <div className='bg-[#ef6603] p-3 rounded-full'>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <p className='text-white font-nexa-light'>123 Innovation Drive, Tech City, TC 12345</p>
                  </div>
                  <div className='flex items-center space-x-4'>
                    <div className='bg-[#ef6603] p-3 rounded-full'>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <p className='text-white font-nexa-light'>(123) 456-7890</p>
                  </div>
                  <div className='flex items-center space-x-4'>
                    <div className='bg-[#ef6603] p-3 rounded-full'>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <p className='text-white font-nexa-light'>info@codinnovations.com</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className='w-full h-64 bg-[#2a2c36] rounded-lg overflow-hidden'>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.95373531531664!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d2a5a9f4d0f5!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1625070000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact_us;