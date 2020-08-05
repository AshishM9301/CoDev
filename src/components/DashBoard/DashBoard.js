import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Payment from './Payment';
import Detail from './Detail';
import AllProfile from './AllProfile';
import { connect } from 'react-redux';
import NotFound from '../404/NotFound';
import { Verify } from '../Verify/Verify';
import { otpSend, verify } from '../../actions';
import { Progress } from './Progress';
export class DashBoard extends Component {
  profileRender() {
    return (
      <div className='flex flex-col xl:flex-row'>
        <div className='xl:w-2/5 md:w-full flex flex-col xl:h-screen'>
          <div className='block'>
            <h2 className='xl:text-4xl text-2xl text-center xl:text-left font-spartan block'>
              Dashboard
            </h2>
          </div>
          <div className='h-20'></div>
          <div className='mr-20'>
            <AllProfile />
          </div>
        </div>

        <div className='xl:w-3/5 w-full'>
          {this.props.button.id === 'GET_PROFILE' && <Detail />}
          {this.props.button.id === 'GET_PROGRESS' && <Progress />}
          {this.props.button.id === 'GET_PAYMENT' && <Payment />}
        </div>
      </div>
    );
  }

  verification = () => {
    this.props.otpSend();
  };

  render() {
    if (!this.props.isAuth) {
      return <NotFound />;
    }
    if (!this.props.isVerified) {
      this.props.otpSend();
      return (
        <div>
          <Verify {...this.props} />
        </div>
      );
    }
    return (
      <div>
        <div className='p-6 '>{this.profileRender()}</div>
        <div className='relative xl:mt-20'>
          <svg
            viewBox='0 0 200 200'
            className='absolute bottom-0 left-0 xl:w-1/2 w-1/4 -ml-40 -mt-20'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fill='#bee3f8'
              d='M26,-38.9C32.2,-25.6,35,-16.2,43.7,-2.4C52.4,11.3,67.1,29.2,66.4,45.7C65.6,62.1,49.5,77,34.4,73.2C19.3,69.4,5.2,47,-9.5,37C-24.2,26.9,-39.4,29.2,-48.5,23.3C-57.6,17.3,-60.5,3.1,-61.1,-13.8C-61.8,-30.7,-60.1,-50.1,-49.5,-62.6C-38.9,-75.1,-19.5,-80.5,-4.8,-74.8C9.8,-69,19.7,-52.1,26,-38.9Z'
              transform='translate(100 100)'
            />
          </svg>
          <div className='absolute bottom-0 z-50 xl:w-1/2 w-1/4'>
            <lottie-player
              src='https://assets8.lottiefiles.com/packages/lf20_IrrfGz.json'
              background='transparent'
              speed={1}
              loop
              autoPlay
            />
          </div>
        </div>
      </div>
    );
  }
}

DashBoard.propTypes = {
  button: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  button: state.dashboard,
  isAuth: state.auth.isLogin,
  isVerified: state.auth.verified,
  user: state.auth.user,
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps, { otpSend, verify })(DashBoard);
