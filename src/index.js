import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Profile from './Profile';
import R2 from './R2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

window.oms = {userId: 9};

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/orders" component={R2} />
        </div>
    </Router>
);


ReactDOM.render(
    routing, document.getElementById('root')
);
