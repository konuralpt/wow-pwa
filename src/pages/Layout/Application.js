import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { find } from 'lodash';
import { Layout, Menu } from 'antd';
import Routes from './Route';
import { Header, Footer, Sider } from './components';


const Application = () => {
  const { Content } = Layout;
  const routes = Routes.Routes;
  const redirectPath = find(routes, { path: '/wow' }) ? '/wow' : routes[0].path;

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)} />
      <Layout className="site-layout">
        <Header />
        <Content style={{ padding: '0 50px' }}>
          <Switch>
            {routes.map(route => (route.component ?
              (
                <Route
                  key={route.name}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={propsParam => (
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    <route.component {...propsParam} />
                  )}
                />
              ) : null))}
            <Redirect from="/" to={redirectPath} />
          </Switch>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default Application;
