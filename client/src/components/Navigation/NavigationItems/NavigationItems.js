import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => {
    const activeRoute = window.location.pathname

    return(
    <ul className={classes.NavigationItems}>
        <NavigationItem
            link="/"
            active={activeRoute === "/" ? true : false}
        >Home</NavigationItem>
        <NavigationItem
            link="/portfolio"
            active={activeRoute === "/portfolio" ? true : false}
        >Projects</NavigationItem>
        <NavigationItem
            link="/contact"
            active={activeRoute === "/contact" ? true : false}
        >Contact</NavigationItem>
    </ul>
)
};

export default navigationItems;