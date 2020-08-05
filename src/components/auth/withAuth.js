import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
export default function withAuth(ComponentToProtect) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        redirect: false,
      };

      this._isMounted = false;
    }

    async authentication() {
      const value = localStorage.getItem('token');

      const myHeaders = new Headers();
      myHeaders.append('end-auth', `${value}`);

      console.log(myHeaders);
      await fetch('/api/users/auth', { method: 'GET', headers: myHeaders })
        .then((res) => {
          if (res.status === 200) {
            this.setState({ loading: false });
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch((err) => {
          console.error(err);
          this.setState({ loading: false, redirect: true });
        });
    }

    componentDidMount() {
      this._isMounted = true;
      this._isMounted && this.authentication();
    }

    componentWillUnmount() {
      this._isMounted = false;
    }
    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        return <Redirect to='/login' />;
      }
      return <ComponentToProtect {...this.props} />;
    }
  };
}
