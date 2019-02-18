
import React, { lazy } from 'react';
import {  Route, Switch } from 'react-router-dom';


const Home = lazy(() => import('./Home'));
const My = lazy(() => import('./My'));
const NotFound = lazy(() => import('./NotFound'));

const routes = (
  <Switch>
    <Route path="/" component={Home} exact={true} />
    <Route path="/my" component={My} />
    <Route component={NotFound} />
  </Switch>
);


export default routes;
