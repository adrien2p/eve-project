import classes from "./Baby.module.css";
import React from "react";

const Head = () => {
    return (
        <div className={classes['baby-head']}>
            <div className={classes['baby-face']}>
                <div className={classes['eyes']}>
                    <div className={`${classes['eye']} ${classes['left-eye']}`}/>
                    <div className={`${classes['eye']} ${classes['right-eye']}`}/>
                </div>
                <div className={classes['mouth']}>
                    <div className={classes['left-mouth-part']}/>
                    <div className={classes['right-mouth-part']}/>
                    <div className={classes['mouth-tongue']}/>
                </div>

                <div className={classes['chin']}/>

            </div>


            <div className={classes['hair-container']}>
                <div className={classes['panel-container']} id="rotate-x">

                    <div className={classes['flick-down']}/>
                    <div className={classes['flick-up']}/>
                    <div className={classes['flick-up-2']}/>
                    <div className={classes['flick-up-2-round']}/>
                    <div className={classes['panel']}/>
                </div>
            </div>
        </div>
    );
};

export default Head;