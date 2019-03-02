
import { Spin } from 'antd';
import React from 'react';

import styles from './index.module.css';


const SectionLoading: React.FC = () => (
  <div className={styles.wrapper}>
    <Spin />
  </div>
);


export default React.memo(SectionLoading);
