import React from 'react';
import { GoogleLogout } from 'react-google-login';
import './Login.css';
import Home from './Home';

const clientId =
    '384569587598-o8vombh4p3ssrrsmm1al9adhf8dou0ui.apps.googleusercontent.com';

function Logout() {
    const onSuccess = () => {
        fetch('/users/active', {
            method:  'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            if (response.ok) {
                console.log("Active user deleted");
                alert('Logout made successfully');
            }
            window.location.href = "/";
        });
    };

    return (
        <div>
            <Home pageTitle="Log out from Google"/>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
                className="loginButton"
            />
        </div>
    );
}

export default Logout;