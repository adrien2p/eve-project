import React from "react";
import classes from  './Baby.module.css';

const Baby = () => {
    return (
        <div className={classes['full-baby-container']}>
            <div className={classes['baby-container']}>
                <div className={classes['baby-bottle-container']}>
                    <div className={classes['bottle']}>
                        <div className={classes['bottle-glass']}>
                            <div className={classes['bottle-measure']}></div>
                            <div className={classes['bottle-measure']}></div>
                        </div>
                        <div className={classes['bottle-rim-chew']}></div>
                        <div className={classes['bottle-rim-middle']}></div>
                        <div className={classes['bottle-rim']}></div>
                    </div>
                </div>

                <div className={classes['towel']}>
                    <div className={classes['towel-band']}></div>
                </div>

                <div className={classes['baby-head']}>
                    <div className={classes['baby-face']}>
                        <div className={classes['eyes']}>
                            <div className={`${classes['eye']} ${classes['left-eye']}`}></div>
                            <div className={`${classes['eye']} ${classes['right-eye']}`}></div>
                        </div>
                        <div className={classes['mouth']}>
                            <div className={classes['left-mouth-part']}></div>
                            <div className={classes['right-mouth-part']}></div>
                            <div className={classes['mouth-tongue']}></div>
                        </div>

                        <div className={classes['chin']}></div>

                    </div>


                    <div className="hair-container">
                        <div className="panel-container" id="rotate-x">

                            <div className="flick-down"></div>
                            <div className="flick-up"></div>
                            <div className="flick-up-2"></div>
                            <div className="flick-up-2-round"></div>
                            <div className="panel"></div>
                        </div>
                    </div>


                </div>


            </div>

            <div className="baby-dummy-container">
                <div className="dummy-chew"></div>
                <div className="baby-dummy-ring"></div>
                <div className="baby-dummy-base-bottom"></div>
                <div className="baby-dummy-base-middle"></div>
            </div>

        </div>
    );
}

export default Baby;