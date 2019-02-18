
import React, { Component } from 'react';
import { Layout } from 'antd';

import SiderMenu from '../../components/SiderMenu';
import GlobalHeader from '../../components/GlobalHeader';


type Props = {
};

type State = {
  collapsed: boolean;
};

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


export default App;
