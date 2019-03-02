
import { Icon, Layout } from 'antd';
import React from 'react';

import styles from './index.module.css';


interface IProps {
  collapsed: boolean;
  onClickTrigger: () => void;
}


const { Header } = Layout;

const GlobalHeader: React.FC<IProps> = ({ collapsed, onClickTrigger }) => (
  <Header className={styles.header}>
    <Icon
      className={styles.trigger}
      type={collapsed ? 'menu-unfold' : 'menu-fold'}
      onClick={onClickTrigger}
    />
  </Header>
);


export default GlobalHeader;
