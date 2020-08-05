import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

export class Progress extends Component {
  state = {
    firstname: '',
    role: 2,
    changes: false,
    msg: null,
    attendance: null,
    success: false,
  };

  async componentDidMount() {
    const value = localStorage.getItem('token');

    const myHeaders = new Headers();
    myHeaders.append('end-auth', `${value}`);

    console.log(this.state);
    await fetch('/api/users/auth', { method: 'GET', headers: myHeaders })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.isAuth) {
          this.setState({
            firstname: data.user.firstname,
            role: data.user.role,
            attendance: data.user.attendanceNo,
          });
        }
      });
  }
  toggle = () => {
    // Clear Error

    this.setState({
      msg: null,
    });
  };
  Attendance = async () => {
    await fetch('/api/users/attendance')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          this.setState({
            msg: data.message,
            success: true,
          });
        } else {
          this.setState({
            msg: data.errorMessage,
            success: true,
          });
        }
      });
  };

  render() {
    const { firstname, role, success, attendance } = this.state;

    const payed = (
      <div className='text-2xl text-center'>
        Classes will start on Date : <div className='text-red-500'>30-July</div>
      </div>
    );

    const attendanceButton = (
      <div className='text-3xl mx-auto flex justify-center mt-6'>
        <button
          onClick={this.Attendance}
          className='border border-gray-300 shadow-xl bg-white px-6 py-2 rounded '>
          Attendance
        </button>
        <div className='px-6 py-2'> : {(attendance / 30) * 100} %</div>
      </div>
    );

    const notPayed = (
      <div className='text-3xl text-center'>
        Please Do the Payment for the Course You want to Enroll
      </div>
    );

    return (
      <div>
        {this.state.msg ? (
          <div className='absolute right-0'>
            <div className='flex justify-end '>
              <div className='px-4  py-2'>
                <div
                  className={`${
                    success
                      ? 'bg-green-100 border border-green-400 text-green-700'
                      : 'bg-red-100 border border-red-400 text-red-700'
                  } px-4 py-3 rounded relative`}
                  role='alert'>
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
        <div className='min-h-71'>
          <div className='text-5xl border-b-2 border-orange-400 mb-10'>
            Hi, {firstname}
          </div>
          <div>{role === 3 ? payed : notPayed}</div>
          <div>{role === 99 ? attendanceButton : null}</div>
        </div>
      </div>
    );
  }
}

Progress.propType = {
  firstname: PropTypes.object.isRequired,
  role: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, null)(withRouter(Progress));
