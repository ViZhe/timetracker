
import React from 'react';
import { Spin } from 'antd';

import styles from './index.module.css';


const SectionLoading = () => (
  <div className={styles.wrapper}>
    <Spin />
  </div>
);


export default React.memo(SectionLoading);
