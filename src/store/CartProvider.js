import CartContext from "./cart-context"
import React, {useReducer} from "react";

const initialCartState = {
    items : [],
    totalAmt : 0
}

const cartReducer =(state, action) => {
    if(action.type === 'ADD_ITEM') {
        const updatedTotalAmt = state.totalAmt + action.item.price * action.item.qty; 

        //if items already present in the cart
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);

        //get the existing cart item
        const existingCartItem = state.items[existingCartItemIndex];

        let updatedCartItems;

        //if cart item already exist update quantity
        if(existingCartItem) {
            const updatedCartItem = {
                ...existingCartItem,
                qty : existingCartItem.qty + action.item.qty
            };

            updatedCartItems = [...state.items];
            updatedCartItems[existingCartItemIndex] = updatedCartItem;
        } else {
            updatedCartItems = state.items.concat(action.item);
        }

       
        return {
            items : updatedCartItems,
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