
import React, { Component, Suspense, lazy } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import { Menu, Layout, Empty } from 'antd';

import styles from './index.module.css';
import SectionLoading from '../../components/SectionLoading';


type Props = {
};

type State = {
};

const Base = lazy(() => import('./Base'));
const Notifications = lazy(() => import('./Notifications'));
const { Content } = Layout;

class Settings extends Component<Props, State> {
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
      <Content className={styles.content}>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="base">
            <Link to="/settings/base">Base Settings</Link>
          </Menu.Item>
          <Menu.Item key="notifications" disabled={true}>
            Notifications
          </Menu.Item>
          <Menu.Item key="nomatch">
            <Link to="/settings/nomatch">Error</Link>
          </Menu.Item>
        </Menu>

        <Suspense fallback={<SectionLoading />}>
          <Switch>
            <Redirect from="/settings" to="/settings/base" exact={true} />
            <Route path="/settings/base" component={Base} exact={true} />
            <Route path="/settings/notifications" component={Notifications} exact={true} />
            <Route><Empty style={{marginTop: 100}} description={'Page not found'} /></Route>
          </Switch>
        </Suspense>
      </Content>
    );
  }
}


export default Settings;
