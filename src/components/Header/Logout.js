import React, { Component, Fragment } from 'react';

import { logout } from '../../actions';

export class Logout extends Component {
  render() {
    return (
      <div>
        <Fragment>
          <a onClick={this.props.logout}>Logout</a>
        </Fragment>
      </div>
    );
  }
}

export default Logout;
