import React from 'react'
import styles from './newproject.module.css'

import { useNavigate } from 'react-router-dom'

import ProjectForm from '../../project/ProjectForm/projectform'


const NewProject = () => {

    const history = useNavigate()

    function createPost(project) {

        project.cost = 0;
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
                console.log(data)

                history('/projects', {message: 'Projeto criado com sucesso!'})
            })
        .catch(err => console.log(err))


    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar projeto!</h1>
            <p>Crie seu projeto para depois adicionar serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto" />
        </div>
    )

}

export default NewProject
