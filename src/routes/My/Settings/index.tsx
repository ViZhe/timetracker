
import React, { Component, Suspense, lazy } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { Menu, Layout, Spin } from 'antd';

import styles from './index.module.css';


type Props = {
};

type State = {
};

const Base = lazy(() => import('./Base'));
const Notification = lazy(() => import('./Notification'));
const { Content } = Layout;

class MySettings extends Component<Props, State> {
  readonly state = {
    current: 'base',
  };

  handleClick = (e: any) => {
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Content className={styles.content} >
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="base">
            <Link to="/my/settings/base">Base Settings</Link>
          </Menu.Item>
          <Menu.Item key="notification">
            <Link to="/my/settings/notification">Notifications</Link>
          </Menu.Item>
          <Menu.Item key="customize" disabled={true}>
            Customize
          </Menu.Item>
        </Menu>
        <Suspense fallback={<Spin />}>
          <Switch>
            <Route path="/my/settings/base">
              <Base />
            </Route>

            <Route path="/my/settings/notification">
              <Notification />
            </Route>

            <Route>
              <>3</>
            </Route>
          </Switch>
        </Suspense>
      </Content>
    );
  }
}


export default MySettings;
