

import React, { Component, Suspense, lazy } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import { Menu, Layout, Empty } from 'antd';

import styles from './index.module.css';
import SectionLoading from '../../components/SectionLoading';


type Props = {
};

type State = {
  current: 'projects';
};

const { Content } = Layout;

class Reports extends Component<Props, State> {
  readonly state: State = {
    current: 'projects',
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
          <Menu.Item key="projects">
            <Link to="/reports/projects">Projects</Link>
          </Menu.Item>
          <Menu.Item key="team" disabled={true}>
            Team
          </Menu.Item>
          <Menu.Item key="nomatch">
            <Link to="/reports/nomatch">Error</Link>
          </Menu.Item>
        </Menu>

        <Suspense fallback={<SectionLoading />}>
          <Switch>
            <Redirect from="/reports" to="/reports/projects" exact={true} />
            <Route path="/reports/projects" component={Empty} exact={true} />
            <Route><Empty style={{marginTop: 100}} description={'Page not found'} /></Route>
          </Switch>
        </Suspense>
      </Content>
    );
  }
}


export default Reports;
