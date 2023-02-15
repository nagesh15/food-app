import React,{useContext} from "react";
import CartContext from "../../store/cart-context";
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

function HeaderCartButton(props) {
    const cartCtx = useContext(CartContext);
    const cartCount = cartCtx.items.reduce((count, item) => {
        return count + item.qty;
    },0)

    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{cartCount}</span>
    </button>
}

export default HeaderCartButton;