import React from "react";

import SHOP_DATA from './shop.data.js';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super();

        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        const { collections } = this.state;
        return (
            <div>
                {
                    collections.map(item => {
                        return (
                            <CollectionPreview key={item.id} { ...item } />
                        );
                    })
                }
            </div>
        );
    };
}

export default ShopPage;
