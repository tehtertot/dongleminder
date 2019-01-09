import React from 'react';
import User from './user';

class UserSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredUsers: [],
            searchFilter: null,
        };
    }

    handleChange(val) {
        let searchVal = val.toLowerCase();
        let users = this.props.allUsers.filter((u) => u.full_name.toLowerCase().includes(searchVal));
        this.setState({filteredUsers: users, searchFilter: val});
    }

    render() {
        let userList = this.state.searchFilter === null ? this.props.allUsers : this.state.filteredUsers;
        let visibleUsers = userList.map((u) =>
            <User name={u.full_name} key={u.id} value={u.id} showUser={ this.props.showUser } />)
        return(
            <div className="search">
                <input placeholder="filter by name..." onChange={ (e) => this.handleChange(e.target.value) } />
                <ul id="userList">{visibleUsers}</ul>
            </div>
        );
    }
}

export default UserSearch;