import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardMove from "./CardMove";

const Northworld = () => {
  return (
    <>
      <div className="northmain">
        <Container>
          <div className="northtext  container">
            <Container>
              <h1>Northworld: Season One</h1>
              <p style={{
                width:"700px"
              }}>
                Set at the intersection of the near future and the reimagined
                past, explore a world in  which every human appetite can
                be indulged without consequence.
              </p>
              <Link to="/movies" className="btn btn-danger northbtn">
                READ ALL EPISODES REVIEWS{" "}
                <i
                  className="fa-solid fa-right-long ms-2"
                  style={{ color: "#ffffff" }}
                />
              </Link>
            </Container>
          </div>
          <div className="northslider mt-5">
            <CardMove />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Northworld;
