import React, { Component } from 'react';

import certificate from '../../images/certificate.png';
import typing from '../../images/typing.png';
import page from '../../images/page.png';
import books from '../../images/books.png';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

class First_Plan extends Component {
  state = {
    firstSyllabus: false,
    secondSyllabus: false,
  };

  syllabusDataStructure = (
    <div className='ml-12'>
      <div>1. Arrays</div>
      <div>2. Linked Lists</div>
      <div>3. Trees</div>
      <div>4. Balanced Trees</div>
      <div>5. Stacks</div>
      <div>6. Queues</div>
      <div>7. Heap</div>
      <div>8. Disjoint Set</div>
      <div>9. Multiple Choice</div>
      <div>10. Trie</div>
    </div>
  );

  syllabusAlgoritms = (
    <div className='ml-12'>
      <div>1. Strings</div>
      <div>2. Sorting</div>
      <div>3. Search</div>
      <div>4. Graph Theory</div>
      <div>5. Greedy</div>
      <div>6. Dynamic Programming</div>
      <div>7. Constructive Algorithms</div>
      <div>8. Recursion</div>
    </div>
  );

  toggleFirstSyllabus = () => {
    this.setState({ firstSyllabus: !this.state.firstSyllabus });
  };

  toggleSecondSyllabus = () => {
    this.setState({ secondSyllabus: !this.state.secondSyllabus });
  };

  onLogin = () => {
    const { isSignedIn } = this.props;
    if (isSignedIn) {
      return (
        <div className='flex justify-end'>
          <Link
            to='/dashboard'
            className=' text-3xl bg-transparent hover:bg-blue-500 text-gray-200 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded'>
            Enroll Now
          </Link>
        </div>
      );
    } else {
      return (
        <div className='flex justify-end'>
          <Link
            to='/login'
            className='text-3xl bg-transparent hover:bg-blue-500 text-gray-200 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded'>
            Enroll Now
          </Link>
        </div>
      );
    }
  };
  render() {
    const { firstSyllabus, secondSyllabus } = this.state;
    return (
      <div>
        <div className='bg-gray-800 text-gray-200'>
          <div className='flex flex-col xl:flex-row'>
            <div className='xl:w-1/2 w-full sm:w-auto'>
              <div className='xl:w-2/4 w-56 mt-10 ml-20  xl:py-12 bg-orange-600 rounded-full'>
                <img
                  src={certificate}
                  alt='certificate'
                  className='max-w-full rounded-lg shadow-2xl'
                />
              </div>
            </div>
            <div className=' xl:p-0 p-6 xl:w-1/2 w-full sm:w-auto'>
              <div className=' xl:mt-10 xl:mt-16 mt-4'>
                <p className='font-semibold xl:text-6xl md:text-5xl text-4xl border-b-2 border-orange-600 inline xl:pr-10'>
                  Get Certified with
                </p>
              </div>
              <div className='flex xl:text-right sm:text-center'>
                <div className=' text-gray-200  overflow-hidden relative float-left h-20 pt-1 mt-6 mr-8'>
                  <ul className='font-ubuntu xl:text-6xl text-3xl  flip'>
                    <li className='bg-blue-400 rounded-lg block mb-2 px-2 h-20 '>
                      C
                    </li>
                    <li className='bg-blue-400 rounded-lg block mb-2 px-3 h-20'>
                      C++
                    </li>
                    <li className='bg-blue-400 rounded-lg block mb-2 px-4 h-20'>
                      Java
                    </li>
                    <li className='bg-blue-400 rounded-lg block mb-2 px-6 h-20'>
                      Python
                    </li>
                  </ul>
                </div>
                <h1 className='mt-8 xl:text-5xl text-2xl '>DS and ALGORITHM</h1>
              </div>
              <div className='mt-2'>
                <p className='font-hairline xl:text-2xl text-lg'>
                  Learn C | C++ | Java | Python DS efficiently
                </p>
                <p>By Abhishek & Shivam</p>
                <div className='mt-8 mr-10'>{this.onLogin()}</div>
              </div>
            </div>
          </div>
          <div>
            <svg xmlns='http://www.w3.org/2000/svg' className='w-full h-40'>
              <path
                fill='rgb(255, 255, 255)'
                d='M-240,32c150 -16 250 -16 400 0c150 16 250 16 400 0c150 -16 250 -16 400 0c150 16 250 16 400 0c150 -16 250 -16 400 0c150 16 250 16 400 0c150 -16 250 -16 400 0c150 16 250 16 400 0c150 -16 250 -16 400 0c150 16 250 16 400 0l0,150 l-4000,0Z'
              />
            </svg>
          </div>
        </div>
        <div className='container h-64 mb-64 xl:mb-20 mx-auto '>
          <div className='flex flex-col xl:flex-row'>
            <div className='xl:w-1/3 w-full'></div>
            <div className='bg-white xl:ml-10 xl:w-2/3 ml-0 border-2 xl:border-0 w-full shadow-xl px-6 pt-12 xl:-m-64 -m-10 rounded mb-12'>
              <h1 className='xl:text-4xl text-2xl ml-6 font-ubuntu inline border-b-2 border-blue-400'>
                Course Syllabus
              </h1>
              <div className='m-4 p-4 xl:text-2xl text-xl'>
                <button className='m-4 shadow border border-gray-200 p-4 w-full'>
                  Basics of the respective language.
                </button>
                <div>
                  <button
                    onClick={this.toggleFirstSyllabus}
                    className='m-4 flex justify-center shadow border border-gray-200 p-4 w-full'>
                    Data Structures.
                    {firstSyllabus ? (
                      <div className='ml-4'>↑</div>
                    ) : (
                      <div className='ml-4'>↓</div>
                    )}
                  </button>
                  {firstSyllabus ? this.syllabusDataStructure : null}
                </div>
                <div>
                  <button
                    onClick={this.toggleSecondSyllabus}
                    className='m-4 flex justify-center shadow border border-gray-200 p-4 w-full'>
                    Algoritms{' '}
                    {firstSyllabus ? (
                      <div className='ml-4'>↑</div>
                    ) : (
                      <div className='ml-4'>↓</div>
                    )}
                  </button>
                  {secondSyllabus ? this.syllabusAlgoritms : null}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=' container mx-auto'>
          <div className=' px-8 pb-8 pt-4 bg-gray-800 rounded-lg flex flex-col xl:flex-row mx-auto flex-center'>
            <svg
              class='mt-10 w-1/2 h-32 stroke-current text-blue-200 inline-block h-12 w-12'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'>
              <circle cx='8' cy='21' r='2'></circle>
              <circle cx='20' cy='21' r='2'></circle>
              <path d='M5.67 6H23l-1.68 8.39a2 2 0 0 1-2 1.61H8.75a2 2 0 0 1-2-1.74L5.23 2.74A2 2 0 0 0 3.25 1H1'></path>
            </svg>

            <table className='table-fixed p-4 xl:w-1/2 w-full mx-auto text-blue-100'>
              <thead>
                <tr>
                  <th className='xl:w-1/3 w-full px-2 py-2 font-didcat text-lg'>
                    Course
                  </th>
                  <th className='xl:w-1/4 w-full px-2 py-2 font-didcat text-lg'>
                    Seat for Course
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border px-4 py-2'>C/C++</td>
                  <td className='border px-4 py-2'>16/30</td>
                </tr>
                <tr>
                  <td className='border px-4 py-2'>Java</td>
                  <td className='border px-4 py-2'>14/25</td>
                </tr>
                <tr>
                  <td className='border px-4 py-2'>Python</td>
                  <td className='border px-4 py-2'>15/24</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='flex mt-10 ml-6 xl:ml-0 xl:flex-row flex-col'>
            <div className='xl:w-1/2 md:w-full sm:w-auto'>
              <div className='w-2/3'>
                <img src={typing} alt='computer' className='max-w-full' />
              </div>
            </div>
            <div className='xl:ml-10 xl:w-1/2 md:w-full sm:w-auto'>
              <h1 className='text-4xl font-ubuntu inline border-b-2 border-blue-400'>
                Training Highlights
              </h1>

              <div className='m-4 p-4 text-2xl'>
                <ul className='list-disc list-inside'>
                  <li>Govt Certificate of Training</li>
                  <li>Learn from home</li>
                  <li>Stay safe indoors</li>
                  <li>Placement assistance</li>
                  <li>To build your career</li>
                  <li>Live Video tutorials</li>
                  <li>Regular assignments</li>
                  <li>For hands-on practice</li>
                  <li>Doubt clearing session every day</li>
                  <li>Beginner-friendly</li>
                  <li> No prior knowledge required</li>
                  <li>Solving various company-specific coding questions.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='mt-10 flex mt-10 ml-6 xl:ml-0 xl:flex-row flex-col'>
            <div className='xl:ml-10 xl:w-1/2 md:w-full sm:w-auto'>
              <h1 className='text-4xl font-ubuntu inline border-b-2 border-blue-400'>
                Placement Assistance
              </h1>
              <div className='m-4 p-4 text-2xl'>
                <ul className='list-disc list-outside'>
                  <li>
                    Top Students will get Onsite Opportunities in top IT sector
                    companies.
                  </li>
                  <li>Free Placement Preparation Training.</li>
                  <li>Access to curated Internships.</li>
                </ul>
              </div>
            </div>
            <div className=' xl:w-1/2 md:w-full sm:w-auto'>
              <div className='w-2/3'>
                <img
                  src={page}
                  alt='page'
                  className='max-w-full mx-auto block'
                />
              </div>
            </div>
          </div>

          <div className='mt-10 flex mt-10 ml-6 xl:ml-0 xl:flex-row flex-col'>
            <div className='xl:ml-10 xl:w-1/2 md:w-full sm:w-auto'>
              <div className='w-2/3'>
                <img src={books} alt='books' className='max-w-full' />
              </div>
            </div>
            <div className='xl:w-1/2 md:w-full sm:w-auto'>
              <h1 className='text-4xl font-ubuntu inline border-b-2 border-blue-400'>
                Course Include
              </h1>
              <div className='m-4 p-4 text-2xl'>
                <ul className='list-decimal list-outside'>
                  <li className='pl-2'>
                    Placement oriented training like solving various competitive
                    coding questions and Pseudo codes.
                  </li>

                  <li className='pl-2 my-3'>
                    Solve coding problems from Codeforces, CodeChef,
                    HackerEarth, HackerRank, Topcoder, and many more in minutes.
                  </li>
                  <li className='pl-2 my-3'>Weekly online coding challenges</li>
                  <li className='pl-2 my-3'>
                    Certificate after Completion to boast your resume.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ isSignedIn: state.auth.isSignedIn });

export default connect(mapStateToProps, null)(withRouter(First_Plan));
