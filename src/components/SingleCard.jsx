import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function SingleCard({ photo, title, price, rate, id }) {
  return (
    <Col sm={12} md={3} className="my-5">
      <div className="card movie_card">
        <img
          src={photo}
          className="card-img-top"
          width={300}
          height={300}
          alt="film image"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <span className="movie_info">{price} $</span>
          <span className="movie_info float-right mx-3">
            <i className="fas fa-star" style={{ color: "#bcd30d" }} /> {rate}
          </span>
          <br />
          <Link to={`/details/${id}`}>
            {" "}
            <button type="button" className="btn btn-outline-dark mt-2">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </Col>
  );
}

export default SingleCard;
