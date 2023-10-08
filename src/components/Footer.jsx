import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col
            xs={12}
            sm={4}
            className="text-center mb-3 mb-sm-0 d-flex flex-row justify-content-center"
          >
            <div className="circle">
              <i
                class="fa-brands fa-facebook-f"
                style={{ color: "#ffffff", fontSize: "20px" }}
              ></i>
            </div>
            <div className="circle">
              <i
                class="fa-brands fa-x-twitter"
                style={{ color: "#ffffff", fontSize: "20px" }}
              ></i>
            </div>
            <div className="circle">
              <i
                className="fa-brands fa-instagram"
                style={{ color: "#ffffff", fontSize: "20px" }}
              />
            </div>
          </Col>
          <Col
            xs={12}
            sm={4}
            className="text-center mb-3 mb-sm-0 d-flex justify-content-center"
          >
            <div className="big-icon">
              <img
                style={{ marginRight: "90px" }}
                src="https://newstar.bold-themes.com/movies/wp-content/uploads/sites/19/2018/01/logo-white.png"
                alt=""
              />
            </div>
          </Col>
          <Col
            xs={12}
            sm={4}
            className="text-center d-flex flex-row justify-content-center"
          >
            <Nav className="footer-links">
              <Link
                to="/movies"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Nav.Link className="footertext" style={{ color: "white" }}>
                  Home
                </Nav.Link>
              </Link>
              <Link
                to="/movies"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Nav.Link className="footertext" style={{ color: "white" }}>
                  Coming Soon
                </Nav.Link>
              </Link>
              <Link
                to="/movies"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Nav.Link className="footertext" style={{ color: "white" }}>
                  Movies
                </Nav.Link>
              </Link>
              <Link
                to="/movies"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Nav.Link className="footertext" style={{ color: "white" }}>
                  News
                </Nav.Link>
              </Link>
            </Nav>
          </Col>
        </Row>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-12 col-sm-12  flex-column d-flex align-items-center justify-content-between">
            <span className="mb-3 mb-md-0 text-body-secondary">© 2023 </span>
            <span>Adil Ibadov</span>
          </div>
        </footer>
      </Container>
    </footer>
  );
};

export default Footer;
