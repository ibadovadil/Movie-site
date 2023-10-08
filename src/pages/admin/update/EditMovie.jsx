import React from "react";
import MovieFrom from "../MovieFrom";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editMovieFromDatabase } from "../../../manager/actions/MovieAction";

const EditMovie = () => {
  const { id } = useParams();
  const movies = useSelector(p=>p);
  const selectmovie = movies.find(i=>i.id.toString() === id);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <Container>
        <h1 className='text-center my-3'>Edit Movie</h1>
        <MovieFrom editmovie={selectmovie} sendData={(i)=>{
            dispatch(editMovieFromDatabase(selectmovie.id,i))   
            navigate('/admin')

        }}/>
    </Container>
  );
};

export default EditMovie;
