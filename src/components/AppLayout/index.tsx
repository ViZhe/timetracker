
import { Layout } from 'antd';
import React, { useState } from 'react';

import GlobalHeader from '../../components/GlobalHeader';
import SiderMenu from '../../components/SiderMenu';


const AppLayout: React.FC = ({ children }) => {
  const [isCollapsed, setCollapsed] = useState<boolean>(false);

  const toggleCollapsed = () => setCollapsed(!isCollapsed);

  return (
    <Layout>
      <SiderMenu collapsed={isCollapsed} onCollapse={toggleCollapsed} />
      <Layout>
        <GlobalHeader collapsed={isCollapsed} onClickTrigger={toggleCollapsed} />
        {children}
      </Layout>
    </Layout>
  );
};


export default AppLayout;
