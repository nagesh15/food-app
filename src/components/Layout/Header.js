import React from "react";
import mealsImg from '../../assets/meals.jpg';
import classes from './Header.module.css'

function Header(props) {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>Food Menu</h1>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImg} alt="Table full of Img" />
        </div>
    </React.Fragment>
}

export default Header;