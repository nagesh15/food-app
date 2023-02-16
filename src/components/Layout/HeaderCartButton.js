import React,{useContext, useEffect, useState} from "react";
import CartContext from "../../store/cart-context";
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

function HeaderCartButton(props) {
    const [isBtnHighlighted, setIsBtnHightlighted] = useState(false);

    const cartCtx = useContext(CartContext);

    const {items} = cartCtx;

    const cartCount = items.reduce((count, item) => {
        return count + item.qty;
    },0);

    const btnClasses = `${classes.button} ${isBtnHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if(items.length === 0)
            return;
        setIsBtnHightlighted(true);

        //remove bump effect after 300ms
        const timer = setTimeout(() => {
            setIsBtnHightlighted(false);
        },300);

        //clean-up function
        return () => {
            clearTimeout(timer);
        }
    },[items])

    return <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{cartCount}</span>
    </button>
}

export default HeaderCartButton;