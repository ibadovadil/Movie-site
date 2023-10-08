import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import SingleCard from './SingleCard';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LangContext } from '../context/LangContext';

const LastesFilms = () => {
  const [lang , setLang] =  useContext(LangContext);

  const movies = useSelector(p=>p);
  return (
    <Container className='my-3'  >
        <div className="recent d-flex justify-content-between align-items-center">
                   
        <h4 className='text-warning '>  {lang === "az" ? "Son Əlavə Olunanlar":"   Recent Additions"} </h4>
       <Link to={"/movies"} className='btn btn-outline-danger wiewmore mb-4  recentbtn'>          {lang === "az" ? "Daha çox":"    View More"}</Link>

        </div>
      <Row>
    {movies.slice(4,8).map(item=>
    <SingleCard title={item.title} price={item.price} id={item.id} rate={item.rate} photo={item.image}/>
    )}
  </Row>
    </Container>
  )
}

export default LastesFilms