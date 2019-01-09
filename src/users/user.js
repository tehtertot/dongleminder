import React from 'react';

class User extends React.Component {
    render() {
        return (
            <li className="userRow" onClick={() => this.props.showUser(this.props.value)}>{this.props.name}</li>
        );
    }
}

export default User;