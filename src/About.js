import React, { Component } from 'react';
import { Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import GetAppIcon from '@material-ui/icons/GetApp';
import VisibilitySensor from 'react-visibility-sensor';
const skills = [
    {
        text: "HTML5",
        image: "./assets/img/html5.svg",
        rate: "Intermediate"
    },
    {
        text: "CSS3",
        image: "./assets/img/css-3.svg",
        rate: "Intermediate"
    },
    {
        text: "Javascript",
        image: "./assets/img/javascript.svg",
        rate: "Intermediate"
    },
    {
        text: "JQuery",
        image: "./assets/img/jquery.png",
        rate: "Intermediate"
    },
    {
        text: "Bootstrap",
        image: "./assets/img/bootstrap.png",
        rate: "Intermediate"
    },
    {
        text: "PHP",
        image: "./assets/img/php.svg",
        rate: "Intermediate"
    },
    {
        text: "Codeigniter",
        image: "./assets/img/codeigniter.png",
        rate: "Basic"
    },
    {
        text: "Materialize",
        image: "./assets/img/materialize.png",
        rate: "Basic"
    },
    {
        text: "PWA",
        image: "./assets/img/pwa.png",
        rate: "Basic"
    },
    {
        text: "React.js",
        image: "./logo192.png",
        rate: "Basic"
    },
    {
        text: "Photoshop",
        image: "./assets/img/photoshop.svg",
        rate: "Basic"
    }

]

class About extends Component {
    state = {
        rowVisible: false
    }
    render() {
        return (
            <div id="about" >
                <Container>
                    <Row className="about-section-row">
                        <VisibilitySensor onChange={(isVisible) => {
                            this.setState({ rowVisible: isVisible })
                        }}>
                            <Col lg={4} md={6} className="about-explanation mb-5" style={{
                                opacity: this.state.rowVisible ? 1 : 0.25,
                                transition: 'opacity 0.5s'
                            }}>
                                <h3 className="text-center headline font-weight-bold">About Me</h3>
                                <p id="about-paragraph">Hi, I'm Kevin. I'm a Front End Developer based in Bandung. I really like
                                    Front-end development
                                    because I can see
                                    first
                                    hand what I'm working on. I have knowledge in HTML, CSS, Javascript, JQuery, Bootstrap and so
                                    on.
                            </p>
                                <div className="text-center">
                                    <a href="./assets/file/CV_MuhammadKevin.pdf"><button type="button" className="btn-cv">Download CV
                                    &nbsp;<GetAppIcon /></button></a>
                                </div>
                            </Col>
                        </VisibilitySensor>
                        <Col lg={4} className="d-sm-none d-md-none d-lg-block div-profile" style={{
                            opacity: this.state.rowVisible ? 1 : 0.25,
                            transition: 'opacity 0.5s'
                        }}>
                            <div className="text-center">
                                <img src={"./assets/img/profile.png"} className="img-profile" alt="profile" />
                            </div>
                        </Col>
                        <VisibilitySensor onChange={(isVisible) => {
                            this.setState({ rowVisible: isVisible })
                        }}>
                            <Col lg={4} md={6} className="mb-3 about-skills" style={{
                                opacity: this.state.rowVisible ? 1 : 0.25,
                                transition: 'opacity 0.5s'
                            }}>
                                <h3 className="text-center about-headline font-weight-bold">Skills</h3>
                                <Row className="text-center">
                                    {skills.map(skill => (
                                        <OverlayTrigger
                                            key={skill.text}
                                            placement="top"
                                            overlay={
                                                <Tooltip id={skill.text}>
                                                    {skill.rate}
                                                </Tooltip>
                                            }
                                        >
                                            <Col lg={3} md={3} sm={3} xs={4}>
                                                <img src={skill.image} className="icon-skills" alt={skill.text} />
                                                <br />
                                                <small>{skill.text}</small>
                                            </Col>
                                        </OverlayTrigger>
                                    ))}
                                </Row>
                            </Col>
                        </VisibilitySensor>
                    </Row>
                </Container>
            </div >
        )
    }
}

export default About;