import React from "react";
import SingleCard from "../components/SingleCard";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Movies = () => {
  const movies = useSelector(p=>p);
  return (
<>
<Navbar/>
<Container>
     <Container className="listtransform">

     <h3 className="mt-5 soon ">Latest Reviews</h3>
      <Row>
        {movies.map(item=>
        <SingleCard title={item.title} price={item.price} id={item.id} rate={item.rate} photo={item.image}/>
        )}
      </Row>
     </Container>
    </Container>
    <Footer />

    
</>
  );
};

export default Movies;
