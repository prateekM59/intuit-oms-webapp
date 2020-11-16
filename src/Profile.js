import React from 'react';
import Home from './Home';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            user: {
                id: -1,
                name: '',
                address: '',
                phone: '',
                email: ''
            },
            changed: false
        };
    }

    componentDidMount() {
        fetch('/users/active')
            .then(function (response) {
                if (!response.ok) {
                    window.location.href = "/";
                }
                return response.json();
            })
            .then(data => this.setState({user: data, changed: false}));
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let user = this.state.user;
        user[name] = value;
        let newState = {
            'user': user,
            'changed': true
        };
        this.setState(newState);

    }

    handleSubmit(event) {
        event.preventDefault();
        let that = this;

        fetch('/users/'+this.state.user.id, {
            method:  'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.user),
        })
            .then(function(response) {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                window.alert("Update Success!")
            })
            .catch(error=>window.alert("Error in update!"))
            .finally(function () {
                let user = that.state.user;
                that.setState({user: user, changed: false});
            })
    }

    render() {
        let user = this.state.user;

        return (

            <div>
                <Home pageTitle="View/Update Profile"/>
                <div className="p-3 border m-3">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="text" id="email" name="email" disabled value={user.email} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="name">Name</Label>
                            <Input type="text" id="name" name="name" onChange={this.handleChange} value={user.name} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="address">Address</Label>
                            <Input type="text" id="address" name="address" onChange={this.handleChange} value={user.address} />
                        </FormGroup>

                        <FormGroup>
                            <Label for="phone">Phone</Label>
                            <Input type="text" id="phone" name="phone" onChange={this.handleChange} value={user.phone} />
                        </FormGroup>

                        <Button disabled={!this.state.changed}>Update</Button>
                    </Form>
                </div>
            </div>
        );
    }

}

export default Profile;