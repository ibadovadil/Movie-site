import { Button, Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {removeMovieFromDatabase } from '../../manager/actions/MovieAction';

function Dashboard() {
  const movies = useSelector(p=>p);
  const dispatch = useDispatch();
  return (
    <Container className=''>
            <h1 className='text-center classs soon'>Admin Panel</h1>
    <Link  className="btn btn-success my-4 " to='/admin/add' >Add Movie</Link>
    <Link  className="btn btn-success my-4 mx-3 " to='/movies' >Back To Movies</Link>

<Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Photo</th>
          <th>Title</th>
          <th>Rate</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {movies.map((item , count)=>(
                  <tr>
                  <td>{count+1}</td>
                  <td><img src={item.image} width={100} alt="" /></td>
                  <td>{item.title}</td>
                  <td>{item.rate}</td>
                  <td><Link className='btn btn-warning'  to={`/admin/edit/${item.id}`}><i class="fa-regular fa-pen-to-square"></i></Link></td>
                  <td><Button onClick={()=>{dispatch(removeMovieFromDatabase(item.id))}} variant='danger'><i class="fa-solid fa-delete-left"></i></Button></td>
                </tr>
        ))}
       
      </tbody>
    </Table>


        </Container>
  );
}

export default Dashboard;