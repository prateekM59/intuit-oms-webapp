import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Login from './Login';
import Logout from './Logout';
import Profile from './Profile';
import SearchOrders from './SearchOrders';
import CreateOrder from './CreateOrder';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom'

const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/createorders" component={CreateOrder} />
            <Route exact path="/orders" component={SearchOrders} />
            <Route exact path="/logout" component={Logout} />
        </Switch>
    </Router>

);

ReactDOM.render(
    routing, document.getElementById('root')
);
