import React from "react";
import styles from './serviceform.module.css'

import { useState } from "react";

import Input from "../../Form/Input/input";
import Submit from "../../Form/Submit/submit";

const ServiceForm = ({handleSubmit, btnText, projectData}) => {


    const [service, setService] = useState([])

    function submit(e) {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e) {
        setService({ ...service, [e.target.name]: e.target.value})
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome do serviço"
                name="name"
                placeholder="Insira o nome do serviço"
                handleOnChange={handleChange}
            />

            <Input
                type="number"
                text="Custo do serviço"
                name="cost"
                placeholder="Insira o valor total"
                handleOnChange={handleChange}
            />

            <Input
                type="text"
                text="Descrição do serviço"
                name="description"
                placeholder="Escreva o serviço"
                handleOnChange={handleChange}
            />

            <Submit text={btnText} />
        </form>
    )
}

export default ServiceForm