import React from 'react';
import Button from 'react-bootstrap/lib/Button';

class NewUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            email: "",
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    addUser(e) {
        e.preventDefault();
        let isValid = true;
        for (let k in this.state) {
            if (!this.state[k]) {
                isValid = false;
                break;
            }
        }
        if (isValid) {
            var queryString = Object.keys(this.state).map(key => key + '=' + this.state[key]).join('&');
            // fetch("http://localhost:5000/users/create", {
            fetch("/users/create", {
                method: "POST",
                crossDomain: true,
                body: queryString,
                headers: {
                    'Content-Type': "application/x-www-form-urlencoded",
                }
            })
            .then((res) => res.json())
            .then((jsonRes) => this.props.updateUsers(jsonRes.added) )
        }
    }

    render() {
        return (
            <form id="newUserForm" onSubmit={ (e) => this.addUser(e) }>
                <h6>Add a New User</h6>
                <p><input type="text" onChange={(e) => this.handleInputChange(e)} value={this.state.fname} name="fname" placeholder="first name" /></p>
                <p><input type="text" onChange={(e) => this.handleInputChange(e)} value={this.state.lname} name="lname" placeholder="last name" /></p>
                <p><input type="text" onChange={(e) => this.handleInputChange(e)} value={this.state.email} name="email" placeholder="email" /></p>
                <Button type="submit" variant="success">Add</Button>
            </form>
        );
    }
}

export default NewUser;