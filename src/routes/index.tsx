
import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';


const Home = lazy(() => import('./Home'));
const MyReportsProjects = lazy(() => import('./MyReportsProjects'));
const MySettings = lazy(() => import('./MySettings'));
const My = lazy(() => import('./My'));
const NotFound = lazy(() => import('./NotFound'));

const routes = (
  <Switch>
    <Route path="/" component={Home} exact={true} />

    <Switch>
      <Route path="/my/reports/projects"component={MyReportsProjects} />
      <Route path="/my/settings" component={MySettings} />
      <Route path="/my" component={My} />
    </Switch>

    <Route component={NotFound} />
  </Switch>
);


export default routes;
