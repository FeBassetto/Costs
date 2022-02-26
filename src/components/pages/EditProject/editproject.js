import React from "react";
import styles from './editproject.module.css'

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Loader from "../../layout/Loader/loader";
import Container from "../../layout/Container/container";
import ProjectForm from "../../project/ProjectForm/projectform";
import Message from "../../layout/Message/message";

const EditProject = () => {

    const { id } = useParams()

    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [message,setMessage] = useState()
    const [type,setType] = useState()
    

    useEffect(() => {

        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application-json',
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setProject(data)
                })
                .catch(err => console.log(err))

        }, 1000)

    }, [id])

    function editPost(project){

        setMessage('')

        if(project.budget < project.cost){
            setMessage('O orçamento não pode ser menor que o custo do projeto!')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project),
        })
        .then(resp => resp.json())
        .then((data) => {
            setProject(data)
            setShowProjectForm(false)
            setMessage('Projeto atualizado!')
            setType('success')
        })
        .catch(err => console.log(err))
    }


    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm(){
        setShowServiceForm(!showServiceForm)
    }

    return (
        <>
            {project.name ? (
                <div className={styles.project_details}>
                    <Container customClass="column">
                        {message && <Message type={type} msg={message} />}
                        <div className={styles.details_container}>
                            <h1>Projeto: {project.name}</h1>
                            <button onClick={toggleProjectForm} className={styles.btn} >
                                {!showProjectForm ? 'Editar Projeto': 'Fechar'}
                            </button>
                            {!showProjectForm ? (
                                <div className={styles.project_info}>  
                                    <p>
                                        <span>Categoria: </span> {project.category.name}
                                    </p>
                                    <p>
                                        <span>Total de Orçamento:</span> {project.budget}
                                    </p>
                                    <p>
                                        <span>Total Utilizado:</span> {project.cost}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.project_info}>
                                    <ProjectForm handleSubmit={editPost} btnText="Concluir edição" projectData={project} />
                                </div>
                            )}
                        </div>
                        <div className={styles.service_form_container}>
                                <h2>Adicione um serviço:</h2>
                                <button onClick={toggleServiceForm} className={styles.btn} >
                                    {!showServiceForm ? 'Adicionar serviço': 'Fechar'}
                                </button>
                                <div className={styles.project_info}>
                                    {showServiceForm && <div>Formulário do serviço</div>}
                                </div>
                        </div>
                        <h2>Serviços</h2>
                        <Container customClass="start">
                            <p>Itens de serviço</p>
                        </Container>
                    </Container>
                </div>
            ): (
                    <Loader/>
            )}
        </>
    )


}

export default EditProject