import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { find } from 'lodash';
import { Layout, Menu } from 'antd';
import Routes from '../../Route';


const LayoutHeader = () => {
  const { Header } = Layout;
  const routes = Routes.Routes;
  const redirectPath = find(routes, { path: '/wow' }) ? '/wow' : routes[0].path;

  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      Henlo
    </Header>
  );
};

export default LayoutHeader;
