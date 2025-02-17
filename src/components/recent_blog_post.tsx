import React from 'react';
import Head from 'next/head';

function Recent_blog_post() {
  return (
    <>
   <Head>
        <title>Welcome To Cod - Innovations | About Us</title>
        <meta name="description" content="Welcome to COD Innovations - About us" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo-w-1 (1).png" />
        <meta name="google-adsense-account" content="ca-pub-6941452448672457"/>
      </Head>
      <div className='mt-16 2xl:mt-32 bg-[#f8f9fa] '>

        <div className='w-11/12 mx-auto 2xl:w-8/12'>
          {/* Section Heading */}
          <div className='flex flex-col justify-center items-start'>
            <h1 className='text-[#000] font-metropolis-bold uppercase text-base 2xl:text-xl'>Recent Blog Posts</h1>
            <div className='bg-[#ef6603] w-16 h-1 rounded-full 2xl:w-20'></div>
            </div>

          {/* Blog Posts Grid */}
          <div className='grid grid-cols-1 gap-10 mt-10 2xl:grid-cols-3'>

            {/* Blog Post 1 */}
            <div className='flex flex-col items-start bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300'>
              <img 
                src="https://www.21kschool.com/gh/wp-content/uploads/sites/33/2023/09/Pros-and-Cons-of-Using-Education-Technology.png" 
                alt="Blog Post 1" 
                className='w-full h-48 object-cover rounded-t-lg'
              />
              <div className='p-6'>
                <h2 className='text-[#000] font-metropolis-bold text-lg'>
                  Transforming Education with Technology
                </h2>
                <p className='text-[#000] font-nexa-light mt-2'>
                  Discover how innovative technology is reshaping the future of education, making learning more accessible and engaging for students worldwide.
                </p>
                <button className="mt-4 text-[#ef6603] font-metropolis-bold hover:underline">
                  Read More →
                </button>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className='flex flex-col items-start bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300'>
              <img 
                src="https://assets.weforum.org/article/image/tWs5W6mwOA_MeVnTEe4EdKpIq5GOyqlscvLUg0Il-8A.jpg" 
                alt="Blog Post 2" 
                className='w-full h-48 object-cover rounded-t-lg'
              />
              <div className='p-6'>
                <h2 className='text-[#000] font-metropolis-bold text-lg'>
                  Revolutionizing Healthcare with AI
                </h2>
                <p className='text-[#000] font-nexa-light mt-2'>
                  Learn how artificial intelligence is transforming healthcare, improving patient outcomes, and streamlining operations for providers.
                </p>
                <button className="mt-4 text-[#ef6603] font-metropolis-bold hover:underline">
                  Read More →
                </button>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className='flex flex-col items-start bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300'>
              <img 
                src="https://media.udig.com/2024/05/22134916/iStock-1408588590-min.jpg" 
                alt="Blog Post 3" 
                className='w-full h-48 object-cover rounded-t-lg'
              />
              <div className='p-6'>
                <h2 className='text-[#000] font-metropolis-bold text-lg'>
                  Empowering Businesses with Tailored Solutions
                </h2>
                <p className='text-[#000] font-nexa-light mt-2'>
                  Explore how customized business solutions are driving growth, optimizing operations, and unlocking new opportunities for organizations.
                </p>
                <button className="mt-4 text-[#ef6603] font-metropolis-bold hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recent_blog_post;