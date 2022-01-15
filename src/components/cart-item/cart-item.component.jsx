import React from "react";

import {CartItemContainer, CartItemDetails, CartItemImage, CartItemName} from "./cart-item.styles";

const CartItem = ({item: {imageUrl, price, name, quantity}}) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt={'item'} />
        <CartItemDetails>
            <CartItemName >{name}</CartItemName>
            <CartItemName>{quantity} x ${price}</CartItemName>
        </CartItemDetails>
    </CartItemContainer>
)

export default CartItem