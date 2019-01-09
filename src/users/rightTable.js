import React from 'react';

import CheckoutForm from './checkoutForm';
import ItemRow from './itemRow';
import NewUser from './newUser';

class NoTable extends React.Component {
    render() {
        return (
            <div>
                <h6>Please Select a User</h6>
                <p>or</p>
                <NewUser updateUsers={this.props.updateUsers} />
            </div>
        );
    }
}

class ItemTable extends React.Component {
    render() {
        let items = this.props.userItems.length === 0 ? <tr><td colSpan="3">no checked out items</td></tr> : this.props.userItems.map((item) => <ItemRow key={item.id} item={item} user={this.props.user} update={this.props.updateUser} />);

        return (
            <table className="table text-center">
                <thead>
                    <tr>
                        <th colSpan="3">Items on Loan to {this.props.user.full_name}</th>
                    </tr>
                    <tr>
                        <th>Item</th>
                        <th>Date Checked Out</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                    <tr>
                        <td colSpan="3"><CheckoutForm userId={this.props.user.id} update={this.props.updateUser} allItems={this.props.allItems} /></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

class RightTable extends React.Component {
    render() {
        let display = this.props.user ? <ItemTable user={this.props.user} allItems={this.props.allItems} userItems={this.props.userItems} updateUser={this.props.updateUser} /> : <NoTable updateUsers={this.props.updateUsers} />;
        return (
            <div className="itemsTable">
                {display}
            </div>
        );
    }
}

export default RightTable;