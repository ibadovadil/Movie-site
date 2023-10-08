import React, { useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { LangContext } from "../context/LangContext";

function App() {
  const [lang , setLang] =  useContext(LangContext);

  return (
    <Container className="my-3">
      <div className="soontext d-flex align-items-center justify-content-between">
        <h4 className="ms-3 soon">Coming Soon  </h4>
        <Link
          to={"/comingsoon"}
          className="btn btn-outline-danger wiewmore  mb-4  recentbtn"
          id="more"
        >
                    {lang === "az" ? "Daha çox":"    View More"}
          
        </Link>
      </div>
      <Container>
      <Row className="mt-4 ">
            <Col
              md={4}
              className="d-flex justify-content-center align-items-center"
            >
              <Card id="big-card-1">
                <Card.Body className="cardbody align-items-end">
                  <div className="cardflex">
                    <Card.Title>
                      <i className="fa-solid fa-play fs-4 me-3"></i>
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      <h5>Fire Neophyte One</h5>
                      <p>Coming Soon . Adventure</p>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col
              md={4}
              className="d-flex justify-content-center align-items-center"
            >
              <Card id="big-card-2">
                <Card.Body className="cardbody align-items-end">
                  <div className="cardflex">
                    <Card.Title>
                      <i className="fa-solid fa-play fs-4 me-3"></i>
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      <h5>The Egyptian Trailer</h5>
                      <p>Coming Soon . Movies</p>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col
              md={4}
              className="d-flex justify-content-center align-items-center"
            >
              <Card id="big-card-3">
                <Card.Body className="cardbody align-items-end">
                  <div className="cardflex">
                    <Card.Title>
                      <i className="fa-solid fa-play fs-4 me-3"></i>
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      <h5>Tribe League</h5>
                      <p>Coming Soon . TV</p>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
      </Container>

      <Container>
      <Row className="mt-4">
            <Col
              xs={12}
              sm={6}
              lg={3}
              className="d-flex justify-content-center align-items-center"
            >
              <Card id="small-card-9">
                <Card.Body className="cardbody align-items-end">
                  <div className="cardflex">
                    <Card.Title>
                      <i className="fa-solid fa-play fs-4 me-3"></i>
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      <h5>Game of Power</h5>
                      <p>Coming Soon . Movies</p>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col
              xs={12}
              sm={6}
              lg={3}
              className="d-flex justify-content-center align-items-center"
            >
              <Card id="small-card-10">
                <Card.Body className="cardbody align-items-end">
                  <div className="cardflex">
                    <Card.Title>
                      <i className="fa-solid fa-play fs-4 me-3"></i>
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      <h5>Fashion Victims</h5>
                      <p>Coming Soon . Movies</p>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col
              xs={12}
              sm={6}
              lg={3}
              className="d-flex justify-content-center align-items-center"
            >
              <Card id="small-card-11">
                <Card.Body className="cardbody align-items-end">
                  <div className="cardflex">
                    <Card.Title>
                      <i className="fa-solid fa-play fs-4 me-3"></i>
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      <h5>Modern Fairy</h5>
                      <p>Coming Soon . TV</p>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col
              xs={12}
              sm={6}
              lg={3}
              className="d-flex justify-content-center align-items-center"
            >
              <Card id="small-card-12">
                <Card.Body className="cardbody align-items-end">
                  <div className="cardflex">
                    <Card.Title>
                      <i className="fa-solid fa-play fs-4 me-3"></i>
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      <h5>Star Power:The Last </h5>
                      <p>Coming Soon . Movies</p>
                    </Card.Text>
                  </div>
                </Card.Body>{" "}
              </Card>
            </Col>
          </Row>
      </Container>
    </Container>
  );
}

export default App;
