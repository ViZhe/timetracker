
import { Layout } from 'antd';
import React, { Component } from 'react';

import GlobalHeader from '../../components/GlobalHeader';
import SiderMenu from '../../components/SiderMenu';


interface IState {
  collapsed: boolean;
}

class AppLayout extends Component<{}, IState> {
  readonly state: IState = {
    collapsed: false,
  };

  toggle = (): void => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const { children } = this.props;

    return (
      <Layout>
        <SiderMenu collapsed={this.state.collapsed} onCollapse={this.toggle} />
        <Layout>
          <GlobalHeader collapsed={this.state.collapsed} onClickTrigger={this.toggle} />
          {children}
        </Layout>
      </Layout>
    );
  }
}


export default AppLayout;
