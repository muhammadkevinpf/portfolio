import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LazyLoad from "react-lazyload";
import IRD from "../assets/img/IRD.png";
import Flociti from "../assets/img/Flociti.png";
import BDC from "../assets/img/BDC.png";
import Alana from "../assets/img/Alana.png";
import Indomaret from "../assets/img/Indomaret.png";
import Bootstrap from "../assets/img/logo/bootstrap.png";
import Reactjs from "../assets/img/logo/logo192.png";
import Firebase from "../assets/img/logo/firebase.svg";
import Express from "../assets/img/logo/express.svg";
import MUI from "../assets/img/logo/mui.png";
import HTML5 from "../assets/img/logo/html5.svg";
import CSS3 from "../assets/img/logo/css-3.svg";
import Codeigniter from "../assets/img/logo/codeigniter.png";
import Javascript from "../assets/img/logo/javascript.svg";
import PHP from "../assets/img/logo/php.svg";
const projects = [
  {
    key: 1,
    image: Alana,
    name: "Facial Clinic Website",
    subname: "Company Profile / Online Shop",
    link: "https://alana-clinic.web.app",
    provider: "Website",
    description:
      "My responsibilities in this project are to create a fully functionally online shop website including company profile and dashboard.",
    tools: [
      {
        key: 1,
        image: Firebase,
        text: "Firebase",
      },
      {
        key: 2,
        image: Express,
        text: "Express",
      },
      {
        key: 3,
        image: Reactjs,
        text: "React.js",
      },
      {
        key: 4,
        image: Bootstrap,
        text: "Bootstrap",
      },
    ],
  },
  {
    key: 2,
    image: Indomaret,
    name: "Grocery Store Dashboard",
    subname: "Dashboard",
    link: "https://indomaret-dashboard.web.app",
    provider: "Website",
    description:
      "In this project, my job is to create a dashboard with a feature to change a product price and send a notification to the user of what product that has been changed.",
    tools: [
      {
        key: 1,
        image: Firebase,
        text: "Firebase",
      },
      {
        key: 2,
        image: Express,
        text: "Express",
      },
      {
        key: 3,
        image: Reactjs,
        text: "React.js",
      },
      {
        key: 4,
        image: MUI,
        text: "Material UI",
      },
    ],
  },
  {
    key: 3,
    image: IRD,
    name: "Informatics Research Development Website",
    subname: "Company Profile / Content Management System",
    link: "http://ird.widyatama.ac.id",
    provider: "Website",
    description:
      "I worked with Informatics Research and Development Widyatama to create their company profile website with Content System Management feature.",
    tools: [
      {
        key: 1,
        image: HTML5,
        text: "HTML5",
      },
      {
        key: 2,
        image: CSS3,
        text: "CSS3",
      },
      {
        key: 3,
        image: Javascript,
        text: "Javascript",
      },
      {
        key: 4,
        image: Codeigniter,
        text: "Codeigniter",
      },
    ],
  },
  {
    key: 4,
    image: Flociti,
    name: "Shuttle Website",
    subname: "Reservation System / Prototype",
    link: "https://github.com/muhammadkevinpf/website-flociti",
    provider: "on Github",
    description:
      "In this project, my job is to create a functionally prototype website that will be used for shuttle reservation system.",
    tools: [
      {
        key: 1,
        image: HTML5,
        text: "HTML5",
      },
      {
        key: 2,
        image: CSS3,
        text: "CSS3",
      },
      {
        key: 3,
        image: Javascript,
        text: "Javascript",
      },
      {
        key: 4,
        image: PHP,
        text: "PHP",
      },
    ],
  },
  {
    key: 5,
    image: BDC,
    name: "Dental Clinic Website",
    subname: "Reservation System / Prototype",
    link: "https://github.com/muhammadkevinpf/Website-Klinik",
    provider: "on Github",
    description:
      "In this project my job is pretty similar to shuttle reservation website, my job is to create reservation system to book an appointment with doctor.",
    tools: [
      {
        key: 1,
        image: HTML5,
        text: "HTML5",
      },
      {
        key: 2,
        image: CSS3,
        text: "CSS3",
      },
      {
        key: 3,
        image: Javascript,
        text: "Javascript",
      },
      {
        key: 4,
        image: PHP,
        text: "PHP",
      },
    ],
  },
];

export default function Projects() {
  return (
    <div id="projects">
      <Container>
        <div className="text-center mb-5">
          <h1 className="font-weight-bold">Projects</h1>
          <p>Here's a selection of some recent work.</p>
          <hr className="section-break" />
        </div>

        {projects.map((project) => {
          return project.key % 2 !== 0 ? (
            <Fragment key={project.key}>
              <LazyLoad height={200} offset={100} once>
                <Row noGutters className="mb-4 align-items-center">
                  <Col lg={6} md={6} className="mb-3">
                    <img
                      src={project.image}
                      className="img-portfolio"
                      alt={project.title}
                    />
                  </Col>
                  <Col lg={6} md={6} className="text-center mb-5">
                    <h3 className="mb-2">{project.name}</h3>
                    <p className="text-secondary">{project.subname}</p>
                    <p>{project.description}</p>
                    {project.tools.map((item) => (
                      <span className="badge badge-light mr-2" key={item.key}>
                        <div className="badge-tools">
                          <img
                            src={item.image}
                            alt={item.text}
                            className="mr-2"
                          />
                          {item.text}
                        </div>
                      </span>
                    ))}
                    <br />
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="btnLink mt-4">{`View ${project.provider}`}</button>
                    </a>
                  </Col>
                </Row>
                <hr className="mb-5 project-break" />
              </LazyLoad>
            </Fragment>
          ) : (
            <Fragment key={project.key}>
              <LazyLoad height={200} offset={100} once>
                <Row noGutters className="mb-4 align-items-center">
                  <Col
                    lg={6}
                    md={6}
                    className="mb-3 d-md-none d-lg-none d-sm-block"
                  >
                    <img
                      src={project.image}
                      className="img-portfolio"
                      alt={project.title}
                    />
                  </Col>
                  <Col lg={6} md={6} className="text-center mb-5">
                    <h3 className="mb-2">{project.name}</h3>
                    <p className="text-secondary">{project.subname}</p>
                    <p>{project.description}</p>
                    {project.tools.map((item) => (
                      <span className="badge badge-light mr-2" key={item.key}>
                        <div className="badge-tools">
                          <img
                            src={item.image}
                            alt={item.text}
                            className="mr-2"
                          />
                          {item.text}
                        </div>
                      </span>
                    ))}
                    <br />
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="btnLink mt-4"
                        disabled={
                          project.provider === "Not Available" ? true : false
                        }
                      >
                        {project.provider !== "Not Available"
                          ? `View ${project.provider}`
                          : "Not Available"}
                      </button>
                    </a>
                  </Col>
                  <Col
                    lg={6}
                    md={6}
                    className="mb-3 d-sm-none d-md-block d-lg-block colProject"
                  >
                    <img
                      src={project.image}
                      className="img-portfolio"
                      alt={project.title}
                    />
                  </Col>
                </Row>
                <hr className="mb-5 project-break" />
              </LazyLoad>
            </Fragment>
          );
        })}
      </Container>
    </div>
  );
}
