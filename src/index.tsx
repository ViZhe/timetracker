
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import './index.css';
import configureStore, { history } from './store';
import PageLoading from './components/PageLoading';
// import * as serviceWorker from './serviceWorker';


const Home = lazy(() => import('./routes/Home'));
const App = lazy(() => import('./routes/App'));
const NotFound = lazy(() => import('./routes/NotFound'));

ReactDOM.render(
  <Provider store={configureStore({})}>
    <ConnectedRouter history={history}>
      <Suspense fallback={<PageLoading />}>
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/my" component={App} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
