import React from 'react';

import UserSearch from './userSearch';
import RightTable from './rightTable';

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: null,
            user: null,
            allUsers: [],
            userItems: [],
            allItems: [],
        };

        this.displayAllUsers = this.displayAllUsers.bind(this);
        this.displayUser = this.displayUser.bind(this);
        this.displayUserItems = this.displayUserItems.bind(this);
        this.displayItemDropdown = this.displayItemDropdown.bind(this);

        this.displayAllUsers();
    }

    displayAllUsers(id=null) {
        // fetch('http://localhost:5000/users', {
        fetch('/users', {
            method: 'GET',
            crossDomain: true,
        })
            .then((res) => res.json())
            .then((jsonRes) => {
                this.setState({allUsers: jsonRes});
                if (id) this.displayUser(id);
            })
    }

    displayUser(id) {
        let displayId = id ? id : this.state.user.id;
        // fetch(`http://localhost:5000/users/${displayId}`, {
        fetch(`/users/${displayId}`, {
            method: "GET",
            crossDomain: true,
        })
            .then((res) => res.json())
            .then((jsonRes) => {
                this.setState({user: jsonRes[0]});
                this.displayUserItems();
            })
    }

    displayItemDropdown() {
        // fetch('http://localhost:5000/items', {
        fetch('/items', {
            method: 'GET',
            crossDomain: true,
        })
            .then((res) => res.json())
            .then((jsonRes) => this.setState({allItems: jsonRes}));
    }

    displayUserItems() {
        let id = this.state.user.id;
        // fetch(`http://localhost:5000/users/${id}/items`, {
        fetch(`/users/${id}/items`, {
            method: 'GET',
            crossDomain: true,
        })
            .then((res) => res.json())
            .then((jsonRes) => {
                this.setState({ userItems: jsonRes });
                this.displayItemDropdown();
            })
    }

    render() {
        return (
            <div>
                <UserSearch showUser={ this.displayUser } allUsers={ this.state.allUsers } />
                <RightTable user={ this.state.user } updateUser={ this.displayUser } allItems={ this.state.allItems } userItems={ this.state.userItems } updateUsers={ this.displayAllUsers } />
            </div>
        );
    }
}

export default Index;