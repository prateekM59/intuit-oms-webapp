import React from 'react';
import Home from './Home';
import Orders from './Orders';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

class SearchOrders extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            searchCriteria: {
                userId: window.oms.userId,
                product: '',
                dateSearchType: 0,
                phone: '',
                email: ''
            },
            searchResult: []
        };
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let searchCriteria = this.state.searchCriteria;
        searchCriteria[name] = value;
        let newState = {
            'searchCriteria': searchCriteria,
            'searchResult': []
        };
        this.setState(newState);

    }

    handleSubmit(event) {
        event.preventDefault();
        let that = this;

        fetch(this.url())
            .then(function (response) {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json()
            })
            .then(function(result) {
                let newState = that.state;
                console.log(result);
                newState['searchResult'] = result;
                newState['changed'] = false;
                that.setState(newState);
            })
            .catch(error=>window.alert("Error in search!"))
            .finally(function () {
                let newState = that.state;
                newState['changed'] = false;
                that.setState(newState);
            })
    }

    render() {
        return (
            <div>
                <Home pageTitle="My orders"/>
                <div className="p-3 border m-3">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="product">Product</Label>
                            <Input type="text" id="product" name="product" onChange={this.handleChange} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="dateSearchType">Order Date</Label>
                            <Input type="select" name="dateSearchType" id="dateSearchType" onChange={this.handleChange}>
                                <option value="0">LAST 15 MINS</option>
                                <option value="1">BEFORE 15 MINS</option>
                            </Input>
                        </FormGroup>

                        <Button>Search</Button>
                    </Form>
                </div>

                <div className="p-3 border m-3">
                    <Orders content={this.state.searchResult}/>
                </div>
            </div>
        );
    }

    url() {
        let searchCriteria = this.state.searchCriteria;
        return '/orders?userId=' + searchCriteria.userId + '&email=' + searchCriteria.email
            + '&phone=' + searchCriteria.phone + '&product=' + searchCriteria.product
            +  '&dateSearchType=' + searchCriteria.dateSearchType;

    }
}

export default SearchOrders;