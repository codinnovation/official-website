import React from 'react';

function Call_to_action() {
  return (
    <>
      <div className='min-h-[auto] bg-gradient-to-r from-[#31333f] to-[#1a1c24] mt-16 flex items-center justify-center 2xl:min-h-[28vh] 2xl:mt-32'>
        <div className='text-center w-11/12 mx-auto py-10 2xl:w-8/12'>
          <h2 className='text-white font-metropolis-bold text-2xl mb-4 2xl:text-3xl'>
            Ready to Transform Your Business?
          </h2>
          <p className='text-[#b0b0b0] font-nexa-light text-base mb-8 2xl:text-lg'>
            Join thousands of businesses that trust Cod Innovations to deliver cutting-edge solutions. Let&apos;s build something amazing together!
          </p>
          <button className="border-none bg-[#ef6603] px-11 py-4 rounded-full text-white font-metropolis-bold hover:bg-[#cc5500] transition duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </>
  );
}

export default Call_to_action;