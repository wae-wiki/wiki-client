import React from 'react';
import routers from './config/router.config.js';
import { Switch } from 'react-router'
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

const App: React.FC<any> = props => {
  return (
    <HashRouter>
      <Switch>
        {renderRoutes(routers)}
      </Switch>
    </HashRouter>

  )
};

export default App;
