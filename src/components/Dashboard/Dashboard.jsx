import React, { useState } from "react";
import { Dropdown, Container, Nav, Navbar, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight, FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaHandsHelping, FaEnvelopeOpenText, FaEnvelope, FaComments } from "react-icons/fa";
import "./Dashboard.css";
import immagineBullismo from "./images/bullismo.jpg";
import immagineDepressione from "./images/depression.jpeg";
import immagineDipendenze from "./images/drugAddiction.jpg";
import immagineDisturbiAlimentari from "./images/eatingDisorder.png";
import immagineSaluteMentale from "./images/salute-mentale.jpg";
import immagineViolenzaCoppia from "./images/violenza.jpg";
import selfCare from "./images/abbraccio.jpg";


const modals = {
  telefonoAmico: { title: "Telefono Amico", body: "Numero di telefono : 02 2327 2327" },
  antiviolenza: { title: "Antiviolenza e Stalking", body: "Numero di telefono : 1522" },
  disturbiAlimentari: { title: "SOS Disturbi Alimentari", body: "Numero di telefono : 800.180.969" },
  suicidio: { title: "Servizio per la Prevenzione del Suicidio", body: "Numero di telefono : 800.860022" },
  dipendenzaDroghe: { title: "Telefono Verde Droga", body: "Numero di telefono : 800 186070" },
};

const articlesData = [
  {
    id: 1,
    title: "Violenza",
    image: immagineViolenzaCoppia,
    link: "https://www.studiopsicologiaabruzzo.it/blog/violenza-tra-partner-e-nella-coppia-unanalisi-psicologica/",
    description: "La violenza nelle relazioni è un problema serio che richiede attenzione e supporto.",
  },
  {
    id: 2,
    title: "Dipendenze",
    image: immagineDipendenze,
    link: "https://www.grupposandonato.it/campagne/dipendenze-cosa-sono-come-si-trattano",
    description: "Le dipendenze possono influenzare ogni aspetto della vita. Impara a riconoscerle e a cercare aiuto.",
  },
  {
    id: 3,
    title: "Bullismo",
    image: immagineBullismo,
    link: "https://www.alessandrorotondo.com/disturbi/bullismo/",
    description: "Il bullismo è un fenomeno diffuso che può avere conseguenze gravi.",
  },
  {
    id: 4,
    title: "Depressione",
    image: immagineDepressione,
    link: "https://www.grupposandonato.it/campagne/depressione-sintomi-trattamenti",
    description: "La depressione è una condizione complessa che richiede comprensione e supporto.",
  },
  {
    id: 5,
    title: "Disturbi Alimentari",
    image: immagineDisturbiAlimentari,
    link: "https://www.psicopatologiaalimentazione.it/per-i-familiari/cosa-sono-i-disturbi-alimentari/",
    description: "I disturbi alimentari sono condizioni serie che richiedono un approccio multidisciplinare.",
  },
  {
    id: 6,
    title: "Salute Mentale",
    image: immagineSaluteMentale,
    link: "https://www.my-personaltrainer.it/salute/salute-mentale.html",
    description: "La salute mentale è fondamentale per il benessere generale.",
  },
];

const Dashboard = () => {
  const [modalType, setModalType] = useState(null);
  const [clickedCards, setClickedCards] = useState([]);
  const [showWelcomeModal, setShowWelcomeModal] = useState(true);
  const [navbarColor] = useState("#603311");

  const handleShow = (type) => setModalType(type);
  const handleClose = () => setModalType(null);

  const handleCardClick = (id) => {
    if (!clickedCards.includes(id)) {
      setClickedCards([...clickedCards, id]);
    }
  };



  const CardSlider = () => {
    const [currentCard, setCurrentCard] = useState(0);
    const [fade, setFade] = useState(false);
    const [cards] = useState([
      { id: 1, image: "https://www.powned.it/wp-content/uploads/2023/05/Immagine-2023-05-03-120801.jpg", title: "Dante", link: "https://example.com/card1" },
      { id: 2, image: "https://images.squarespace-cdn.com/content/v1/65c9f92dbcea263ed06a6b1b/0f63b715-ac88-491e-9078-d6ed18f2a2d6/MARZA.jpg?format=1000w", title: "Francesco", link: "https://example.com/card2" },
      { id: 3, image: "https://gamelegends.it/wp-content/uploads/image.hynerd.it/uploads/2023/07/Tumblurr.webp", title: "Gianmarco", link: "https://example.com/card3" },
      { id: 4, image: "https://wips.plug.it/cips/libero.it/magazine/cms/2024/05/cg.jpg?w=545&h=343&a=c", title: "Mirko", link: "https://example.com/card4" },
      { id: 5, image: "https://images.everyeye.it/img-notizie/jok3r-fratello-cicciogamer89-bannato-twitch-non-partner-v4-619696-1280x960.webp", title: "Simone", link: "https://example.com/card5" },
      { id: 6, image: "https://www.officine-25.it/wp-content/uploads/2023/02/stefano-lepri-influencer.jpg", title: "Stefano", link: "https://example.com/card6" },
    ]);

    const nextCard = () => {
      setFade(true);
      setTimeout(() => {
        setCurrentCard((prev) => (prev + 1) % cards.length);
        setFade(false);
      }, 300);
    };

    const prevCard = () => {
      setFade(true);
      setTimeout(() => {
        setCurrentCard((prev) => (prev - 1 + cards.length) % cards.length);
        setFade(false);
      }, 300);
    };

    return (
      <Container id="scopri-volontari-section">
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <h3 style={{ fontFamily: "Tinos", marginBottom: "70px", fontWeight: "bold", fontSize: "40px", color: "#603311" }}>
              Scopri i nostri volontari
            </h3>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center">
          <Col xs="auto" className="pe-0">
            <Button variant="bg-transparent border border-0 p-0" onClick={prevCard}>
              <FaArrowLeft size={32} color="#603311" />
            </Button>
          </Col>
          <Col xs={8} md={6}>
            <Row className="justify-content-center">
              <div className={`card-group ${fade ? "fade-out" : "fade-in"}`} style={{ fontFamily: "Tinos", fontSize: "4rem" }}>
                <Col key={cards[currentCard].id} xs={12} className="mb-3">
                  <div className="d-flex flex-column align-items-center justify-content-center text-center">
                    <a href={cards[currentCard].link} target="_blank" rel="noopener noreferrer">
                      <img
                        src={cards[currentCard].image}
                        alt=""
                        className="img-fluid rounded-circle"
                        style={{
                          width: "250px",
                          height: "250px",
                          objectFit: "cover",
                          border: "4px solid #603311",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        }}
                      />
                    </a>
                    <h5 style={{ fontSize: "1.5rem", marginTop: "25px", color: "#603311" }}>
                      {cards[currentCard].title}
                    </h5>
                  </div>
                </Col>
              </div>
            </Row>
          </Col>
          <Col xs="auto" className="ps-0">
            <Button variant="bg-transparent border border-0 p-0" onClick={nextCard}>
              <FaArrowRight size={32} color="#603311" />
            </Button>
          </Col>
        </Row>
      </Container>
    );
  };

  return (
    <div className="container-fluid d-flex flex-column min-vh-100 p-0">

      <Navbar expand="lg" className="fixed-top " style={{ backgroundColor: "#603311", zIndex: 1000, transition: "background-color 0.3s ease" }}>
        <Container fluid>
          <Navbar.Toggle aria-controls="navbar-nav" style={{ borderColor: "#603311", color: "#603311", paddingTop: "10px" }} />
          <Navbar.Collapse id="navbar-nav" className="navbar-collapse-custom">
            <Nav className="me-auto">
              <Dropdown>
                <Dropdown.Toggle
                  variant="outline-light"
                  id="dropdownMenuButton1"
                  style={{
                    backgroundColor: "#DEB887",
                    borderColor: "#603311",
                    color: "#603311",
                    fontFamily: "Tinos",
                  }}
                >
                  Chiedi Aiuto
                </Dropdown.Toggle>
                <Dropdown.Menu
                  style={{
                    backgroundColor: "#DEB887",
                    borderColor: "#603311",
                    color: "#603311",
                    fontFamily: "Tinos",
                  }}
                >
                  <Dropdown.Item
                    className="custom-dropdown-item"
                    style={{ color: "#603311" }}
                    onClick={() => handleShow("telefonoAmico")}
                  >
                    Telefono Amico
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="custom-dropdown-item"
                    style={{ color: "#603311" }}
                    onClick={() => handleShow("antiviolenza")}
                  >
                    Antiviolenza e Stalking
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="custom-dropdown-item"
                    style={{ color: "#603311" }}
                    onClick={() => handleShow("disturbiAlimentari")}
                  >
                    Disturbi Alimentari
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="custom-dropdown-item"
                    style={{ color: "#603311" }}
                    onClick={() => handleShow("suicidio")}
                  >
                    Prevenzione del Suicidio
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="custom-dropdown-item"
                    style={{ color: "#603311" }}
                    onClick={() => handleShow("dipendenzaDroghe")}
                  >
                    Dipendenze
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
            <Nav className="ms-auto">
              <Dropdown align="end">
                <Dropdown.Toggle
                  variant="outline-light"
                  id="dropdown-profile"
                  style={{
                    backgroundColor: "#DEB887",
                    borderColor: "#603311",
                    color: "#603311",
                    fontFamily: "Tinos",
                  }}
                >
                  Profilo
                </Dropdown.Toggle>
                <Dropdown.Menu
                  style={{
                    backgroundColor: "#DEB887",
                    borderColor: "#603311",
                    color: "#603311",
                    fontFamily: "Tinos",
                  }}
                >
                  <Dropdown.Item style={{ color: "#603311" }} href="#">
                    Modifica Profilo
                  </Dropdown.Item>
                  <Dropdown.Item style={{ color: "#603311" }} href="#">
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="flex-grow-1" style={{ paddingTop: "80px" }}>
        <div style={{ width: "100%", minHeight: "70vh", display: "flex", alignItems: "center" }}>
          <Container>
            <Row className="align-items-center" >
              <Col md={6} className="text-start">
                <h1 className="subtitleFont text-with-shadow text-center" style={{ color: "#603311", textShadow: "-1px 2px 3px", fontFamily: "Tangerine", fontSize: "70px", fontWeight: "bold" }}>Aprirsi è il primo passo per sentirsi liberi</h1>
              </Col>
              <Col md={6} className="text-center">
                <img
                  src={selfCare}
                  alt=""
                  className="img-fluid rounded-circle"
                  style={{ width: "300px", height: "300px", objectFit: "cover", boxShadow: "0 4px 8px rgb(0, 0, 0)" }}
                />
                <div className="text-center mt-4">
                  <Button
                    style={{
                      backgroundColor: "#DEB887",
                      borderRadius: "25px",
                      padding: "10px 30px",
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      borderColor: "#603311",
                      color: "#603311",
                      fontFamily: "Tinos",
                      textDecoration: "none",
                    }}
                    onClick={() => {
                      const volontariSection = document.getElementById("scopri-volontari-section");
                      if (volontariSection) {
                        volontariSection.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }}
                  >
                    Inizia ora il tuo percorso
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div style={{ padding: "50px 0" }}>
          <Container>
            <Row className="justify-content-center">
              <Col xs={12} md={10}>

                <Card style={{ backgroundColor: "#DEB887", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", padding: "20px" }}>
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col md={2} className="text-center">
                        <FaHandsHelping size={48} color="#603311" />
                      </Col>
                      <Col md={10} className="text-center">
                        <Card.Title style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "20px", fontFamily: "Tinos", color: "#603311" }}>
                          Chi sono i nostri volontari?
                        </Card.Title>
                        <Card.Text style={{ fontSize: "1.1rem", color: "#603311", fontFamily: "Tinos" }}>
                          I volontari della nostra associazione sono persone che hanno scelto di dedicare il loro tempo all’ascolto e al supporto emotivo di chi ne ha bisogno. Non sono psicologi né terapeuti, ma persone formate per offrire un confronto empatico, senza giudizio e in totale riservatezza.
                          <br /><br />
                          Ogni volontario condivide i valori di accoglienza, rispetto e ascolto attivo, creando un ambiente sicuro dove chiunque può esprimersi liberamente. Il nostro obiettivo è offrire uno spazio in cui sentirsi compresi, anche nei momenti più difficili.
                        </Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>

                <Card style={{ backgroundColor: "#DEB887", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", padding: "20px", marginTop: "20px" }}>
                  <Card.Body>
                    <Card.Title className="text-center" style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "30px", fontFamily: "Tinos", color: "#603311" }}>
                      Come funziona?
                    </Card.Title>

                    <Row>
                      <Col md={4} className="mb-4 text-center">
                        <FaEnvelopeOpenText size={48} color="#603311" style={{ marginBottom: "10px" }} /> {/* Icona SVG */}
                        <h5 style={{ fontSize: "1.5rem", fontWeight: "bold", fontFamily: "Tinos", color: "#603311" }}>Invia la tua richiesta</h5>
                        <p style={{ fontSize: "1rem", color: "#603311", fontFamily: "Tinos" }}>
                          Raccontaci, con poche parole, il motivo per cui hai bisogno di parlare. Non serve scrivere un lungo messaggio, basta anche solo un accenno su ciò che stai vivendo.
                        </p>
                      </Col>

                      <Col md={4} className="mb-4 text-center">
                        <FaEnvelope size={48} color="#603311" style={{ marginBottom: "10px" }} /> {/* Icona SVG */}
                        <h5 style={{ fontSize: "1.5rem", fontWeight: "bold", fontFamily: "Tinos", color: "#603311" }}>Riceverai un’email di risposta</h5>
                        <p style={{ fontSize: "1rem", color: "#603311", fontFamily: "Tinos" }}>
                          Un volontario del nostro team leggerà la tua richiesta e ti risponderà nel più breve tempo possibile.
                        </p>
                      </Col>

                      <Col md={4} className="mb-4 text-center">
                        <FaComments size={48} color="#603311" style={{ marginBottom: "10px" }} /> {/* Icona SVG */}
                        <h5 style={{ fontSize: "1.5rem", fontWeight: "bold", fontFamily: "Tinos", color: "#603311" }}>Scegli il modo in cui parlare</h5>
                        <p style={{ fontSize: "1rem", color: "#603311", fontFamily: "Tinos" }}>
                          Potrai concordare con il volontario il modo che preferisci per comunicare: chat, chiamata o videochiamata.
                        </p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        <div style={{ paddingTop: "50px", marginTop: "80px" }}>
          <CardSlider />
        </div>

        <Container>
          <Row className="justify-content-center mt-5">
            <Col xs={12} className="text-center">
              <h3 className="titleFont" style={{ fontSize: "2rem", fontWeight: "bold", fontSize: "40px", marginBottom: "70px", marginTop: "80px", fontFamily: "Tinos", color: "#603311" }}>
                Per saperne di più
              </h3>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              {articlesData.slice(0, 3).map((article) => (
                <a
                  key={article.id}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <Card
                    className="mb-4"
                    style={{
                      backgroundColor: "#DEB887",
                      borderRadius: "15px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-10px)";
                      e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
                    }}
                  >
                    <Card.Body className="d-flex align-items-center">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="img-fluid rounded"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                          marginRight: "15px",
                          border: "2px solid #603311",
                          borderRadius: "10px",
                        }}
                      />
                      <div>
                        <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold", fontFamily: "Tinos", color: "#603311" }}>
                          {article.title}
                        </Card.Title>
                        <Card.Text style={{ fontSize: "0.9rem", color: "#603311", fontFamily: "Tinos" }}>
                          {article.description}
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </a>
              ))}
            </Col>
            <Col xs={12} md={6}>
              {articlesData.slice(3, 6).map((article) => (
                <a
                  key={article.id}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  <Card
                    className="mb-4"
                    style={{
                      backgroundColor: "#DEB887",
                      borderRadius: "15px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-10px)";
                      e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
                    }}
                  >
                    <Card.Body className="d-flex align-items-center">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="img-fluid rounded"
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "cover",
                          marginRight: "15px",
                          border: "2px solid #603311",
                          borderRadius: "10px",
                        }}
                      />
                      <div>
                        <Card.Title style={{ fontSize: "1.5rem", fontWeight: "bold", fontFamily: "Tinos", color: "#603311" }}>
                          {article.title}
                        </Card.Title>
                        <Card.Text style={{ fontSize: "0.9rem", color: "#603311", fontFamily: "Tinos" }}>
                          {article.description}
                        </Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </a>
              ))}
            </Col>
          </Row>
        </Container>
      </div>

      <footer className="py-4" style={{ marginTop: "100px", backgroundColor: "#603311" }}>
        <Row className="justify-content-center align-items-center">
          <div className="d-flex flex-column align-items-center gap-2">
            <div className="d-flex justify-content-center gap-4">
              <a href="https://instagram.com" className="text-decoration-none" style={{ color: "#DEB887" }}>
                <FaInstagram size={24} />
              </a>
              <a href="https://facebook.com" className="text-decoration-none" style={{ color: "#DEB887" }}>
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" className="text-decoration-none" style={{ color: "#DEB887" }}>
                <FaTwitter size={24} />
              </a>
              <a href="https://youtube.com" className="text-decoration-none" style={{ color: "#DEB887" }}>
                <FaYoutube size={24} />
              </a>
            </div>
            <div className="mt-2" style={{ color: "#DEB887", fontFamily: "Tinos" }}>
              © 2023 SerenaMente. Tutti i diritti riservati.
            </div>
          </div>
        </Row>
      </footer>

      <Modal show={showWelcomeModal} onHide={() => setShowWelcomeModal(false)} centered className="custom-welcome-modal" style={{ animation: "slideIn 0.7s ease-out", }}>
        <Modal.Header style={{ backgroundColor: "#603311", border: "none", fontFamily: "Tangerine", borderTopLeftRadius: "15px", borderTopRightRadius: "15px" }}>
          <Modal.Title className="modal-title-custom subtitleFont text-center w-100" style={{ color: "#DEB887", fontSize: "50px", fontWeight: "bold" }}>
            <FaHandsHelping className="me-2" style={{ color: "#DEB887", fontSize: "40px" }} />
            Benvenuto su SerenaMente
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p style={{ fontFamily: "Tinos" }}>
            Questo sito è nato dalla convinzione che ogni emozione meriti uno spazio per essere ascoltata e compresa. Qui, vogliamo offrirti un luogo sicuro, dove poter condividere le tue esperienze, trovare conforto e scoprire che non sei solo.
          </p>
          <p style={{ fontFamily: "Tinos" }}>
            Crediamo nel potere delle parole gentili, dell’ascolto e della connessione umana. Questo è il nostro modo di prenderci cura di te, con rispetto e senza giudizi.
          </p>
          <p style={{ fontFamily: "Tinos" }}>
            Benvenuto in questo spazio, <br />dove le emozioni trovano casa 🏠
          </p>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#603311", border: "none", justifyContent: "center", padding: "0.5rem" }}>
          <Button
            style={{
              backgroundColor: "#603311",
              border: "none",
              width: "100%",
              fontSize: "2rem",
              fontWeight: "bold",
              fontFamily: "Tangerine, cursive",
              padding: "0.25rem 1rem",
              textDecoration: "none",
              color: "#DEB887",
            }}
            onClick={() => setShowWelcomeModal(false)}
          >
            Entra
          </Button>
        </Modal.Footer>
      </Modal>

      {modalType && (
        <Modal show={true} onHide={handleClose} centered className="custom-modal">
          <Modal.Header closeButton>
            <Modal.Title className="modal-title-custom">{modals[modalType].title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body-custom text-center">{modals[modalType].body}</Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default Dashboard;