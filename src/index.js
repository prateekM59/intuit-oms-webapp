import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Profile from './Profile';
import SearchOrders from './SearchOrders';
import CreateOrder from './CreateOrder';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

window.oms = {userId: 9};

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/orders" component={SearchOrders} />
            <Route exact path="/orders/create" component={CreateOrder} />
        </div>
    </Router>
);


ReactDOM.render(
    routing, document.getElementById('root')
);
