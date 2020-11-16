import './Home.css';
import React from "react";
import Sidebar from "./Sidebar";

class Home extends React.Component {

    render() {
        let title = this.props.pageTitle || "Select from menu";
        return (
            <div className="text-center" id="outer-container">
                <Sidebar disabled={this.props.sidebarDisabled} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} content={getContent()} />
                <div id="page-wrap">
                    <h1>Order Management System</h1>
                    <h4>{title}</h4>
                </div>
            </div>
        );

        function getContent() {
            return [
                {
                    'title': 'Home',
                    'subitems': [
                    ],
                    'href': '/home'
                },
                {
                    'title': 'Profiles',
                    'subitems': [
                        {
                            'title': 'My Profile',
                            'href': '/profile'
                        }
                    ],
                    'href': ''
                },
                {
                    'title': 'Orders',
                    'subitems': [
                        {
                            'title': 'My Orders',
                            'href': '/orders'
                        },
                        {
                            'title': 'Create Orders',
                            'href': '/createorders'
                        }
                    ],
                    'href': ''
                },
                {
                    'title': 'Logout',
                    'subitems': [
                    ],
                    'href': '/logout'
                },
            ];
        }
    }
}

export default Home;
