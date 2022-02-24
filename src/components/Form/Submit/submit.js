import React from "react";
import styles from './submit.module.css'



const Submit = ({text}) => {


    return(
        <div>
            <button className={styles.btn} >{text}</button>
        </div>
    )

}

export default Submit