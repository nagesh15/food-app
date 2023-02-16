import React,{useRef, useState} from "react";
import Input from "../../UI/Input";
import classes from './MealItemForm.module.css';

function MealItemForm(props) {
    const qtyInput = useRef();
    const [isAmtValid,setIsAmtValid] = useState(true);

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredQty = qtyInput.current.value;
        const enteredQtyNumber = +enteredQty;

        if(enteredQty.trim().length === 0 || enteredQtyNumber < 1 || enteredQtyNumber>10){
            setIsAmtValid(false);
            return;
        }
        props.onAddToCart(enteredQtyNumber);
    };

    return <form className={classes.form} onSubmit={submitHandler}>
        <Input ref={qtyInput} label="Qty" input={{
            id : 'Qty_' + props.id,
            type : 'number',
            min : '1',
            max : '10',
            step : '1',
            defaultValue : '1'
        }}/>
        <button>Add</button>
        {!isAmtValid && <p>Please enter valid amount</p>}
    </form>
}   

export default MealItemForm;