import React from "react";
import styles from './loader.module.css'
import loading from '../../../img/loading.svg'


const Loader = () => {



    return(
        <div className={styles.loader_container}>
            <img className={styles.loader} src={loading} alt="Loading" />
        </div>
    )
}

export default Loader