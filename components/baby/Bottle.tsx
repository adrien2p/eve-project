import classes from "./Baby.module.css";
import React from "react";

const Bottle = () => {
    return (
        <div className={classes['baby-bottle-container']}>
            <div className={classes['bottle']}>
                <div className={classes['bottle-glass']}>
                    <div className={classes['bottle-measure']}/>
                    <div className={classes['bottle-measure']}/>
                </div>
                <div className={classes['bottle-rim-chew']}/>
                <div className={classes['bottle-rim-middle']}/>
                <div className={classes['bottle-rim']}/>
            </div>
        </div>
    );
};

export default Bottle;