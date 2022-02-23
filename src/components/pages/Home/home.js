import React from 'react'
import styles from './home.module.css'
import savings from '../../../img/savings.svg'

import LinkButton from '../../LinkButton/linkbutton'

const Home = () => {



    return(
        <section className={styles.home_container}>
            <h1>Bem-Vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar seu projeto agora mesmo!</p>
            <LinkButton to='/newproject' text='Criar Projeto'/>
            <img src={savings} alt='Savings' />
        </section>
    )

}

export default Home