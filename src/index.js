import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Index from './users/index';
import InventoryIndex from './inventory/inventoryIndex';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usersView: true,
        }
        this.switchView = this.switchView.bind(this);
    }
    switchView() {
        this.setState({usersView: !this.state.usersView});
    }

    render() {
        let show = this.state.usersView ? <Index /> : <InventoryIndex />;

        return (
            <div className="container">
                <h3>Dojo Inventory</h3>
                <p className="link" onClick={this.switchView}>Switch View</p>
                {show}
            </div>
        );
    }
}
function showMain() {
    ReactDOM.render(
        <Main />,
        document.getElementById('root')
    );
}

showMain();

// export { showMain };