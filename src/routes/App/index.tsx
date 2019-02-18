
import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Empty } from 'antd';

import AppLayout from '../../components/App';
import SectionLoading from '../../components/SectionLoading';


const Dashboard = lazy(() => import('../Dashboard'));
const Reports = lazy(() => import('../Reports'));
const Settings = lazy(() => import('../Settings'));

const App: React.FC = () => (
  <AppLayout>
    <Suspense fallback={<SectionLoading />}>
      <Switch>
        <Route path="/dashboard" component={Dashboard} exact={true} />
        <Route path="/reports" component={Reports} />
        <Route path="/settings" component={Settings} />
        <Route><Empty style={{marginTop: '10rem'}} description={'Page not found'} /></Route>
      </Switch>
    </Suspense>
  </AppLayout>
);


export default App;
