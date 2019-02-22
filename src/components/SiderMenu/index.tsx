
import { Icon, Layout, Menu } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.css';


interface IProps {
  collapsed: boolean;
  onCollapse: () => void;
}

const { Sider } = Layout;

class SiderMenu extends Component<IProps, {}> {
  render() {
    const { collapsed, onCollapse }: IProps = this.props;

    return (
      <Sider
        className={styles.sider}
        collapsible={true}
        collapsed={collapsed}
        onCollapse={onCollapse}
      >
        <Link to="/">
          <div className={styles.logo}>
            <Icon type="clock-circle" className={styles.logoIcon} />
            <span className={styles.logoName}>TimeTracker</span>
          </div>
        </Link>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['time']}>
          <Menu.Item key="time">
            <Link to="/time">
              <Icon type="home" />
              <span>Home</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="reports">
            <Link to="/reports">
              <Icon type="pie-chart" />
              <span>Reports</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="settings">
            <Link to="/settings">
              <Icon type="setting" />
              <span>Settings</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="notmatch">
            <Link to="/notmatch">
              <Icon type="lock" />
              <span>Error</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}


export default SiderMenu;
