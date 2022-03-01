import React from "react";
import styles from './contact.module.css'

import {MdLocationPin, MdEmail} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'

const Contact = () => {


    return (
        <div className={styles.contact_container}>
            <div className={styles.contact_container_title}>
                <h1>Entre em contato com a Costs</h1>
            </div>
            <div className={styles.contact_container_info}>

                <div className={styles.contact_container_info_address}>
                    <div className={styles.contact_container_info_address_header}>
                        <div>
                            <MdLocationPin />
                        </div>
                        <p>Endereço:</p>
                    </div>
                    <div className={styles.contact_container_info_address_content}>
                        <p>Rua São joaquim nº1323, São Paulo-SP</p>
                    </div>
                </div>

                <div className={styles.contact_container_info_email}>
                    <div className={styles.contact_container_info_email_header}>
                        <div>
                            <MdEmail />
                        </div>
                        <p>Email:</p>
                    </div>
                    <div className={styles.contact_container_info_email_content}>
                        <p>Costscontact@costs.com</p>
                    </div>
                </div>

                <div className={styles.contact_container_info_tel}>
                    <div className={styles.contact_container_info_tel_header}>
                        <div>
                            <BsFillTelephoneFill />
                        </div>
                        <p>Telefone:</p>
                    </div>
                    <div className={styles.contact_container_info_tel_content}>
                        <p>+55(14)9932193219</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact