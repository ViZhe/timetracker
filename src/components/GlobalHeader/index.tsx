
import React, { Component } from 'react';
import { Layout, Icon } from 'antd';

import styles from './index.module.css';


type Props = {
  collapsed: boolean;
  onClickTrigger: () => void;
};

const { Header } = Layout;

class GlobalHeader extends Component<Props> {
  render() {
    const { collapsed, onClickTrigger } = this.props;
    return (
      <Header className={styles.header}>
        <Icon
          className={styles.trigger}
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={onClickTrigger}
        />
      </Header>
    );
  }
}


export default GlobalHeader;
