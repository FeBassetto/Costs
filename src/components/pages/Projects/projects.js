import React from "react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from './projects.module.css'

import Message from "../../layout/Message/message";
import LinkButton from "../../LinkButton/linkbutton";
import Container from "../../layout/Container/container";
import ProjectCard from "../../project/ProjectCard/projectcard";

const Projects = () => {

    const [projects,setProjects] = useState([])

    const location = useLocation()
    let message;

    if(location.state){
        message = location.state.message
    }

    useEffect(() => {

        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-type' : 'application/json',
            },
        }).then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            setProjects(data)
        })
        .catch((err) => console.log(err))

    }, [])

    return(
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject" text="Criar projeto" />
            </div>
            {message && <Message type="success" msg={message} /> }
            <Container customClass="start">
                {projects.length > 0 && 
                    projects.map((project) => project.name && <ProjectCard 
                    id={project.id} 
                    name={project.name}
                    budget={project.budget} 
                    category={project.category.name} 
                    key={project.id} 
                    />)
                }
            </Container>
        </div>

    )
}


export default Projects