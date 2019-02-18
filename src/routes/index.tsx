
import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';


const Home = lazy(() => import('./Home'));
const App = lazy(() => import('./App'));
const NotFound = lazy(() => import('./NotFound'));

const routes = (
  <Switch>
    <Route path="/" component={Home} exact={true} />
    <Route path="/" component={App} />
    <Route component={NotFound} />
  </Switch>
);


export default routes;
