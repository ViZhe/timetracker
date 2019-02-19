
import { Icon, Layout } from 'antd';
import React, { Component } from 'react';

import styles from './index.module.css';


interface IProps {
  collapsed: boolean;
  onClickTrigger: () => void;
}

const { Header } = Layout;

class GlobalHeader extends Component<IProps, {}> {
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
