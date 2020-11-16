import React from "react";
import Home from "./Home";
import './Login.css'
import {GoogleLogin} from "react-google-login";
import {Redirect, BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import ReactDOM from "react-dom";
import Profile from "./Profile";
import SearchOrders from "./SearchOrders";
import CreateOrder from "./CreateOrder";

const clientId =
    '384569587598-o8vombh4p3ssrrsmm1al9adhf8dou0ui.apps.googleusercontent.com';

class Login extends React.Component {

    onSuccess(res) {
        console.log('Login Success: currentUser:', res.profileObj);
        let user = {
            'name': res.profileObj.name,
            'email': res.profileObj.email,
            'phone': 'Placeholder',
            'address': 'Placeholder',
            'type': 'NORMAL'
        };

        fetch('/users/active', {
            method:  'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        }).then(function (response) {
            if (response.ok) {
                console.log("Active user set");
            }
            window.location.href = "/home";
        });
    }

    onFailure(res) {
        console.log('Login failed: res:', res);
        alert(
            'Failed to login'
        );
    }

    render() {
        return (
            <div>
                <Home pageTitle="Login via Google" sidebarDisabled={true}/>
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login"
                    onSuccess={this.onSuccess}
                    onFailure={this.onFailure}
                    cookiePolicy={'single_host_origin'}
                    className="loginButton"
                    isSignedIn={true}
                />
            </div>
        );
    }
}

export default Login;