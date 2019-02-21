
import { Button } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { userSelectors } from '../../features/user';
import styles from './index.module.css';


interface IBaseProps {
  user: {
    name: string | null;
  };
}


const mapStateToProps = (state: any) => ({
  user: userSelectors.getUser(state.user),
});

const Home: React.FC<IBaseProps> = ({ user }) => (
  <div className={styles.box} >
    <div className={styles.header} >Hello, {user.name || 'anonymous'}!</div>
    <div className={styles.body} >Let's start tracking you time together &#59;&#41;</div>
    <div className={styles.footer} >
      <Link to="/dashboard">
        <Button type="primary" icon="play-circle" size="large">Start</Button>
      </Link>
    </div>
  </div>
);


export default React.memo(connect(mapStateToProps)(Home));
