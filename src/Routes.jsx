import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Inbox from './pages/Inbox/Inbox';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/inbox" component={Inbox} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;