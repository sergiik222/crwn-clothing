import React from "react";
import {connect} from "react-redux";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import {CartDropdownContainer, CartDropdownItemsContainer, CartEmptyMessageContainer} from "./cart-dropdown.styles";
import {withRouter} from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import {toggleCartHidden} from "../../redux/cart/cart.actions";


const CartDropdown = ({cartItems, history, dispatch}) => (
    <CartDropdownContainer>
        <CartDropdownItemsContainer>
            {
                cartItems.length ?
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item = {cartItem}/>
                        )
                    )
                :
                    <CartEmptyMessageContainer>Your cart is empty</CartEmptyMessageContainer>
            }
        </CartDropdownItemsContainer>
        <CustomButton
            onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</CustomButton>
    </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))