
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import styles from './index.module.css';


const NotFound: React.FC = () => (
  <div className={styles.box} >
    <div className={styles.header} >Oops, hmmm!</div>
    <div className={styles.body} >Something went wrong.</div>
    <div className={styles.footer} >
      <Link to="/">
        <Button type="primary" icon="home" size="large">Home</Button>
      </Link>
    </div>
  </div>
);


export default React.memo(NotFound);
