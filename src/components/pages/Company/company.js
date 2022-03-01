import React from "react";
import styles from './company.module.css'
import { FiTarget, FiAnchor } from 'react-icons/fi'
import { FaBinoculars } from 'react-icons/fa'


const Company = () => {




   return (
      <section className={styles.company_container} >
         <div className={styles.company_first_child_container}>
            <div className={styles.company_costs}>
               <h2>Costs</h2>
               <p>
                  O gerenciador de projetos Costs oferece um
                  espaço completo para atender as necessidades
                  dos seus usuários, onde podem desenvolver de
                  maneira organizada seus projetos, organizando
                  seus custos e serviços. Em apenas 5 anos de
                  mercado já oferecemos nossa plataforma para mais
                  de <span>50 mil projetos.</span>
               </p>
            </div>
            <div className={styles.company_history}>
               <h2>História</h2>
               <p>
                  Fundada em 2010 pelo programador Felipe
                  Silveira Bassetto, o Costs se tornou referencia
                  em todo Brasil. Foi o <span>primeiro gerenciador de
                     projetos no Brasil</span>, onde desde o começo teve um
                  grande sucesso devido a excelência do seu serviço.
               </p>
            </div>
         </div>
         
         <div className={styles.company_second_child_container}>
            <div>
               <div className={styles.company_target}>
                  <FiTarget />
                  <div className={styles.company_icons_title}>
                     Missão
                  </div>
               </div>
               <div>
                  Proporcionar aos usuários uma melhor organização
                  em seus projetos, conseguindo organizar os serviços
                  com orçamento e despesas
               </div>
            </div>
            <div className={styles.company_binoculars}>
               <div>
                  <FaBinoculars />
                  <div className={styles.company_icons_title}>
                     Visão
                  </div>
               </div>
               <div>
                  Mostrar o quão importante é administrar seu
                  projeto de maneira adequada, para assim conseguir
                  resultados incríveis
               </div>
            </div>
            <div className={styles.company_anchor}>
               <div>
                  <FiAnchor />
                  <div className={styles.company_icons_title}>
                     Valores
                  </div>
               </div>
               <div>
                  <div>
                     Profissionalismo <br/>
                     Segurança <br/>
                     Organização <br/>
                     Dedicação
                  </div>
               </div>
            </div>
         </div>
      </section>
   )

}


export default Company