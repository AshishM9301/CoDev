import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  clickedPaymentButton,
  clickedProfileButton,
  clickedProgressButton,
} from '../../actions/dashboardAction';

class AllProfile extends Component {
  componentDidMount() {
    this.props.clickedProfileButton('GET_PROFILE');
  }

  componentDidUpdate() {
    if (this.props.updatingSuccess) {
      this.props.clickedPaymentButton('GET_PAYMENT');
    }
  }

  renderProfileButton = () => {
    this.props.clickedProfileButton('GET_PROFILE');
  };

  renderPaymentButton = () => {
    this.props.clickedPaymentButton('GET_PAYMENT');
  };

  renderProgressButton = () => {
    this.props.clickedProgressButton('GET_PROGRESS');
  };

  render() {
    return (
      <div>
        <div className='flex flex-col xl:text-right text-center  xl:mb-0 mb-10 font-sanchez xl:text-2xl'>
          <div className='xl:w-1/2'>
            <button
              onClick={this.renderProgressButton}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-3'>
              Progress
            </button>
          </div>
          <div className='xl:w-1/2'>
            <button
              onClick={this.renderProfileButton}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-3'>
              Profile
            </button>
          </div>
          <div className='xl:w-1/2'>
            <button
              onClick={this.renderPaymentButton}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              Payment Details
            </button>
          </div>
        </div>
      </div>
    );
  }
}

AllProfile.propTypes = {
  clickedPaymentButton: PropTypes.func.isRequired,
  clickedProfileButton: PropTypes.func.isRequired,
  clickedProgressButton: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  message: state.msg,
  error: state.error,
  success: state.auth.success,
  updatingSuccess: state.dashboard.updatingSuccess,
});
export default connect(mapStateToProps, {
  clickedPaymentButton,
  clickedProfileButton,
  clickedProgressButton,
})(AllProfile);
