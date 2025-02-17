import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <>
      <div className='bg-[#f8f9fa] py-10 mt-16 2xl:py-16 2xl:mt-32'> {/* Light gray background */}
        <div className='w-11/12 mx-auto 2xl:w-8/12'>

          {/* Footer Content */}
          <div className='grid grid-cols-1 gap-10 2xl:grid-cols-4'>

            {/* About Us */}
            <div className='flex flex-col space-y-3'>
              <h2 className='text-[#1a1c24] font-metropolis-bold text-base 2xl:text-lg'>About Us</h2>
              <p className='text-[#4a4a4a] font-nexa-light text-sm 2xl:text-base'>
                Cod Innovations is a leading technology company dedicated to transforming industries through innovative solutions. We empower businesses, enhance education, and revolutionize healthcare.
              </p>
            </div>

            {/* Quick Links */}
            <div className='flex flex-col space-y-3'>
              <h2 className='text-[#1a1c24] font-metropolis-bold text-base 2xl:text-lg'>Quick Links</h2>
              <ul className='space-y-2'>
                <li><Link href="/" className='text-[#4a4a4a] font-nexa-light hover:text-[#ef6603] transition duration-300'>Home</Link></li>
                <li><Link href="/about" className='text-[#4a4a4a] font-nexa-light hover:text-[#ef6603] transition duration-300'>About Us</Link></li>
                <li><Link href="/services" className='text-[#4a4a4a] font-nexa-light hover:text-[#ef6603] transition duration-300'>Services</Link></li>
                <li><Link href="/blog" className='text-[#4a4a4a] font-nexa-light hover:text-[#ef6603] transition duration-300'>Blog</Link></li>
                <li><Link href="/contact" className='text-[#4a4a4a] font-nexa-light hover:text-[#ef6603] transition duration-300'>Contact Us</Link></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className='flex flex-col space-y-4'>
              <h2 className='text-[#1a1c24] font-metropolis-bold text-base 2xl:text-lg'>Contact Us</h2>
              <div className='space-y-2'>
                <p className='text-[#4a4a4a] font-nexa-light text-sm 2xl:text-base'>123 Innovation Drive, Tech City, TC 12345</p>
                <p className='text-[#4a4a4a] font-nexa-light text-sm 2xl:text-base'>(123) 456-7890</p>
                <p className='text-[#4a4a4a] font-nexa-light text-sm 2xl:text-base'>info@codinnovations.com</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className='flex flex-col space-y-3'>
              <h2 className='text-[#1a1c24] font-metropolis-bold text-base 2xl:text-lg'>Follow Us</h2>
              <div className='flex space-x-4'>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6 text-[#4a4a4a] hover:text-[#ef6603] transition duration-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.234 2.686.234v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6 text-[#4a4a4a] hover:text-[#ef6603] transition duration-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <svg className="w-6 h-6 text-[#4a4a4a] hover:text-[#ef6603] transition duration-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Notice */}
          <div className='border-t border-[#e0e0e0] mt-10 pt-6'>
            <p className='text-[#4a4a4a] font-nexa-light text-center'>
              &copy; {new Date().getFullYear()} Cod Innovations. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;