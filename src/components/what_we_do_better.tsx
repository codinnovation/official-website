import React from 'react';
import Head from 'next/head'

function What_we_do_better() {
    return (
        <>
           <Head>
        <title>Welcome To Cod - Innovations | About Us</title>
        <meta name="description" content="Welcome to COD Innovations - About us" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo-w-1 (1).png" />
        <meta name="google-adsense-account" content="ca-pub-6941452448672457"/>
      </Head>
            <div className='w-full h-full mt-16 2xl:mt-32'>
                <div className='w-11/12 mx-auto 2xl:w-8/12'>

                    {/* Section Heading */}
                    <div className='flex flex-col justify-center items-start'>
                        <h1 className='text-[#000] font-metropolis-bold uppercase text-base 2xl:text-xl'>What We Offer</h1>
                        <div className='bg-[#ef6603] w-16 h-1 rounded-full 2xl:w-20'></div>
                    </div>

                    {/* Services Grid */}
                    <div className='grid grid-cols-1 gap-10 mt-10 2xl:grid-cols-3'>
                        {/* Service 1: Education */}
                        <div className='flex flex-col items-start p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300'>
                            <div className='bg-[#ef6603] p-3 rounded-full'>
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                </svg>
                            </div>
                            <h2 className='text-[#000] font-metropolis-bold text-lg mt-4'>Education</h2>
                            <p className='text-[#000] font-nexa-light mt-2'>
                                Transforming education with innovative solutions that enhance learning experiences, empower educators, and engage students through cutting-edge technology.
                            </p>
                            <button className="mt-4 text-[#ef6603] font-metropolis-bold hover:underline">
                                Read More →
                            </button>
                        </div>

                        {/* Service 2: Healthcare */}
                        <div className='flex flex-col items-start p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300'>
                            <div className='bg-[#ef6603] p-3 rounded-full'>
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                </svg>
                            </div>
                            <h2 className='text-[#000] font-metropolis-bold text-lg mt-4'>Healthcare</h2>
                            <p className='text-[#000] font-nexa-light mt-2'>
                                Revolutionizing healthcare with technology-driven solutions that improve patient care, streamline operations, and enable better decision-making for healthcare providers.
                            </p>
                            <button className="mt-4 text-[#ef6603] font-metropolis-bold hover:underline">
                                Read More →
                            </button>
                        </div>

                        {/* Service 3: Business Solutions */}
                        <div className='flex flex-col items-start p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300'>
                            <div className='bg-[#ef6603] p-3 rounded-full'>
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <h2 className='text-[#000] font-metropolis-bold text-lg mt-4'>Business Solutions</h2>
                            <p className='text-[#000] font-nexa-light mt-2'>
                                Empowering businesses with tailored services that drive growth, optimize operations, and unlock new opportunities through innovative technology.
                            </p>
                            <button className="mt-4 text-[#ef6603] font-metropolis-bold hover:underline">
                                Read More →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default What_we_do_better;