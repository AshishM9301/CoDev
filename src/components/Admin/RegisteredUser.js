import React, { Component } from 'react';
import { displayUser, activateUser } from '../../actions';
import { connect } from 'react-redux';
import Grid from './Sections/Grid';
import NotFound from '../404/NotFound';

class RegisteredUser extends Component {
  state = {
    isAdmin: null,
    success: false,
    msg: null,
    users: [],
    change: false,
    LoadingDetails: true,
  };

  toggle = () => {
    // Clear Error

    this.setState({
      msg: null,
    });
  };
  async componentDidUpdate() {
    const value = localStorage.getItem('token');

    const myHeaders = new Headers();
    myHeaders.append('end-auth', `${value}`);

    const { isAdmin } = this.state;
    if (!this.state.change) {
      if (isAdmin) {
        await fetch('/api/users', { method: 'GET', headers: myHeaders })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              this.setState({
                success: true,
                users: data.RegisteredUser,
                change: true,
                LoadingDetails: false,
                msg: data.message,
              });
            }
          })
          .catch((err) => {});
      }
    }
  }

  async componentDidMount() {
    const value = localStorage.getItem('token');

    const myHeaders = new Headers();
    myHeaders.append('end-auth', `${value}`);

    console.log(this.state);
    await fetch('/api/users/auth', { method: 'GET', headers: myHeaders })
      .then((res) => res.json())
      .then((data) => {
        if (data.isAuth) {
          this.setState({
            isAdmin: data.user.isAdmin,
            success: true,
            msg: data.message,
          });
        } else {
          this.setState({
            isAdmin: false,
            success: false,
            msg: data.errorMessage,
          });
        }
      })
      .catch((err) => {});
  }

  handleClick = (user) => {
    console.log(user);
    const { firstName, email } = user;
    console.log(this.props);
    this.props.activateUser({ firstName, email });
  };

  render() {
    const { users, LoadingDetails } = this.state;

    const renderUsers = users?.map((user, _id) => {
      return (
        <div key={_id}>
          <Grid
            firstName={user.firstName}
            lastName={user.lastName}
            email={user.email}
            role={user.role}
            userName={user.userName}
            phoneNumber={user.phoneNumber}
            whatsAppNumber={user.phoneNumber}
            city={user.city}
            state={user.city}
            pinCode={user.pinCode}
            keyValue={_id}
          />
        </div>
      );
    });

    if (!this.props.isAuth) {
      return <NotFound />;
    }
    const { success } = this.state;
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
        <div className='text-6xl font-ubuntu bg-gray-800 py-64 text-gray-100 text-center'>
          Registered User
        </div>
        <div className='-mt-32 mb-6 rounded border-2 border-gray-200 container mx-auto bg-white p-4 shadow'>
          {!LoadingDetails ? renderUsers : <div>Loading..</div>}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  isAdmin: state.auth.isAdmin,
  isAuth: state.auth.isLogin,
  users: state.dashboard.users,
  isLoading: state.dashboard.isLoading,
});

export default connect(mapStateToProps, { displayUser, activateUser })(
  RegisteredUser
);
