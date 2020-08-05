import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { clearError, returnError } from '../../actions/errorAction';
import { clickedPaymentButton } from '../../actions/dashboardAction';
import { detailUpdater } from '../../actions';
import { browserHistory } from '../Header/Header';

class Detail extends Component {
  state = {
    page: false,
    firstName: this.props.user.firstname,
    lastName: this.props.user.lastname,
    userName: this.props.user.username,
    email: this.props.user.email,
    password: '',
    password2: '',
    phoneNumber: this.props.user.phoneNumber,
    whatsAppNumber: this.props.user.whatsAppNumber,
    city: this.props.user.city,
    state: this.props.user.state,
    pinCode: this.props.user.pinCode,
    msg: null,
  };

  componentDidUpdate(pervProps) {
    const { error, updatingSuccess } = this.props;
    if (error !== pervProps.error) {
      // Check for register error
      if (error.id === 'DETAIL_UPDATING_FAIL') {
        this.setState({ msg: error.errorMessage });
      } else {
        this.setState({ msg: null });
      }
    }
    //If Authenticated
    console.log(this.props);
    if (updatingSuccess) {
      this.props.history.push('/dashboard');
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
    console.log(this.props);
    e.preventDefault();

    const {
      firstName,
      lastName,
      email,
      userName,
      phoneNumber,
      whatsAppNumber,
      city,
      state,
      password,
      password2,
      pinCode,
    } = this.state;

    const newDetails = {
      firstName,
      lastName,
      email,
      userName,
      phoneNumber,
      whatsAppNumber,
      city,
      state,
      password,
      password2,
      pinCode,
    };

    this.props.detailUpdater(newDetails);
    if (this.props.success) {
      browserHistory.push('/dashboard');
    }
  };

  checkValue = (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      phoneNumber,
      pinCode,
      state,
      city,
      userName,
      whatsAppNumber,
    } = this.props.user;

    if (
      firstName ||
      lastName ||
      phoneNumber ||
      pinCode ||
      state ||
      city ||
      userName ||
      whatsAppNumber === ''
    ) {
      this.props.returnError('Check all fields', 'DETAIL_UPDATING_FAIL');
    } else {
      this.props.clickedPaymentButton('GET_PAYMENT');
    }
  };

  render() {
    const {
      firstName,
      lastName,
      phoneNumber,
      pinCode,
      state,
      city,
      userName,
      whatsAppNumber,
    } = this.state;
    return (
      <div>
        {this.state.msg ? (
          <div className='flex float-right justify-end'>
            <div className='w-1/3 px-4  py-2'>
              <div
                className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'
                role='alert'>
                <strong className='font-bold'>Error ! </strong>
                <span className='block sm:inline'>{this.state.msg}</span>
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
        ) : null}
        <div className='mx-auto'>
          <h1 className='text-4xl border-b-2 border-blue-400 font-sanchez text-center py-3 border-double mt-5 mb-10'>
            Profile Details
          </h1>
        </div>
        <form
          className='conatiner mx-auto w-full max-w-lg'
          onSubmit={this.onSubmit}>
          <div className='flex flex-wrap -mx-3'>
            <div className='w-full px-3 mb-10'>
              <div className='md:flex md:items-center'>
                <div className='md:w-1/5'>
                  <label
                    className='block tracking-wide text-gray-700 text-xs font-bold mb-1 md:mb-0 pr-4 uppercase'
                    htmlFor='firstName'>
                    First Name
                  </label>
                </div>
                <div className='md:w-4/5'>
                  <input
                    className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    name='firstName'
                    type='text'
                    onChange={this.onChange}
                    defaultValue={firstName}
                  />
                </div>
              </div>
            </div>
            <div className='w-full px-3 mb-10'>
              <div className='md:flex md:items-center'>
                <div className='md:w-1/5'>
                  <label
                    className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                    htmlFor='lastName'>
                    Last Name
                  </label>
                </div>
                <div className='md:w-4/5'>
                  <input
                    className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    name='lastName'
                    type='text'
                    onChange={this.onChange}
                    defaultValue={lastName}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap -mx-3 mb-10 '>
            <div className='w-full px-3'>
              <div className='md:flex md:items-center'>
                <div className='md:w-1/5'>
                  <label
                    className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                    htmlFor='userName'>
                    UserName
                  </label>
                </div>
                <div className='md:w-4/5'>
                  <input
                    className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    name='userName'
                    type='text'
                    defaultValue={userName}
                    onChange={this.onChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap -mx-3 mb-10'>
            <div className='w-full px-3'>
              <div className='md:flex md:items-center'>
                <div className='md:w-1/5'>
                  <label
                    className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                    htmlFor='email'>
                    Email
                  </label>
                </div>
                <div className='md:w-4/5'>
                  <label
                    className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    type='email'>
                    {this.props.user.email}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap -mx-3 mb-10'>
            <div className='w-full px-3'>
              <div className='md:flex md:items-center'>
                <div className='md:w-1/5'>
                  <label
                    className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                    htmlFor='password'>
                    Change Password
                  </label>
                </div>
                <div className='md:w-4/5'>
                  <input
                    className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                    name='password'
                    type='password'
                    onChange={this.onChange}
                  />
                </div>
              </div>

              <p className='text-gray-600 text-xs italic mb-10'>
                Make it as long and as crazy as you'd like
              </p>
              <div className='flex flex-wrap -mx-3 mb-10'>
                <div className='w-full px-3'>
                  <div className='md:flex md:items-center'>
                    <div className='md:w-1/5'>
                      <label
                        className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                        htmlFor='password2'>
                        Re-enter Password
                      </label>
                    </div>
                    <div className='md:w-4/5'>
                      <input
                        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                        name='password2'
                        type='password'
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-wrap -mx-3 mb-10'>
                <div className='w-full px-3'>
                  <div className='md:flex md:items-center'>
                    <div className='md:w-1/5'>
                      <label
                        className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                        htmlFor='phoneNumber'>
                        Phone No. / Mobile No.
                      </label>
                    </div>
                    <div className='md:w-4/5'>
                      <input
                        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                        name='phoneNumber'
                        type='number'
                        defaultValue={phoneNumber}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='flex flex-wrap -mx-3 mb-10'>
                <div className='w-full px-3'>
                  <div className='md:flex md:items-center'>
                    <div className='md:w-1/5'>
                      <label
                        className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                        htmlFor='whatsAppNumber'>
                        whatsapp No.
                      </label>
                    </div>
                    <div className='md:w-4/5'>
                      <input
                        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                        name='whatsAppNumber'
                        type='number'
                        defaultValue={whatsAppNumber}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex flex-wrap -mx-3 mb-10'>
                <div className='w-full px-3 mb-10'>
                  <div className='md:flex md:items-center'>
                    <div className='md:w-1/5'>
                      <label
                        className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                        htmlFor='city'>
                        City
                      </label>
                    </div>
                    <div className='md:w-4/5'>
                      <input
                        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                        name='city'
                        type='text'
                        defaultValue={city}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                </div>
                <div className='w-full px-3 mb-10'>
                  <div className='md:flex md:items-center'>
                    <div className='md:w-1/5'>
                      <label
                        className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                        htmlFor='state'>
                        State
                      </label>
                    </div>
                    <div className='md:w-4/5'>
                      <input
                        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                        name='state'
                        type='text'
                        defaultValue={state}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                </div>

                <div className='w-full px-3 mb-10'>
                  <div className='md:flex md:items-center'>
                    <div className='md:w-1/5'>
                      <label
                        className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                        htmlFor='pincode'>
                        Pin Code
                      </label>
                    </div>
                    <div className='md:w-4/5'>
                      <input
                        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                        name='pinCode'
                        type='text'
                        defaultValue={pinCode}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                </div>
                <div className='flex justify-end w-full'>
                  <button
                    onSubmit={this.onSubmit}
                    className='bg-white hover:bg-blue-400 hover:text-white text-gray-800 font-semibold text-lg py-2 px-10 border border-gray-400 rounded shadow'>
                    Submit
                  </button>
                  <button
                    onClick={this.checkValue}
                    className='bg-white hover:bg-blue-400 hover:text-white text-gray-800 font-semibold text-lg py-2 px-10 border border-gray-400 rounded shadow'>
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  success: state.auth.success,
  user: state.auth.user.user,
  verified: state.auth.user.verified,
  updatingSuccess: state.dashboard.updatingSuccess,
});

export default connect(mapStateToProps, {
  detailUpdater,
  clearError,
  returnError,
  clickedPaymentButton,
})(withRouter(Detail));
