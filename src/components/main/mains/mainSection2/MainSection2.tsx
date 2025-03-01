import React from 'react'
import styles from './MainSection2.module.css'
import { Container } from 'react-bootstrap'




function MainSection2() {
  return (

<Container>

<section id="services" className={styles.services}>
        <h2>My Services</h2>
        <div className={styles.serviceCards}>
          <div className={styles.card}>Graphic Design</div>
          <div className={styles.card}>Web Design</div>
          <div className={styles.card}>Software</div>
          <div className={styles.card}>Application</div>
        </div>
      </section>

</Container>
  )
}

export default MainSection2
