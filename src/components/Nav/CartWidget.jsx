import React from 'react';
import {TiShoppingBag} from 'react-icons/ti';

const CartWidget = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <TiShoppingBag/>
            <span>{}</span>
        </div>
    );
};

export default CartWidget;