
import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Spin } from 'antd';

import App from '../../components/App';


type Props = {
};

type State = {
  collapsed: boolean;
};

const Settings = lazy(() => import('./Settings'));

class My extends Component<Props, State> {
  readonly state: State = {
    collapsed: false,
  };

  toggle = (): void => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <App>
        <Suspense fallback={<Spin />}>
          <Switch>
            <Route path="/my" exact={true}>
              <>home</>
            </Route>

            <Route path="/my/reports/projects">
              <>reports projects</>
            </Route>

            <Route path="/my/settings">
              <Settings />
            </Route>

            <Route>
              <>404</>
            </Route>
          </Switch>
        </Suspense>
      </App>
    );
  }
}


export default My;
