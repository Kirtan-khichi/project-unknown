import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => (
  <div className="page2" id="home">
    <h1 className="Footer">Interested in working with me??</h1>
    <div className="button-container">
      <a href="#login" className="custom-button">Start A Project</a>
    </div>
    <Container>
      <Row className="justify-content-between">
        <Col md={6} className="text-start">
          <ul className="footer-links">
            <li><a href="#about">About</a></li>
            <li><a href="#progress">Progress</a></li>
            <li><a href="#faqs">FAQs</a></li>
          </ul>
        </Col>
        <Col md={6} className="text-end footer-social">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer">YouTube</a>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;
  