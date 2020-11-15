import React from 'react';
import './Sidebar.css';
import {slide as Menu} from 'react-burger-menu';

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let itemList = [];

        this.props.content.forEach((item)=>{
            if (item.href) {
                itemList.push(<a className="font-weight-bold" href={item.href}>{item.title}</a>);
            } else {
                itemList.push(<section className="font-weight-bold">{item.title}</section>);
            }

            item.subitems.forEach((subItem)=>{
                itemList.push(<a className="pl-4" href={subItem.href}>{subItem.title}</a>);
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
