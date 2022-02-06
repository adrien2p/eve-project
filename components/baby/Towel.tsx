import classes from "./Baby.module.css";
import React from "react";

const Towel = () => {
    return (
        <div className={classes['towel']}>
            <div className={classes['towel-band']}/>
        </div>
    );
};

export default Towel;