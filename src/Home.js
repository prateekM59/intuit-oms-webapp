import './App.css';
import React from "react";
import Sidebar from "./Sidebar";

const Home = (props) => {
    return (
        <div className="App" id="outer-container">
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} content={getContent()} />
            <div id="page-wrap">
                <h1>Order Management System</h1>
                <h4>Open sidebar for options!</h4>
            </div>
        </div>
    );

    function getContent() {
        return [
            {
                'title': 'Profiles',
                'subitems': [
                    {
                        'title': 'My Profiles',
                        'href': '/myprofile'
                    },
                    {
                        'title': 'All Profiles',
                        'href': '/allprofiles'
                    }
                ],
                'href': '/profiles'
            },
            {
                'title': 'Orders',
                'subitems': [
                    {
                        'title': 'My Orders',
                        'href': '/myorders'
                    },
                    {
                        'title': 'All Orders',
                        'href': '/allorders'
                    }
                ],
                'href': '/orders'
            }
        ];
    }
};

export default Home;
