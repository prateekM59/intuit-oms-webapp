import React from 'react';
import Home from './Home';
import {Button, Form, FormGroup, Label, FormFeedback, Input} from 'reactstrap';

class CreateOrder extends React.Component {

    constructor(props) {
        super(props);
        this.handleProductChange = this.handleProductChange.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            productIndex: -1,
            quantity: 0
        };
        this.url = '/orders/';
        this.userId = -1;

        // hardcoded for now, should be fetched from service on selection
        this.productToPriceMap = [
            {
                'name': 'CHAIR',
                'price': 100.00
            },
            {
                'name': 'TABLE',
                'price': 1000.50
            }, {
                'name': 'SOFA',
                'price': 500.30
            }
        ]

    }

    componentDidMount() {
        let that = this;
        fetch('/users/active')
            .then(function (response) {
                if (!response.ok) {
                    window.location.href = "/";
                }
                return response.json();
            })
            .then(function (data) {
                that.userId = data.id;
            });
    }

    handleQuantityChange(event) {
        let newState = this.state;
        newState['quantity'] = event.target.value;
        this.setState(newState);
    }

    handleProductChange(event) {
        let newState = this.state;
        newState['productIndex'] = parseInt(event.target.value);
        this.setState(newState);
    }

    price() {
        let productIndex = this.state.productIndex;
        if (productIndex >= 0) {
            return this.productToPriceMap[productIndex].price * this.state.quantity;
        }
        return 0;
    }

    handleSubmit(event) {
        event.preventDefault();
        let that = this;
        let postBody = {
            'product': this.productToPriceMap[this.state.productIndex].name,
            'quantity': parseInt(this.state.quantity),
            'userId': this.userId
        };

        fetch(this.url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postBody),
        })
            .then(function (response) {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                window.alert("Order Success!")
            })
            .catch(error => window.alert("Error in order!"))
            .finally(function () {
                that.setState({
                    productIndex: -1,
                    quantity: 0
                });
            })
    }

    render() {
        let price = this.price();
        let quantityInvalid = this.state.quantity < 0;
        let validProductNotSelected = this.state.productIndex < 0;
        let orderEnabled =  !validProductNotSelected && !quantityInvalid;

        return (
            <div>
                <Home pageTitle="Create Order"/>
                <div className="p-3 border m-3">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="product">Select Product</Label>
                            <Input type="select" name="product" id="product" onChange={this.handleProductChange}>
                                <option selected={validProductNotSelected} value="-1">SELECT PRODUCT</option>
                                <option value="0">CHAIR</option>
                                <option value="1">TABLE</option>
                                <option value="2">SOFA</option>
                            </Input>
                        </FormGroup>

                        <FormGroup>
                            <Label for="quantity">Quantity</Label>
                            <Input invalid={quantityInvalid} type="number" id="quantity" name="quantity" value={this.state.quantity} onChange={this.handleQuantityChange}/>
                            <FormFeedback>Quantity should be more than 0</FormFeedback>
                        </FormGroup>

                        <FormGroup>
                            <Label for="price">Total Price</Label>
                            <Input type="text" id="price" name="price" disabled value={price}/>
                        </FormGroup>

                        <Button disabled={!orderEnabled}>Order</Button>
                    </Form>
                </div>
            </div>
        );
    }

}

export default CreateOrder;