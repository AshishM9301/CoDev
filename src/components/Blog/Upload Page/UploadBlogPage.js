import React, { useState, useEffect } from 'react';

function UploadBlogPage() {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('end-auth', `${localStorage.getItem('token')}`);

  useEffect(() => {
    console.log(myHeaders);
    fetch('/api/users/auth', {
      method: 'GET',
      headers: myHeaders,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.isAuth) {
          setisAuth(true);
          setMessage(data.message);
        } else {
          setisAuth(false);
          setMessage(data.errorMessage);
        }
      })
      .catch((err) => {});
  }, []);

  const [Permalink, setPermalink] = useState('');
  const [Title, setTitle] = useState('');
  const [Content, setContent] = useState('');
  const [Message, setMessage] = useState(null);
  const [isAuth, setisAuth] = useState(false);
  const [PostSuccess, setPostSuccess] = useState(null);

  const handleChangePermalink = (event) => {
    setPermalink(event.currentTarget.value);
  };

  const handleChangeTitle = (event) => {
    setTitle(event.currentTarget.value);
  };
  const handleChangeContent = (event) => {
    setContent(event.currentTarget.value);
  };

  const toggle = () => {
    // Clear Error

    setMessage(null);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!isAuth) {
      setMessage('Please Login First');
    }

    if (Title === '' || Permalink === '' || Content === '') {
      setMessage('Fill the Blog Data Please');
    }

    const variables = {
      title: Title,
      permalink: Permalink,
      content: Content,
    };

    await fetch('/api/blog/upload', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(variables),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setPostSuccess(true);
          setMessage(data.message);
        } else {
          setPostSuccess(false);
          setMessage(data.errorMessage);
        }
      });
  };

  const onPublish = (event) => {
    event.preventDefault();
    const variables = {
      permalink: Permalink,
    };

    if (PostSuccess) {
      fetch('/api/blog/publish', {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(variables),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setMessage(data.message);
          } else {
            setMessage(data.errorMessage);
          }
        });
    }
  };

  return (
    <div>
      {Message ? (
        <div>
          <div className='absolute right-0'>
            <div className='flex justify-end '>
              <div className='px-4  py-2'>
                <div
                  className={`${
                    Message
                      ? 'bg-green-100 border border-green-400 text-green-700'
                      : 'bg-red-100 border border-red-400 text-red-700'
                  } px-4 py-3 rounded relative`}
                  role='alert'>
                  <span className='block sm:inline mr-6'>{Message}</span>
                  <span className='absolute top-0 bottom-0 right-0 px-4 py-3'>
                    <svg
                      className='fill-current h-6 w-6 text-red-500'
                      role='button'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      onClick={toggle}>
                      <title>Close</title>
                      <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div className='mt-6 mb-20 w-2/3 mx-auto'>
        <h1 className='text-center border-b-2 text-6xl font-ubuntu font-hairline'>
          Blog Upload
        </h1>
      </div>
      <div className='flex'>
        <form onSubmit={onSubmit} className='w-3/5 mx-auto'>
          <div className='flex'>
            <div className='w-1/6 mx-4 mx-auto mt-4 '>
              <div className=' text-white rounded-lg text-2xl flex justify-center flex-col p-6 text-white'>
                <button
                  onClick={onSubmit}
                  className='border border-blue-300 bg-blue-400 rounded px-4 py-1 m-4'>
                  Save
                </button>
                <button
                  onClick={onPublish}
                  className='border border-blue-300 bg-blue-400 rounded px-4 py-1 m-4'>
                  Publish
                </button>
              </div>
            </div>

            <div className='w-5/6 mx-4'>
              <div>
                <label className='text-3xl'>Permalink</label>
                <div className='my-4'>
                  <input
                    onChange={handleChangePermalink}
                    name='permalink'
                    type='text'
                    className='border appearance-none border-gray-300 rounded text-gray-700 focus:outline-none focus:shadow-outline py-2 px-4 shadow w-full text-lg'
                  />
                </div>
              </div>
              <div className='my-8'>
                <label className='text-3xl'>Title</label>
                <div className='my-4'>
                  <input
                    onChange={handleChangeTitle}
                    name='title'
                    type='text'
                    className='border appearance-none border-gray-300 rounded text-gray-700 focus:outline-none focus:shadow-outline py-2 px-4 shadow w-full text-lg'
                  />
                </div>
              </div>
              <div className='my-8'>
                <label className='text-3xl'>Content</label>
                <div className='my-4 mb-12'>
                  <textarea
                    name='content'
                    onChange={handleChangeContent}
                    className='h-64 border appearance-none border-gray-300 rounded text-gray-700 focus:outline-none focus:shadow-outline py-2 px-4 shadow w-full text-lg'
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UploadBlogPage;
