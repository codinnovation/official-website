import React from 'react';
import Head from 'next/head';

function About_us() {
    return (
        <>
              <Head>
        <title>Welcome To Cod - Innovations | About Us</title>
        <meta name="description" content="Welcome to COD Innovations - About us" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo-w-1 (1).png" />
        <meta name="google-adsense-account" content="ca-pub-6941452448672457"/>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6941452448672457"
     crossOrigin="anonymous"></script>
      </Head>
            <div className='w-full h-full mt-16 2xl:mt-32'>
                <div className='w-11/12 mx-auto 2xl:w-8/12'>

                    {/* Section: Who We Are */}
                    <div className='flex flex-col justify-center items-start'>
                        <h1 className='text-[#000] font-metropolis-bold uppercase text-base 2xl:text-xl'>Who We Are</h1>
                        <div className='bg-[#ef6603] w-16 h-1 rounded-full 2xl:w-20'></div>
                    </div>

                    <div className='grid grid-cols-1 mt-10 gap-10 2xl:grid-cols-2'>
                        <div className='flex flex-col'>
                            <p className='text-[#000] font-nexa-light'>
                                At Cod Innovations, we are a team of passionate innovators dedicated to transforming industries through cutting-edge technology. Our mission is to bridge the gap between people and possibilities by delivering solutions that empower businesses, enhance education, and revolutionize healthcare.
                            </p>
                            <p className='text-[#000] font-nexa-light mt-5'>
                                Founded in 2015, Cod Innovations has grown from a small startup to a global leader in technology solutions. Our team consists of experts in software development, artificial intelligence, data science, and user experience design, all working together to create impactful solutions.
                            </p>
                        </div>

                        <div className='space-y-10'>
                            <p className='text-[#000] font-nexa-light'>
                                Our mission is to create innovative solutions that solve real-world problems. We strive to make technology accessible, intuitive, and impactful for everyone. Whether it&apos;s through education, healthcare, or business, we aim to empower individuals and organizations to achieve their full potential.
                            </p>

                            <div className='flex justify-start items-center'>
                                <button className="border-none bg-[#ef6603] px-9 py-5 rounded-full text-white font-metropolis-bold hover:bg-[#cc5500] transition duration-300">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Section: Our Values */}
                    <div className='mt-20'>
                        <div className='flex flex-col justify-center items-start'>
                            <h1 className='text-[#000] font-metropolis-bold uppercase text-base 2xl:text-xl'>Our Values</h1>
                            <div className='bg-[#ef6603] w-20 h-1 rounded-full'></div>
                        </div>

                        <div className='grid grid-cols-1 gap-10 mt-5 2xl:grid-cols-3'>
                            <div className='flex flex-col'>
                                <h2 className='text-[#000] font-metropolis-bold text-lg'>Courage</h2>
                                <p className='text-[#000] font-nexa-light mt-2'>
                                    We embrace challenges and take bold steps to innovate and solve complex problems. Courage drives us to explore uncharted territories and push the boundaries of what&apos;s possible.
                                </p>
                            </div>

                            <div className='flex flex-col'>
                                <h2 className='text-[#000] font-metropolis-bold text-lg'>Obedience</h2>
                                <p className='text-[#000] font-nexa-light mt-2'>
                                    We are committed to following ethical practices and adhering to the highest standards of professionalism. Obedience ensures that we remain accountable and trustworthy in all our endeavors.
                                </p>
                            </div>

                            <div className='flex flex-col'>
                                <h2 className='text-[#000] font-metropolis-bold text-lg'>Discipline</h2>
                                <p className='text-[#000] font-nexa-light mt-2'>
                                    Discipline is the foundation of our success. We maintain focus, consistency, and dedication in delivering high-quality solutions that meet and exceed expectations.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default About_us;