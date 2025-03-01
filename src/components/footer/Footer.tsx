import React from 'react'
import { Card, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import { FaGithub,  FaEnvelope, FaInstagram, FaPhoneAlt } from 'react-icons/fa';

function Footer() {
  return (
    <Card bg="dark" text="white" className="mt-5">
    <Card.Body>
      <Container>
        <Row className="text-center">
          <Col>
            <h2 className="mb-4">Connect with Me</h2>
            <Nav className="justify-content-center mb-4">
              <Nav.Item>
                <Nav.Link href="#home" className="text-light hover:text-primary">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#project" className="text-light hover:text-primary">Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#contact" className="text-light hover:text-primary">Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#portfolio" className="text-light hover:text-primary">portfolio</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>

        {/* Социальные иконки */}
        <Row className="text-center mb-4">
          <Col>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-light me-4">
              <FaGithub size={30} />
            </a>
            <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer" className="text-light me-4">
              <FaEnvelope size={30} />
            </a>
            <a href="https://www.instagram.com/yourusername/" target="_blank" rel="noopener noreferrer" className="text-light me-4">
                <FaInstagram size={30} />
              </a>
              <a href="tel:+992981081100" className="text-light me-4">
                <FaPhoneAlt size={30} />
              </a>
          </Col>
        </Row>

        <Row className="text-center">
  <Col>
    <p>My name is Muhammad Nabiev, and I’m a  programmer.</p>
    <p>I specialize in building websites and e-commerce stores. I also have experience working with teams to bring ideas to life.</p>
    <p>If you're interested in collaborating or have a project in mind, feel free to reach out!</p>
  </Col>
</Row>

        {/* Кнопка для возврата наверх */}
        <Row className="text-center mt-4">
          <Col>
            <Button 
              variant="outline-light" 
              className="px-4 py-2" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Back to Top
            </Button>
          </Col>
        </Row>
      </Container>
    </Card.Body>
  </Card>
  )
}

export default Footer
