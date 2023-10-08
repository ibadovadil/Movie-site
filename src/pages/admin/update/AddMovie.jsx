import { Container } from "react-bootstrap";
import MovieFrom from "../MovieFrom";
import { useDispatch } from "react-redux";
import {  addMovieToDatabase } from "../../../manager/actions/MovieAction";
import { useNavigate } from "react-router-dom";

function AddMovie() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <Container>
    <h1 className="text-center">Add Movie</h1>
    <MovieFrom sendData={(i)=>{
          dispatch(addMovieToDatabase(i))
          navigate("/admin")
    }}/>
    </Container>
  );
}

export default AddMovie;
