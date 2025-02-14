import React from 'react';

function Call_to_action() {
  return (
    <>
      <div className='min-h-[28vh] bg-gradient-to-r from-[#31333f] to-[#1a1c24] mt-32 flex items-center justify-center'>
        <div className='text-center w-8/12 mx-auto py-10'>
          <h2 className='text-white font-metropolis-bold text-3xl mb-4'>
            Ready to Transform Your Business?
          </h2>
          <p className='text-[#b0b0b0] font-nexa-light text-lg mb-8'>
            Join thousands of businesses that trust Cod Innovations to deliver cutting-edge solutions. Let&apos;s build something amazing together!
          </p>
          <button className="border-none bg-[#ef6603] px-12 py-4 rounded-full text-white font-metropolis-bold hover:bg-[#cc5500] transition duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </>
  );
}

export default Call_to_action;