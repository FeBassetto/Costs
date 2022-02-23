import React from "react";
import { Link } from "react-router-dom";

import Container from "../Container/container";
import styles from './navbar.module.css'
import logo from '../../../img/costs_logo.png'

const NavBar = () => {

    return (
        <header>
            <nav className={styles.navbar}>
                <Container>
                    <Link to='/'><img src={logo} alt='Logo' /></Link>
                    <ul className={styles.list}>
                        <li className={styles.item}><Link to='/' >Home</Link></li>
                        <li className={styles.item}><Link to='/projects' >Projects</Link></li>
                        <li className={styles.item}><Link to='/contact' >Contact</Link></li>
                        <li className={styles.item}><Link to='/company' >Company</Link></li>
                        <li className={styles.item}><Link to='newproject' >Novo Projeto</Link></li>
                    </ul>
                </Container>
            </nav>
        </header>
    )

}

export default NavBar