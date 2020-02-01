import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';
const projects = [
    {
        key: 1,
        image: "assets/img/ird.jpg",
        name: "Informatics Research Development Website",
        subname: "Company Profile / Content Management System",
        link: "http://ird.widyatama.ac.id",
        provider: "Website",
        description: "I worked with Informatics Research and Development Widyatama to create their company profile website with Content System Management feature"
    },
    {
        key: 2,
        image: "assets/img/flociti.jpg",
        name: "Shuttle Website",
        subname: "Reservation System / Prototype",
        link: "https://github.com/muhammadkevinpf/website-flociti",
        provider: "on Github",
        description: "In this project, my job is to create a functionally prototype website that will be used for shuttle reservation system."
    }
]


export default function Projects() {
    return (
        <div id="projects">
            <Container>
                <div className="text-center mb-5">
                    <h1 className="font-weight-bold">Projects</h1>
                    <p>Here's a selection of some recent work.</p>
                    <hr className="section-break" />
                </div>

                {projects.map(project => {
                    return project.key % 2 !== 0 ? <Fragment key={project.key}>
                        <LazyLoad height={200} offset={100} once>
                            <Row noGutters className="mb-5">
                                <Col lg={6} md={6} className="mb-3">
                                    <img src={project.image} className="img-portfolio" alt={project.title} />
                                </Col>
                                <Col lg={6} md={6} className="text-center mb-5">
                                    <h3 className="mb-2">{project.name}</h3>
                                    <p className="text-secondary">{project.subname}</p>
                                    <p>{project.description}</p>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer"><button className="btnLink mt-3">{`View ${project.provider}`}</button></a>
                                </Col>
                            </Row>
                        </LazyLoad>
                    </Fragment>
                        :
                        <Fragment key={project.key}>
                            <LazyLoad height={200} offset={100} once>
                                <Row noGutters className="mb-5">
                                    <Col lg={6} md={6} className="mb-3 d-md-none d-lg-none d-sm-block">
                                        <img src={project.image} className="img-portfolio" alt={project.title} />
                                    </Col>
                                    <Col lg={6} md={6} className="text-center mb-5">
                                        <h3 className="mb-2">{project.name}</h3>
                                        <p className="text-secondary">{project.subname}</p>
                                        <p>{project.description}</p>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer"><button className="btnLink mt-3">{`View ${project.provider}`}</button></a>
                                    </Col>
                                    <Col lg={6} md={6} className="mb-3 d-sm-none d-md-block d-lg-block colProject">
                                        <img src={project.image} className="img-portfolio" alt={project.title} />
                                    </Col>
                                </Row>
                            </LazyLoad>
                        </Fragment>
                })}

            </Container>
        </div >
    )
}