import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import withAuth from './auth/withAuth';
import Header from './Header/Header';
import Login from './Header/Login';
import Register from './Header/Register';
import Footer from './Footer/Footer';
import DashBoard from './DashBoard/DashBoard';
import Homepage from './Homepage/Homepage';
import UploadCoursePage from './UploadCourse/UploadCoursePage';
import NotFound from './404/NotFound';
import First_Plan from './Pages/First_Plan';
import RegisteredUser from './Admin/RegisteredUser';
import { store } from '../index';
import { loadUser } from '../actions';
import UploadBlogPage from './Blog/Upload Page/UploadBlogPage';
import ShowBlogPage from './Blog/Pages/Show Page/ShowBlogPage';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/register' exact component={Register} />
          <Route path='/login' exact component={Login} />
          <Route exact path='/dashboard' component={withAuth(DashBoard)} />
          <Route exact path='/plan' component={First_Plan} />
          <Route exact path='/user' component={withAuth(RegisteredUser)} />
          <Route
            path='/course/upload'
            exact
            component={withAuth(UploadCoursePage)}
          />
          <Route exact path='/blog/upload' component={UploadBlogPage} />
          <Route exact path='/blog' component={ShowBlogPage} />
          <Route path='*' component={NotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
