import React, { useState } from "react";
import { Dropdown,  Container, Nav } from "react-bootstrap";
import "./Dashboard.css";
import { Modal } from "react-bootstrap";
import { Carousel, Row, Col } from 'react-bootstrap';

const Dashboard = () => {
  const [modalType, setModalType] = useState(null);

  const handleShow = (type) => setModalType(type);
  const handleClose = () => setModalType(null);

  const modals = {
    telefonoAmico: { title: "Telefono Amico", body: "Numero di telefono : 02 2327 2327" },
    antiviolenza: { title: "Antiviolenza e Stalking", body: "Numero di telefono : 1522" },
    disturbiAlimentari: { title: "SOS Disturbi Alimentari", body: "Numero di telefono : 800.180.969" },
    suicidio: { title: "Servizio per la Prevenzione del Suicidio", body: "Numero di telefono : 800.860022" },
  };

  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        {/* Center Content */}
        <div className="col fluid d-flex flex-column p-0 bg-dark">
          {/* Navbar */}
          <Nav className="d-flex justify-content-between align-items-center px-3 bg-transparent text-white">
            {/* Bottone "Chiedi Aiuto" a sinistra */}
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdownMenuButton1" className="bg-transparent border-white text-white">
                Chiedi Aiuto
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item style={{ color: "#9400D3	" }} onClick={() => handleShow("telefonoAmico")}>
                  Telefono Amico
                </Dropdown.Item>
                <Dropdown.Item style={{ color: "#9400D3" }} onClick={() => handleShow("antiviolenza")}>
                  Numero Antiviolenza e Stalking
                </Dropdown.Item>
                <Dropdown.Item style={{ color: "#9400D3	" }} onClick={() => handleShow("disturbiAlimentari")}>
                  Disturbi Alimentari
                </Dropdown.Item>
                <Dropdown.Item style={{ color: "#9400D3	" }} onClick={() => handleShow("suicidio")}>
                  Servizio per la Prevenzione del Suicidio
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Sezione destra */}
            <div className="d-flex align-items-center gap-3">
              <Nav.Item>
                <Nav.Link href="#" className="text-white">Notifiche</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#" className="text-white">Messaggi</Nav.Link>
              </Nav.Item>
              <Dropdown>
                <Dropdown.Toggle variant="outline-light" id="dropdown-profile" className="bg-transparent border-white text-white">
                  Profilo
                </Dropdown.Toggle>
                <Dropdown.Menu className="bg-light border-white">
                  <Dropdown.Item href="#" style={{ color: "#9400D3	" }}>Modifica Profilo</Dropdown.Item>
                  <Dropdown.Item href="#" style={{ color: "#9400D3	" }}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Nav>

          {/* Main Content */}
          <div className="container">
            <div className="row text-center pt-5">
              <div className="col-8 offset-2">
                <h1 className="titleFont text-white">SerenaMente</h1>
                <p className="subtitleFont text-white">Aprirsi è il primo passo per essere liberi</p>
              </div>
            </div>

            <div className="col-12">
      <Carousel id="carouselExample">
        {/* Primo Slide */}
        <Carousel.Item>
          <Container fluid>
            <Row>
              <Col xs={3} className="p-1">
                <img src="Netflix-assets/Netflix-assets/assets/media/media0.webp" className="d-inline w-100" alt="..." />
              </Col>
              <Col xs={3} className="p-1">
                <img src="Netflix-assets/Netflix-assets/assets/media/media1.jpg" className="d-inline w-100" alt="..." />
              </Col>
              <Col xs={3} className="p-1">
                <img src="Netflix-assets/Netflix-assets/assets/media/media2.webp" className="d-inline w-100" alt="..." />
              </Col>
              <Col xs={3} className="p-1">
                <img src="Netflix-assets/Netflix-assets/assets/media/media3.webp" className="d-inline w-100" alt="..." />
              </Col>
            </Row>
          </Container>
        </Carousel.Item>

        {/* Secondo Slide */}
        <Carousel.Item>
          <Container fluid>
            <Row>
              <Col xs={3} className="p-1">
                <img src="Netflix-assets/Netflix-assets/assets/media/media4.jpg" className="d-inline w-100" alt="..." />
              </Col>
              <Col xs={3} className="p-1">
                <img src="Netflix-assets/Netflix-assets/assets/media/media5.webp" className="d-inline w-100" alt="..." />
              </Col>
              <Col xs={3} className="p-1">
                <img src="Netflix-assets/Netflix-assets/assets/media/media6.jpg" className="d-inline w-100" alt="..." />
              </Col>
              <Col xs={3} className="p-1">
                <img src="Netflix-assets/Netflix-assets/assets/media/media7.webp" className="d-inline w-100" alt="..." />
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </div>
    </div>

          {/* SVG Divider */}
          <div className="custom-shape-divider-bottom-1741786601">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {modalType && (
        <Modal show={true} onHide={handleClose} centered className="custom-modal">
          <Modal.Header closeButton>
            <Modal.Title className="modal-title-custom ">{modals[modalType].title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body-custom text-center">{modals[modalType].body}</Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default Dashboard;