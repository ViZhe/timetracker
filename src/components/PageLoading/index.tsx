
import { Spin } from 'antd';
import React from 'react';

import styles from './index.module.css';


const PageLoading = () => (
  <div className={styles.wrapper}>
    <Spin size="large" />
  </div>
);


export default React.memo(PageLoading);
