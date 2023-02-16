import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

function Cart(props) {
  const cartCtx = useContext(CartContext);

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, qty : 1})
  };

//   console.log(cartCtx);
  const cartItems = cartCtx.items.map((cart) => {
    // return (<li>{cart.name}</li>)
    return <CartItem
      key={cart.id}
      name={cart.name}
      qty={cart.qty}
      price={cart.price}
    //   preconfig  the func with bind
      onRemove={cartItemRemoveHandler.bind(null, cart.id)}
      onAdd={cartItemAddHandler.bind(null, cart)}
    ></CartItem>;
  });

  const totalAmt = `₹${cartCtx.totalAmt.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  return (
    <Modal onHideCart={props.onHideCart}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmt}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
