import React from "react";
import styles from './company.module.css'



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
               <h1>Bloco1</h1>
            </div>
            <div>
               <h1>Bloco2</h1>  
            </div>
            <div>
               <h1>Bloco3</h1>
            </div>
         </div>
      </section>
   )

}


export default Company