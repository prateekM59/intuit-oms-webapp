import './Home.css';
import React from "react";
import Sidebar from "./Sidebar";

class Home extends React.Component {
    render() {
        let title = this.props.pageTitle || "Select from menu";
        return (
            <div className="text-center" id="outer-container">
                <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} content={getContent()} />
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
                    'href': '/'
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
                            'title': 'Create Order',
                            'href': '/orders/create'
                        }
                    ],
                    'href': ''
                }
            ];
        }
    }
}

export default Home;
