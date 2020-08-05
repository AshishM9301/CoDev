import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';

import { logout } from '../../actions';
import LOGOwithoutlaptop from '../../images/LOGOwithoutlaptopborder.png';

export const browserHistory = createBrowserHistory();
export class Header extends Component {
  state = {
    name: '',
    userId: null,
    role: 0,
    nameChange: false,
  };

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logout();
  };

  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  componentDidUpdate() {
    const { isLogin } = this.props.auth;
    if (!this.state.nameChange) {
      if (isLogin) {
        this.setState({
          name: this.props.user.user.firstname,
          userId: this.props.user.user.userId,
          role: this.props.user.user.role,
          nameChange: true,
        });
      }
    }
  }

  adminLink = () => {
    return (
      <div>
        <Link
          to='/user'
          className='mr-3 bg-transparent hover:bg-blue-500 text-gray-200 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
          Users
        </Link>
        <Link
          to='/course/upload'
          className='mr-3 bg-transparent hover:bg-blue-500 text-gray-200 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
          Upload
        </Link>
      </div>
    );
  };

  render() {
    const { isLogin, isAdmin } = this.props.auth;
    const { name } = this.state;

    const loginLinks = (
      <div>
        <div className='flex justify-center'>
          <Link
            to='/dashboard'
            className='mr-3 bg-transparent hover:bg-blue-500 text-gray-200 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
            {isLogin ? `Hi ${name} !` : ''}
          </Link>
          <Link
            onClick={this.onLogoutClick}
            to='/logout'
            className='mr-3 bg-transparent hover:bg-blue-500 text-gray-200 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
            Log Out
          </Link>
        </div>
      </div>
    );

    const guestLinks = (
      <div className='lg:mt-0'>
        <div className='flex justify-center'>
          <Link
            to='/register'
            className='mr-3 bg-transparent hover:bg-blue-500 text-gray-200 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
            Register
          </Link>
          <Link
            to='/login'
            className='mr-3 bg-transparent hover:bg-blue-500 text-gray-200 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>
            Login
          </Link>
        </div>
      </div>
    );
    return (
      <div className='border-b border-blue-400 bg-gray-800 text-gray-100'>
        <div className='md:flex sm:block p-4 justify-between container mx-auto'>
          <Link to='/' className='mr-3 text-center flex'>
            <div className='w-16'>
              <img src={LOGOwithoutlaptop} alt='logo' className=' max-w-full' />
            </div>
            <h4 className='font-semibold text-xl'>CO-Development</h4>
          </Link>
          <div className='flex'>
            {isAdmin ? this.adminLink() : null}
            {isLogin ? loginLinks : guestLinks}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.auth.user,
  msg: state.msg,
});

export default connect(mapStateToProps, { logout })(Header);
