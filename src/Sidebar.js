import React from 'react';
import './Sidebar.css';
import {slide as Menu} from 'react-burger-menu';

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
                itemList.push(<a className="font-weight-bold" key={index} href={item.href}>{item.title}</a>);
            } else {
                itemList.push(<section className="font-weight-bold" key={index}>{item.title}</section>);
            }

            item.subitems.forEach((subItem, subIndex)=>{
                itemList.push(<a className="pl-4" href={subItem.href} key={subIndex}>{subItem.title}</a>);
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
