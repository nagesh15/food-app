import React from "react";
import Modal from "../UI/Modal";
import classes from './Cart.module.css';

function Cart(props) {
    const Dummy_cart = [
        {id : 'm1', name : 'Sushi', qty : 2, price : 598.00}
    ];

    const cartItems = Dummy_cart.map((cart) => <li key={cart.id}>{cart.name}</li>)


    return <Modal>
        <ul className={classes['cart-items']}>
            {cartItems}
        </ul>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>598</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
}

export default Cart;