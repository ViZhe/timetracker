
import { Empty, Layout, Menu    } from 'antd';
import React, { Component, lazy, Suspense } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';

import SectionLoading from '../../components/SectionLoading';
import styles from './index.module.css';


interface IState {
  current: 'base';
}

const Base = lazy(() => import('./Base'));
const Notifications = lazy(() => import('./Notifications'));
const { Content } = Layout;

class Settings extends Component<{}, IState> {
  readonly state: IState = {
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
            <Route><Empty style={{ marginTop: 100 }} description={'Page not found'} /></Route>
          </Switch>
        </Suspense>
      </Content>
    );
  }
}


export default Settings;
