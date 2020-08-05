import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { login } from '../../actions';
import { clearError } from '../../actions/errorAction';

import logo from '../../images/LOGOwithoutlaptop.png';
export class Login extends Component {
  state = {
    page: false,
    email: '',
    password: '',
    msg: null,
  };

  componentDidUpdate(pervProps) {
    const { error, isLogin } = this.props;
    if (error !== pervProps.error) {
      // Check for register error
      if (error.id === 'LOGIN_FAIL') {
        this.setState({ msg: error.errorMessage });
      } else {
        this.setState({ msg: null });
      }
    }
    //If Authenticated

    if (isLogin) {
      this.props.history.push(`/dashboard`);
    }
  }

  toggle = () => {
    // Clear Error
    this.props.clearError();

    this.setState({ page: !this.state.page });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    const loginUser = {
      email,
      password,
    };
    this.props.login(loginUser);
  };

  render() {
    return (
      <div className='pattern-1 relative'>
        {this.state.msg ? (
          <div className='absolute right-0'>
            <div className='flex justify-end '>
              <div className='px-4  py-2'>
                <div
                  className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'
                  role='alert'>
                  <strong className='font-bold'>Error ! </strong>
                  <span className='block sm:inline mr-6'>{this.state.msg}</span>
                  <span className='absolute top-0 bottom-0 right-0 px-4 py-3'>
                    <svg
                      className='fill-current h-6 w-6 text-red-500'
                      role='button'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      onClick={this.toggle}>
                      <title>Close</title>
                      <path d='M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z' />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        <div className='w-full mx-auto flex flex-col xl:flex-row justify-center xl:h-screen '>
          <div className=' xl:w-1/12 w-full triangle-left xl:mt-0 mt-10'>
            <div className='xl:w-64 w-32 bg-white xl:py-8 py-4 rounded-full xl:mt-64 mx-auto'>
              <img src={logo} className='mx-auto max-w-full' />
            </div>
          </div>
          <div className='mb-10 xl:mb-0 xl:w-11/12 w-full flex mt-12 xl:mt-0 items-center mx-auto justify-center'>
            <form
              className='xl:w-4/5 z-50 bg-white shadow-md rounded px-10 pt-6 pb-8'
              onSubmit={this.onSubmit}>
              <div className='pb-6'>
                <h1 className='text-3xl font-abrilfatface tracking-widest py-4  font-normal'>
                  Login Credentials
                </h1>
                <div className='border-b-4 border-orange-500 mt-5 inline px-4'></div>
              </div>
              <div className='mb-10'>
                <div className='flex flex-col xl:flex-row justify-between'>
                  <div className='xl:w-5/12'>
                    <label className='block uppercase tracking-wide text-gray-700 text-lg font-sanchez font-bold m-4 ml-2'>
                      Enter mail
                    </label>
                  </div>
                  <div className='xl:w-7/12'>
                    <input
                      name='email'
                      type='email'
                      className='shadow appearance-none border rounded w-full py-2 px-6 mt-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                      onChange={this.onChange}
                    />
                  </div>
                </div>
              </div>
              <div className='mb-10'>
                <div className='flex flex-col xl:flex-row  justify-between'>
                  <div className='xl:w-5/12'>
                    <label className='block uppercase tracking-wide text-gray-700 text-lg font-sanchez font-bold m-4 ml-2'>
                      Enter Password
                    </label>
                  </div>
                  <div className='xl:w-7/12'>
                    <input
                      name='password'
                      type='password'
                      label=''
                      className='shadow appearance-none border rounded w-full py-2 px-6 mb-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                      onChange={this.onChange}
                    />
                  </div>
                </div>
              </div>
              <div className='flex flex-col xl:flex-row  items-center justify-end mt-5 mb-6 text-xl'>
                <Link
                  to='/register'
                  className='mr-3 xl:mb-0 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full'>
                  Not yet Registered?
                </Link>
                <button className='mr-3 xl:mt-0 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full'>
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  success: PropTypes.bool,
  error: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  clearError: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  message: state.msg,
  isLogin: state.auth.isLogin,
  error: state.error,
  success: state.auth.success,
});

// const mapDispatchToProps = {}

// export const RegisterForm = reduxForm({ form: 'registerForm' })(Register);

export default connect(mapStateToProps, { login, clearError })(
  withRouter(Login)
);
