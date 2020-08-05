import React from 'react';
import '../../css/style.css';

import logowithlaptop from '../../images/logowithlaptop.png';
import board from '../../images/board.png';
import classroom from '../../images/classroom.png';
import shivam from '../../images/shivam.jpeg';
import medal from '../../images/medal.png';
import mail from '../../images/mail.jpg';
import msingh from '../../images/bro.png';
import certificate from '../../images/certificate.png';
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <div>
      <div className='bg-gray-800'>
        <div className='flex'>
          <div className='relative w-2/12'>
            <div className=' mt-10'>
              <img
                alt='imedal'
                src={medal}
                className='max-w-full ml-4 md:w-64 xl:ml-20 sm:ml-12 sm:w-40'
              />
            </div>
          </div>
          <div className='mx-auto text-center w-5/12 text-gray-100 xl:text-5xl md:text-2xl sm:text-lg self-center font-didcat'>
            <h1>Be a Coding Gen</h1>
            <h1 className='container xl:ml-40'>Be with Co-Development</h1>
          </div>
          <div className='w-5/12'>
            <svg
              viewBox='0 0 200 200'
              className='h-full xl:max-w-xl mx-auto'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill='#f6ad55'
                d='M44,-37.8C56.4,-31.5,65.4,-15.8,67.1,1.7C68.7,19.1,63,38.2,50.6,53C38.2,67.8,19.1,78.4,4.8,73.6C-9.6,68.9,-19.2,48.8,-32,34C-44.9,19.2,-61.1,9.6,-66.3,-5.2C-71.5,-20,-65.7,-39.9,-52.8,-46.2C-39.9,-52.5,-20,-45,-2.1,-43C15.8,-40.9,31.5,-44.1,44,-37.8Z'
                transform='translate(100 100)'
              />
            </svg>
            <div className='relative'>
              <div className='xl:ml-40 xl:mb-32 absolute bottom-0 sm:w-1/2 '>
                <lottie-player
                  src='https://assets6.lottiefiles.com/packages/lf20_UUvrir.json'
                  background='transparent'
                  speed={1}
                  className='scale'
                  loop
                  autoPlay
                />
              </div>
            </div>
          </div>
        </div>
        <div className='relative mt-20'>
          <div className='absolute inset-x-0 bottom-0 mb-10 xl:max-w-lg mx-auto w-1/2'>
            <img
              alt='logo'
              src={logowithlaptop}
              className='xl:max-w-6xl sm:w-auto md:w-full'
            />
          </div>
          <svg xmlns='http://www.w3.org/2000/svg' className='w-full h-40'>
            <path
              fill='rgb(255, 255, 255)'
              d='M-240,32c150 -16 250 -16 400 0c150 16 250 16 400 0c150 -16 250 -16 400 0c150 16 250 16 400 0c150 -16 250 -16 400 0c150 16 250 16 400 0c150 -16 250 -16 400 0c150 16 250 16 400 0c150 -16 250 -16 400 0c150 16 250 16 400 0l0,150 l-4000,0Z'
            />
          </svg>
        </div>
      </div>
      {/* Next */}

      <div>
        <div className='m-6 mx-auto container flex justify-center'>
          <h1
            style={{ fontFamily: '"Ubuntu", sans-serif' }}
            className='text-5xl font-medium text-center border-b-4 border-orange-400 inline hover:border-gray-600'>
            Coding Courses
          </h1>
        </div>
        <div className='flex'>
          <div className='xl:w-1/2 sm:w-auto md:w-full xl:relative md:relative'>
            <div className='relative'>
              <div className=''>
                <img
                  alt='certificate'
                  className='absolute max-w-full w-1/3 rounded-lg xl:ml-56 margin-top-xl -margin-top-sm'
                  src={certificate}
                />
              </div>
            </div>
            <div className='xl:w-full sm:w-2/3'>
              <svg
                viewBox='0 0 200 200'
                className='xl:h-full sm:h-64 xl:max-w-xl md:w-full sm:w-auto mx-auto'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill='#2d3748'
                  d='M63.4,-53C75.7,-35.1,74.9,-9.1,66.7,10.5C58.5,30.1,42.8,43.3,23.4,55.3C3.9,67.2,-19.4,77.9,-36.8,71.5C-54.2,65,-65.7,41.3,-70.1,17.4C-74.4,-6.5,-71.6,-30.7,-58.8,-48.8C-45.9,-66.8,-22.9,-78.7,1.3,-79.8C25.5,-80.8,51,-70.9,63.4,-53Z'
                  transform='translate(100 100)'
                />
              </svg>
            </div>
          </div>
          <div className='xl:w-1/2 text-center xl:-ml-40 mx-8 sm:mx-6 my-12 sm:w-auto md:w-full'>
            <div className='flex'>
              <div className=' text-gray-200  overflow-hidden relative float-left h-20 pt-2 mt-6 mr-4'>
                <ul className='font-ubuntu text-5xl flip'>
                  <li className='bg-blue-400 rounded-lg block mb-6 px-2 h-16 '>
                    C
                  </li>
                  <li className='bg-blue-400 rounded-lg block mb-6 px-3 h-16'>
                    C++
                  </li>
                  <li className='bg-blue-400 rounded-lg block mb-6 px-4 h-16'>
                    Java
                  </li>
                  <li className='bg-blue-400 rounded-lg block mb-6 px-6 h-16'>
                    Python
                  </li>
                </ul>
              </div>
              <h1 className='mt-8 text-4xl '>DS and ALGORITHM</h1>
            </div>
            <div className='flex flex-col xl:flex-row mt-6 leading-normal '>
              <div className='xl:w-1/2 sm:w-auto md:w-full'>
                <table className='table-fixed p-4'>
                  <thead>
                    <tr>
                      <th className='w-1/3 px-2 py-2 font-didcat text-lg'>
                        Course
                      </th>
                      <th className='w-1/4 px-2 py-2 font-didcat text-lg'>
                        Seat for Course
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='bg-gray-100'>
                      <td className='border px-4 py-2'>C/C++</td>
                      <td className='border px-4 py-2'>16/30</td>
                    </tr>
                    <tr className='bg-gray-100'>
                      <td className='border px-4 py-2'>Java</td>
                      <td className='border px-4 py-2'>14/25</td>
                    </tr>
                    <tr className='bg-gray-100'>
                      <td className='border px-4 py-2'>Python</td>
                      <td className='border px-4 py-2'>15/25</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ul className='ml-8 p-4 xl:w-1/2 sm:w-auto md:w-full list-disc text-justify text-lg text-gray-700'>
                <li>Basics of the respective language.</li>
                <li>Data Structures.</li>
                <li>Algoritms.</li>
              </ul>
            </div>
            <div className='text-justify text-gray-600'>
              <h1 className='mt-6 xl:text-4xl md:text-2xl sm:text-2xl font-semibold'>
                Course Outcome:
              </h1>
              <h2 className='xl:text-2xl md:text-xl sm:text-lg'>
                After completion of the course you can easily crack the
                interview coding problems and whiteboard problems with ease
              </h2>
            </div>
            <div className='border-2 border-red-300 p-2 mt-6 text-justify flex justify-between'>
              <h1 className='xl:text-3xl md:text-xl font-didcat p-4'>Note</h1>
              <p className='xl:text-3xl md:text-xl font-didcat p-4'>:</p>
              <ul>
                <li className='text-lg font-spartan p-4'>
                  No pre-requisites as you will be taught Coding Language,Data
                  Structures and Algoritms from scratch
                </li>
                <li className='text-lg font-spartan text-orange-600 p-4'>
                  Top student will get opportunities in top IT sector
                </li>
              </ul>
            </div>

            <div className='p-8'>
              <h2 className='line-through text-3xl pl-24 text-red-500 -mb-6'>
                ₹8000
              </h2>
              <h2 className=' text-2xl '>
                <div className='text-5xl inline'>
                  <h4 className='text-red-500 text-xl mt-4 mb-0'> 75% off</h4>At
                  Just
                </div>
                ₹1999
              </h2>
            </div>
            <div className='flex xl:mr-40 justify-end'>
              <Link
                to='/plan'
                className='text-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Next */}

      <div>
        <div className='m-6 mx-auto container flex justify-center'>
          <h1
            className='text-5xl font-medium text-center border-b-4 border-orange-400 inline hover:border-gray-600'
            style={{ fontFamily: '"Ubuntu", sans-serif' }}>
            Why Choose us?
          </h1>
        </div>
        <div className='flex'>
          <div className='xl:w-1/2 md:w-full sm:w-auto'>
            <div className='relative'>
              <img
                alt='board'
                className='max-w-full absolute w-1/2 '
                src={board}
                style={{ top: 170, right: 200 }}
              />
            </div>
            <svg
              viewBox='0 0 200 200'
              className='xl:h-full sm:h-64 max-w-xl mx-auto'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill='#2d3748'
                d='M63.4,-53C75.7,-35.1,74.9,-9.1,66.7,10.5C58.5,30.1,42.8,43.3,23.4,55.3C3.9,67.2,-19.4,77.9,-36.8,71.5C-54.2,65,-65.7,41.3,-70.1,17.4C-74.4,-6.5,-71.6,-30.7,-58.8,-48.8C-45.9,-66.8,-22.9,-78.7,1.3,-79.8C25.5,-80.8,51,-70.9,63.4,-53Z'
                transform='translate(100 100)'
              />
            </svg>
          </div>
          <div className='xl:w-1/2 md:w-full sm:w-auto'>
            <ul className=' p-6 my-6 mx-8 text-xl xl:text-4xl md:text-2xl list-decimal list-outside '>
              <li>Govt Certificate of Training.</li>

              <li>Placement assistance.</li>

              <li>Learn anytime, anywhere.</li>
              <li>Regular assignments.</li>
              <li>2-Major Project.</li>
              <li>Doubt clearing session every day.</li>

              <li>No prior knowledge required.</li>
              <li>Solving various company-specific coding questions.</li>
              <li>Top Mentor guidance till Placement.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mentors */}

      <div>
        <div className='m-6 mx-auto container flex justify-center'>
          <h1
            className='text-5xl font-medium text-center border-b-4 border-orange-400 inline hover:border-gray-600'
            style={{ fontFamily: '"Ubuntu", sans-serif' }}>
            Mentors
          </h1>
        </div>
        <div className='flex xl:flex-row flex-col'>
          <div className='xl:w-1/2 w-full sm:w-auto'>
            <div className='relative'>
              <img
                alt='classroom'
                src={classroom}
                className='xl:ml-10 absolute xl:mt-20 xl:w-1/2 sm:w-auto md:w-full max-w-full'
              />
            </div>
            <svg
              viewBox='0 0 200 200'
              className='h-full max-w-xl mx-auto'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill='#2d3748'
                d='M63.4,-53C75.7,-35.1,74.9,-9.1,66.7,10.5C58.5,30.1,42.8,43.3,23.4,55.3C3.9,67.2,-19.4,77.9,-36.8,71.5C-54.2,65,-65.7,41.3,-70.1,17.4C-74.4,-6.5,-71.6,-30.7,-58.8,-48.8C-45.9,-66.8,-22.9,-78.7,1.3,-79.8C25.5,-80.8,51,-70.9,63.4,-53Z'
                transform='translate(100 100)'
              />
            </svg>
          </div>
          <div className='xl:w-1/2 w-full sm:w-auto mt-10'>
            <div className='flex md:flex-col flex-row justify-between'>
              <div className='xl:w-1/3 w-32 md:w-full sm:w-auto m-4'>
                <img
                  alt='rohan'
                  src={msingh}
                  className='max-w-full rounded-full mx-auto m-4 shadow-xl'
                />
                <div className='flex justify-center my-3'>
                  <div className='w-10'>
                    <a
                      rel='noopener noreferrer'
                      target='_blank'
                      href='mailto:rohanzemog.0700@gmail.com'>
                      <img alt='mail' className='max-w-full' src={mail} />
                    </a>
                  </div>
                  <div className='w-10'>
                    {/*
                    <a
                      rel='noopener noreferrer'
                      href='https://instagram.com/rohan_zemog?igshid=pz646iny7p5b'
                      target='_blank'>
                      <img
                        alt='instagram'
                        className='max-w-full'
                        src='https://seeklogo.net/wp-content/uploads/2016/06/Instagram-logo-400x400.png'
                      />
                    </a>*/}
                  </div>
                </div>
                <h2 className='text-2xl text-center'>Abhishek</h2>
              </div>
              <div className='xl:w-1/3 w-32 md:w-full sm:w-auto m-4'>
                <img
                  alt='msingh'
                  src={shivam}
                  className='max-w-full rounded-full mx-auto shadow-xl m-4'
                />
                <div className='flex justify-center my-3'>
                  <div className='w-10'>
                    <a
                      rel='noopener noreferrer'
                      target='_blank'
                      href='mailto:rajmurari1234@gmail.com'>
                      <img alt='mail' className='max-w-full' src={mail} />
                    </a>
                  </div>
                  <div className='w-10'>
                    <a
                      rel='noopener noreferrer'
                      href='https://www.instagram.com/albertshiva2247/'
                      target='_blank'>
                      <img
                        alt='instagram'
                        className='max-w-full'
                        src='https://seeklogo.net/wp-content/uploads/2016/06/Instagram-logo-400x400.png'
                      />
                    </a>
                  </div>
                </div>
                <h2 className='text-2xl text-center'>Shivam</h2>
              </div>
              <div className='xl:w-1/3 md:w-full sm:w-auto'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
