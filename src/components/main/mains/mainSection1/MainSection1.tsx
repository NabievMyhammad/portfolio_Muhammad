import React from 'react';
import styles from './MainSection1.module.css';
import { Container, Row, Col, Card, Button,  } from "react-bootstrap";



function MainSection1() {
  return (
<Container fluid className={styles.p0}>

<section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Muhammad Nabiev</h1>
        <h2 className={styles.subtitle}>Превращаю идеи в цифровую реальность</h2>
        <p className={styles.description}>
          Я — программист, который верит в силу технологий. Мой код — это не просто строки, 
          а инструмент для создания удобных, быстрых и красивых решений. 
          От интернет-магазинов до сложных веб-приложений — я помогаю бизнесу расти в цифровом мире.
        </p>
        <div className={styles.skills}>
          <span>#JavaScript</span>
          <span>#React</span>
          <span>#Node.js</span>
          <span>#Инновации</span>
        </div>
      </div>
    </section>



 <Container id='home' className={styles.about}>
 <div className={styles.box}>
   <h3>
     <h1 className={styles.o}>Обо мне</h1>
     <div className={styles.box1}>
       Привет! Я Мухаммад Набиев — опытный программист, специализирующийся на создании сайтов и интернет-магазинов.
     </div>
     <div className={styles.box2}>
       Я всегда стремлюсь к развитию и улучшению своих навыков. Моя цель — создавать высококачественные, инновационные решения.
     </div>
     <div className={styles.box3}>
       Если у вас есть интересные идеи или проекты, которые требуют технического подхода, я всегда открыт к сотрудничеству!
     </div>
   </h3>
 </div>
 <div className={styles.herosection}>
   {/* Здесь может быть изображение или другой контент */}
   Герой-секция
 </div>
 </Container>




 <Container id='project' className={styles.my5}>
  <h2 className={styles.textcentermb4}>Мои проекты</h2>
  <Row>
    {[
      { title: "🍽️ Mevlana – сайт ресторана", text: "Описание: Современный сайт для ресторана Mevlana с удобной навигацией, меню и возможностью онлайн-бронирования." },
      { title: "🎂 Toj Tort – сайт кондитерской", text: "Описание: Современный и удобный сайт для кондитерской Toch Tort, где клиенты могут ознакомиться с ассортиментом тортов, заказать продукцию онлайн и связаться с пекарями." },
      { title: "🛠️ AutoParts – интернет-магазин автозапчастей", text: "Описание: Полноценный интернет-магазин автозапчастей AutoParts, где пользователи могут найти, заказать и купить нужные детали для автомобилей." },
    ].map((project, index) => (
      <Col key={index} md={4} className={styles.mb4}>
        <Card className={styles.portfoliocard}>
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.text}</Card.Text>
            <Button variant="primary">Подробнее</Button>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</Container>

</Container>




  )

 
}

export default MainSection1
