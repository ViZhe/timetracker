
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import './index.css';
import configureStore, { history } from './store';
import routes from './routes';
import PageLoading from './components/PageLoading';
// import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <Provider store={configureStore({})}>
    <ConnectedRouter history={history}>
      <Suspense fallback={<PageLoading />}>
        {routes}
      </Suspense>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
