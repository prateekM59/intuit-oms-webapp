import React from 'react';
import { Table } from 'reactstrap';

class Orders extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let itemList = [];

        this.props.content.forEach((item, index)=>{
            itemList.push(this.tableRow(item, index));
        });

        return (
            <Table responsive>
                <thead>
                <tr>
                    <th>#</th>
                    <th>OrderID</th>
                    <th>Date</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                {itemList}
                </tbody>
            </Table>
        );
    }

    tableRow(item, index) {
        let tableData = [];

        Object.keys(item).filter(key => key !== 'userId').forEach(key =>  {
            tableData.push(<td>{item[key]}</td>)
        });

        return (
            <tr>
                <th scope="row">{index+1}</th>
                {tableData}
            </tr>
        );
    }

}
export default Orders;