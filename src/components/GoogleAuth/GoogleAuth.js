import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { signIn, signOut } from '../../actions';

export class GoogleAuth extends Component {
  componentDidMount() {
    console.log(this.props);
    window.gapi.load('client:auth2', () => {
      console.log('Loaded GAPI');
      window.gapi.client
        .init({
          clientId:
            '559727615856-1akuiiknf4ecb5moqlvvti8b9h5l8m1j.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          console.log('Initialise Gapi');
          this.auth = window.gapi.auth2.getAuthInstance();
          console.log(this.auth);
          this.onAuthChange(this.auth.isSignedIn.get());
          console.log(this.onAuthChange);
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    console.log(this.props);
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
      console.log(this.props);
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    console.log(this.props);
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <div>
          <button
            onClick={this.onSignOutClick}
            className='ui red google button'>
            <i className='google icon' />
            Sign Out
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.onSignInClick} className='ui red google button'>
            <i className='google icon' />
            Sign In
          </button>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const propTypes = {
  signIn: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
