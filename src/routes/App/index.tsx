
import React, { Component } from 'react';
import { Layout } from 'antd';

import styles from './index.module.css';
import SiderMenu from '../../components/SiderMenu';
import GlobalHeader from '../../components/GlobalHeader';


type Props = {
};

type State = {
  collapsed: boolean;
};

const { Content } = Layout;

class App extends Component<Props, State> {
  readonly state: State = {
    collapsed: false,
  };

  toggle = (): void => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout>
        <SiderMenu collapsed={this.state.collapsed} onCollapse={this.toggle} />
        <Layout>
          <GlobalHeader collapsed={this.state.collapsed} onClickTrigger={this.toggle} />
          <Content className={styles.content} >
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}


export default App;
