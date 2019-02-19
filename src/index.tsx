
import { ConnectedRouter } from 'connected-react-router';
import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import PageLoading from './components/PageLoading';
import './index.css';
import routes from './routes';
import { configureStore, history } from './store';
// import * as serviceWorker from './serviceWorker';


render(
  <Provider store={configureStore()}>
    <ConnectedRouter history={history}>
      <Suspense fallback={<PageLoading />}>
        {routes}
      </Suspense>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
