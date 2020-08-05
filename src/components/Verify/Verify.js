import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { otpSend, verify } from '../../actions';
import { browserHistory } from '../Header/Header';

export class Verify extends Component {
  state = {
    verifyNo: '',
  };

  componentDidUpdate = () => {
    const { verified } = this.props;

    if (verified) {
      this.props.history.push('/dashboard');
    }
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { verifyNo } = this.state;
    const { email } = this.props.user.user;

    const verifyData = { verifyNo, email };

    this.props.verify(verifyData);
    if (this.props.verified) {
      browserHistory.push('/');
    }
  };

  resend = (e) => {
    e.preventDefault();
    this.props.otpSend();
  };

  render() {
    return (
      <div>
        <div className='m-6 p-6 container mx-auto h-screen'>
          <h1 className='xl:text-6xl text-center md:text-4xl sm:text-2xl '>
            Verify your account
          </h1>
          <p className='m-4 text-center text-gray-600 xl:text-xl md:text-lg'>
            A otp is given to your provided mail to :
          </p>
          <form onSubmit={this.onSubmit}>
            <input
              name='verifyNo'
              onChange={this.onChange}
              className='bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-1/2 mx-auto m-6 p-4 appearance-none leading-normal'
            />
            <div className='flex justify-around'>
              <div className='w-2/4'></div>
              <div className='w-1/4 mx-auto'>
                <div className='flex justify-end'>
                  <button
                    onClick={this.resend}
                    className='bg-red-600 hover:bg-red-700 flex justify-end text-gray-200 font-semibold py-2 px-4 border border-gray-300 rounded shadow-lg'>
                    Resend OTP
                  </button>
                </div>
              </div>
              <div className='w-1/4 ml-10'>
                <div className='flex justify-start'>
                  <button
                    onSubmit={this.onSubmit}
                    className='bg-red-600 hover:bg-red-700 flex justify-end text-gray-200 font-semibold py-2 px-4 border border-gray-300 rounded shadow-lg'>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Verify.propTypes = {
  otpSend: PropTypes.func.isRequired,
  verify: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user.user,
  verified: state.auth.verified,
});

export default connect(mapStateToProps, { otpSend, verify })(
  withRouter(Verify)
);
