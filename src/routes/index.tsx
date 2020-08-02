import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
    // () => (); == () => { return (); };
    // Switch garante que apanas uma rota vai ser apresentada por vez
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/repository/:name+" component={Repository} />
    </Switch>
);

export default Routes;
