import React from 'react'
import styles from "./MainSection3.module.css"
import { Container } from 'react-bootstrap'


function MainSection3() {
  

  return (

   <  Container>
    <section id="portfolio" className={styles.portfolio}>
    <h2>Portfolio</h2>
    <div className={styles.portfolioItems}>
     <div className={styles.foto}><img /></div> 
     <div className={styles.foto1}><img /></div> 
     <div className={styles.foto2}><img /></div> 
   
     


    </div> 
  </section>




  <section id="contact" className={styles.contact}>
<h2>Contact Me</h2>
<form>
  <input type="text" placeholder="Name" />
  <input type="email" placeholder="Email" />
  <textarea placeholder="Your Message"></textarea>
  <button type="submit">Submit</button>
</form>
</section>
  </ Container>
  
  )
}

export default MainSection3
