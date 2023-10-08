import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import { useDispatch } from "react-redux";
const MovieFrom = ({sendData , editmovie }) => {
    const [photo,setPhoto] = useState(editmovie?editmovie.image:"");
    const [title,setTitle] = useState(editmovie?editmovie.title:"");
    const [price,setPrice] = useState(editmovie?editmovie.price:"");
    const [rate,setRate] = useState(editmovie?editmovie.rate:"");
  // const dispatch = useDispatch();
  const movieFromSubmit = (e) => {
    e.preventDefault();
    sendData({
        image:photo,
        title:title,
        price:price,
        rate:rate
    })

    // dispatch(
    //   addMovie({
    //     image: photo,
    //     title: title,
    //     price: price,
    //     rate: rate,
    //   })
    // );
  };
  return (
    <div className="my-5">
      <Form onSubmit={movieFromSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Photo</Form.Label>
          <Form.Control
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            type="text"  
            required
            placeholder="Enter photo url"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"  
            required
            placeholder="Enter Title"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            value={price}  
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            required
            placeholder="Enter Price"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Rate</Form.Label>
          <Form.Control
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            type="text"  
            required
            placeholder="Enter Rate"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {editmovie?"Save" :"Add"}
        </Button>
      </Form>
    </div>
  );
};

export default MovieFrom;
