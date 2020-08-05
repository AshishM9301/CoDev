import React from 'react';
import paytm_1 from '../../images/gpay-1.jpeg';

export default function Payment() {
  return (
    <div>
      <div className='min-h-71'>
        <div className='xl:w-3/4 mx-auto'>
          <div>
            <h1 className='text-5xl text-center m-8'>Payment</h1>
          </div>
          <div className='border border-4 border-red-300 p-6'>
            <div className='mx-auto flex justify-center'>
              <h2 className='xl:text-4xl md:text-2xl sm:text-2xl xl:text-center md:text-justify border-b-2 border-gray-300 inline'>
                Notice
              </h2>
            </div>
            <div className='xl:w-4/5 m-6 p-6 mx-auto xl:text-xl'>
              <ul className='list-decimal'>
                <li>
                  If have payed for the course your after payment verification,
                  your dashboard will be updated in 24 hours
                </li>
                <li>You will be added to Whats App & Telegram Group</li>
                <li>if any query Email us on : codevelopment2020@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className='flex my-20'>
            <h2 className='w-1/2 text-2xl'>Paymnet Method: Razorpay</h2>
            <div className='w-1/2 flex justify-end'>
              <a
                href='https://rzp.io/l/ea84VgB'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-10 rounded inline-flex items-center'>
                Pay
              </a>
            </div>
          </div>
          <div className='flex my-20'>
            <h2 className='w-1/2 text-2xl'>Paymnet Method: All UPI</h2>
            <div className='w-1/2 flex justify-end'>
              <div className='xl:w-2/3 sm:w-1/2'>
                <img src={paytm_1} alt='paytm' className='max-w-full' />
                <h3 className='xl:text-2xl text-xl'>
                  UPI ID: theoriginals.0700@okhdfcbank
                </h3>
              </div>
            </div>
          </div>
          <div className='flex mb-24 xl:mb-0'>
            <h1 className=' text-2xl'>Join the WhatApp Group link</h1>
            <a
              href='https://chat.whatsapp.com/K1WDm8ZTzwcD4TGTvh1etm'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-4 px-10 rounded inline-flex items-center ml-12'>
              Join
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
