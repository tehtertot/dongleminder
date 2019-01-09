import React from 'react';

import ItemInfo from './itemInfo';

class InventoryIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
        // fetch("http://localhost:5000/items/detail", {
        fetch("/items/details", {
            method: "GET",
            crossDomain: true,
        })
            .then((res) => res.json())
            .then((jsonRes) => {
                this.setState( {'items': jsonRes} )
            })
    }
    render() {
        let items = this.state.items.map((i) => <ItemInfo key={i.id} item={i} />)
        return (
            <div>
                {items}
            </div>
        );
    }
}

export default InventoryIndex;