import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const about = [
    {
        key: "github",
        link: 'https://github.com/muhammadkevinpf/',
        icon: <FontAwesomeIcon icon={['fab', 'github']} />
    },
    {
        key: "linkedin",
        link: 'https://www.linkedin.com/in/muhammad-kevin-52497617a/',
        icon: <FontAwesomeIcon icon={['fab', 'linkedin']} />
    },
    {
        key: "email",
        link: 'mailto:muhammadkevinpf@gmail.com',
        icon: <FontAwesomeIcon icon="envelope" />
    },
    {
        key: "whatsapp",
        link: 'https://wa.me/6282262341721',
        icon: <FontAwesomeIcon icon={['fab', 'whatsapp']} />
    },
]

export default function Contact() {
    return (
        <div id="contact">
            <h1 className="text-center font-weight-bold">Contact Me</h1>
            <p className="text-center">Don't be a stranger, say hello!</p>
            <Container>
                <Row className="text-center">
                    {about.map(social => (
                        <Col sm={3} md={3} xs={3} lg={3} key={social.key}>
                            <a href={social.link} target="_blank" rel="noopener noreferrer" className="social-icons">{social.icon}</a>
                        </Col>
                    ))}
                </Row >
            </Container >
        </div>
    )
}