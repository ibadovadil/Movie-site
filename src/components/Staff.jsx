import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Staff = () => {
  return (
    <>
      <Container className="bulletall">
        <div className="soontext">
          <h4 className="ms-3" style={{ fontSize: "20px", fontWeight: "bold" }}>
            Staff Picks
          </h4>
          <Link
            to={"/movies"}
            className="btn btn-outline-danger wiewmore  me-3 "
            id="more"
          >
            View More
          </Link>
        </div>
        <div className="bullet">
          <Col>
            <div className="bullettext align-items-end">
              <div className="btd">
                <h3>
                  Bulletproof list of <br /> Best WW2 Movies
                </h3>
                <Link className="btn btn-outline-dark">EXPLORE</Link>
              </div>
            </div>
          </Col>
          <div className="bulletcard">
            <Container>
              <Row>
                <Col sm={12} lg={4} md={12}>
                  <div className="bc1 justify-content-end ">
                    <div className="bch">
                      <h5 className="ms-2">End of WW2</h5>
                      <div className="sbc d-flex ms-2">
                        <div className="me-2 mb-2">
                          <i
                            className="fa-solid fa-star"
                            style={{ color: "#bde203" }}
                          />
                          <i
                            className="fa-solid fa-star"
                            style={{ color: "#bde203" }}
                          />
                          <i
                            className="fa-solid fa-star"
                            style={{ color: "#bde203" }}
                          />
                          <i
                            className="fa-solid fa-star"
                            style={{ color: "#757575" }}
                          />
                          <i
                            className="fa-solid fa-star"
                            style={{ color: "#757575" }}
                          />
                        </div>
                        71/100
                      </div>
                    </div>
                  </div>
                </Col>
                <Col sm={12} lg={4} md={12}>
                  <div className="bc2  justify-content-end ">
                    <div className="bch">
                      <h5 className="ms-2">The bold red line</h5>
                      <div className="sbc d-flex ms-2">
                        <div className="me-2 mb-2">
                          <i
                            className="fa-solid fa-star"
                            style={{ color: "#bde203" }}
                          />
                          <i
                            className="fa-solid fa-star"
                            style={{ color: "#bde203" }}
                          />
                          <i
                            className="fa-solid fa-star"
                            style={{ color: "#bde203" }}
                          />
                          <i
                            className="fa-solid fa-star"
                            style={{ color: "#bde203" }}
                          />

                          <i
                            className="fa-solid fa-star"
                            style={{ color: "#bde203" }}
                          />
                        </div>
                        95/100
                      </div>
                    </div>
                  </div>
                </Col>
                <Col sm={12} lg={4} md={12}>
                  <div className="bc3   justify-content-end">
                    <div className="bch">
                      <h5 className="ms-2">Rage</h5>
                      <div className="sbc d-flex ms-2">
                        <div className="me-2 mb-2">
                          <i
                            className="fa-solid fa-star"
                            style={{ color: "#bde203" }}
                          />
                          <i
                            className="fa-solid fa-star"
                            style={{ color: "#bde203" }}
                          />
                          <i
                            className="fa-solid fa-star"
                            style={{ color: "#bde203" }}
                          />
                          <i
                            className="fa-solid fa-star"
                            style={{ color: "#bde203" }}
                          />
                          <i
                            className="fa-solid fa-star"
                            style={{ color: "#757575" }}
                          />
                        </div>
                        88/100
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Staff;
