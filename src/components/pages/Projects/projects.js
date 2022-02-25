import React from "react";
import { useLocation } from "react-router-dom";
import styles from './projects.module.css'

import Message from "../../layout/Message/message";
import LinkButton from "../../LinkButton/linkbutton";
import Container from "../../layout/Container/container";

const Projects = () => {

    const location = useLocation()
    let message;

    if(location.state){
        message = location.state.message
    }

    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newprject" text="Criar projeto" />
            </div>
            {message && <Message type="success" msg={message} /> }
            <Container customClass="start">
                <p>Projetos</p>
            </Container>
        </div>

    )
}


export default Projects