import React from 'react';
import './Sidebar.css';
import {slide as Menu} from 'react-burger-menu';
import {Link} from "react-router-dom";

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.disabled) {
            return "";
        }

        let itemList = [];

        this.props.content.forEach((item, index)=>{
            if (item.href) {
                itemList.push(<Link className="font-weight-bold" key={index} to={item.href}>{item.title}</Link>);
            } else {
                itemList.push(<section className="font-weight-bold" key={index}>{item.title}</section>);
            }

            item.subitems.forEach((subItem, subIndex)=>{
                itemList.push(<Link className="pl-4" to={subItem.href} key={subIndex}>{subItem.title}</Link>);
            });
        });

        return (
            <Menu>
                {itemList}
            </Menu>
        );
    }

}

export default Sidebar;
