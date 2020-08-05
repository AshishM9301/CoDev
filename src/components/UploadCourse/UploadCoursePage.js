import React from 'react';

function UploadCoursePage() {
  return (
    <div>
      <div className='container mx-auto m-10'>
        <div className='text-4xl font-normal'>Upload Cource Page</div>
      </div>
      <div className='flex justify-center mt-20'>
        <form className='w-full max-w-3xl'>
          <div className='flex flex-wrap -mx-3 mb-6 mt-10'>
            <div className='w-full px-3 mb-6 md:mb-0'>
              <div class='md:flex md:items-center mb-16'>
                <div className='md:w-1/12'>
                  <label
                    className='mt-1 block uppercase tracking-wide text-gray-700 text-s font-bold mb-2" for="inline-full-name'
                    htmlFor='grid-title'>
                    Title
                  </label>
                </div>
                <div className='md:w-11/12'>
                  <input
                    className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                    id='inline-full-name'
                    value='value'
                    type='text'
                    placeholder='Title'
                  />
                </div>
              </div>
            </div>
            <div className='w-full mb-6 md:mb-0 px-3'>
              <label
                className='mb-3 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                htmlFor='grid-description'>
                Discription
              </label>
              <textarea
                className='shadow appearance-none border rounded w-full py-2 px-3 mb-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='grid-description'
                value='value'
                type='text'
                placeholder='Description'
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadCoursePage;
