import React  from 'react';
import classes from './Nav.module.css';

const Nav = () => {
    return(
        <nav className={classes.nav}>
            <div className={classes.item}>
                <a href="/Profile" >Profile</a>
            </div>
            <div className={classes.item}>
                <a href="/Dialogs">Message</a>
            </div>
            <div className={classes.item}>
                <a href="/News">News</a>
            </div>
            <div className={classes.item}>
                <a href="/Music">Music</a>
            </div>
            <div className={classes.item}>
                <a href="/Setting">Settings</a>
            </div>
        </nav>
    );
}

export default Nav;



