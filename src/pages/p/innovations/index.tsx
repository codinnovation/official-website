import React from 'react'
import HeroSection from '../../home-page/hero-section'

function Index() {
  return (
    <>
      <div className='w-full'>
        <HeroSection />
        <div className="xl:w-8/12 lg:w-10/12 mx-auto h-[100%] w-11/12">

          {/**========header === */}
          <div className='flex flex-col justify-center items-center text-center xl:mt-[15%]'>
            <h1 className='text-center font-metropolis-bold xl:text-[1.3em]'>Revolutionizing Industries with </h1>
            <h1 className='text-center font-metropolis-bold text-[#555] xl:text-[1.3em]'>Software Solutions</h1>
          </div>

          {/**=====grid */}
          <div className='grid grid-cols-2 gap-[30px] xl:mt-[6%] mb-[10px]'>

            <div className='w-full bg-[#222] flex flex-col justify-between xl:h-[300px] xl:p-[20px] xl:rounded-[20px]'>
              <div className='flex flex-col justify-center items-start xl:space-y-2'>
                <h1 className='text-[#f1f1f1] uppercase font-metropolis-regular'>Comprehensive School Management System</h1>
                <p className='text-[#999]'>A complete solution to streamline school operations, enhance student outcomes, and connect parents, teachers, and administrators effortlessly.
                </p>
              </div>

              

              <div className='flex justify-end items-center'>
                <button className='bg-[#f1f1f1] text-[#333] w-[130px] h-[50px] rounded-lg font-arianaprobold'>Learn More</button>
              </div>
            </div>

            <div className='w-full bg-[#333] flex flex-col justify-between xl:h-[300px] xl:p-[20px] xl:rounded-[20px]'>
            <div className='flex flex-col justify-center items-start xl:space-y-2'>
                <h1 className='text-[#f1f1f1] uppercase font-metropolis-regular'>Healthcare Connect</h1>
                <p className='text-[#999]'>A powerful app designed to connect patients and healthcare providers with telemedicine, appointment scheduling, and secure medical records.

                </p>
              </div>

              

              <div className='flex justify-end items-center'>
                <button className='bg-[#f1f1f1] text-[#333] w-[130px] h-[50px] rounded-lg font-arianaprobold'>Learn More</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Index