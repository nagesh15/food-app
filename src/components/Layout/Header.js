import React from "react";
import mealsImg from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>Food Menu</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImg} alt="Table full of Img" />
        </div>
    </React.Fragment>
}

export default Header;