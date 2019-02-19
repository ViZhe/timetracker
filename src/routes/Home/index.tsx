
import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.css';


const Home: React.FC = () => (
  <div className={styles.box} >
    <div className={styles.header} >Hello, anonymous!</div>
    <div className={styles.body} >Let's start tracking you time together &#59;&#41;</div>
    <div className={styles.footer} >
      <Link to="/dashboard">
        <Button type="primary" icon="play-circle" size="large">Start</Button>
      </Link>
    </div>
  </div>
);


export default React.memo(Home);
