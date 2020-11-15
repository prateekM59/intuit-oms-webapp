import React from 'react';
import {slide as Menu} from 'react-burger-menu';

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            iconSize: this.props.iconSize ? this.props.iconSize : "xsmall"
        };
    }

    render() {
        let itemList = [];

        this.props.content.forEach((item)=>{
            itemList.push(<a className="menu-item" href={item.href}>{item.title}</a>);
            item.subitems.forEach((subItem)=>{
                itemList.push(<a className="menu-sub-item" href={subItem.href}>{subItem.title}</a>);
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
