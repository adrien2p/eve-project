import React from "react";
import classes from './Baby.module.css';
import Bottle from "./Bottle";
import Towel from "./Towel";
import Head from "./Head";
import Dummy from "./Dummy";

const Baby = () => {
    return (
        <div className={classes['full-baby-container']}>
            <div className={classes['baby-container']}>
                <Bottle/>
                <Towel/>
                <Head/>
            </div>

            <Dummy/>
        </div>
    );
}

export default Baby;