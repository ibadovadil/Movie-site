import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavbarTwo from '../components/NavbarTwo';
import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';
const Readmore = () => {
  const movie = useSelector(p=>p)
  const {id} = useParams();
  const productdetails = movie.find(p=>p.id.toString() === id)
  return (

    <>
    <NavbarTwo/>
    <Container className='my-5 detail' >
    <div className="card my-5" style={{maxWidth: 1300}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={productdetails.image} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title fs-1">{productdetails.title}</h5>
        <p className="card-text fs-4">Price :{productdetails.price} $</p>
        <p className="card-text "><small className="text-warning">{productdetails.rate} IMDB</small></p>
        <p className="card-text fs-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam quasi atque blanditiis! Ad rerum tenetur sequi sit nesciunt, sint totam. Iusto labore asperiores adipisci delectus sint, nulla officia fugit dicta explicabo in accusantium, quam officiis veritatis debitis. Ipsum sequi magni dolorem tenetur nisi itaque laborum? Beatae inventore explicabo sed temporibus</p>
      </div>
    </div>
  </div>
</div>
    </Container>
    <Footer />
      
    </>
    
  )
}

export default Readmore