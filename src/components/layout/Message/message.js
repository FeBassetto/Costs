import React from "react";
import styles from './message.module.css'


const Message = ({msg, type}) => {


    return(
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
    )
}

export default Message