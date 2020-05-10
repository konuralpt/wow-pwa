import React from 'react';
import { Switch, Route, Redirect,  BrowserRouter as Router} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import Application from '@app-pages/Layout/Application';
import 'react-toastify/dist/ReactToastify.css';


const Layout = () => (
  <Router>
    <Route
      path="/"
      render={props => <Application {...props} />}
    />
  </Router>
);

export default Layout;
