
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import './index.css';
import configureStore, { history } from './store';
import Home from './routes/Home';
// import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <Provider store={configureStore({})}>
    <ConnectedRouter history={history}>
      <>
        <Switch>
          <Route path="/" component={Home} exact={true} />
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
