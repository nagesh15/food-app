import React,{useContext} from "react";
import CartContext from "../../../store/cart-context";
import classes from './MealItem.module.css';
import MealItemForm from "./MealItemForm";

function MealItem(props) {
    const cartCtx = useContext(CartContext);

    const addToCartHandler = (qty) => {
        cartCtx.addItem({
            id : props.id,
            name : props.name,
            qty : qty,
            price : props.price
        });
    }

    return <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>₹{props.price.toFixed(2)}</div>
        </div>
        <div>
            <MealItemForm onAddToCart={addToCartHandler} id ={props.id}/>
        </div>
    </li>
}

export default MealItem;