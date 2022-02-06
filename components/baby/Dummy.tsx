import classes from "./Baby.module.css";
import React from "react";

const Dummy = () => {
    return (
        <div className={classes['baby-dummy-container']}>
            <div className={classes['dummy-chew']}/>
            <div className={classes['baby-dummy-ring']}/>
            <div className={classes['baby-dummy-base-bottom']}/>
            <div className={classes['baby-dummy-base-middle']}/>
        </div>
    );
};

export default Dummy;