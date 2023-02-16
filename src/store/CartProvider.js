import CartContext from "./cart-context"
import React, {useReducer} from "react";

const initialCartState = {
    items : [],
    totalAmt : 0
}

const cartReducer =(state, action) => {
    if(action.type === 'ADD_ITEM') {
        const updatedCartItem = state.items.concat(action.item);
        const updatedTotalAmt = state.totalAmt + action.item.price * action.item.qty; 
        return {
            items : updatedCartItem,
            totalAmt : updatedTotalAmt
        }
    }
    return initialCartState;
}

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, initialCartState)

    const addItemToCart = (item) => {
        dispatchCartAction({type : 'ADD_ITEM', item});
    };

    const removeItemFromCart = (id) => {
        dispatchCartAction({type : 'REMOVE_ITEM', id});
    };

    const cartContext = {
        items : cartState.items,
        totalAmt : cartState.totalAmt,
        addItem : addItemToCart,
        removeItem : removeItemFromCart
    }

    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartProvider;