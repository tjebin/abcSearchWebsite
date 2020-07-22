import React, { Fragment, useEffect } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import CreateProfile from './components/profileForms/CreateProfile';
import EditProfile from './components/profileForms/EditProfile';
import AddExperience from './components/profileForms/AddExperience';
import AddEducation from './components/profileForms/AddEducation';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';

import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Post';
import Post from './components/post/Post';

if (localStorage.token) {
  // axios.defaults.headers.common['x-auth-token'] = token;
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    // store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <section className="container">
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profiles" component={Profiles} />
              <Route exact path="/profile/:id" component={Profile} />

              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/createProfile" component={CreateProfile} />
              <PrivateRoute exact path="/editProfile" component={EditProfile} />
              <PrivateRoute exact path="/addExperience" component={AddExperience} />
              <PrivateRoute exact path="/addEducation" component={AddEducation} />
              <PrivateRoute exact path="/posts" component={Posts} />
              <PrivateRoute exact path="/posts/:id" component={Post} />

            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  )
}
export default App;
