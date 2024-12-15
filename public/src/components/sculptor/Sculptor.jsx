import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Dashboard from '../Dashboard';

function Sculptor() {
  const [sculptors, setSculptors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/api/mssql/sculptors')
      .then((response) => {
        setSculptors(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <div>
    <Dashboard />
<button type="button" className="btn btn-primary m-2 float-end">
<Link style={{color: 'white'}} to={`/createSculptor`}>Create</Link>
</button>
    <table className="table table-striped" >
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>BirthYear</th>
          <th>Edit</th>

        </tr>
      </thead>
      <tbody >
        {sculptors.map((item) => (
          <tr key={item.SculptorId}>
            <td>{item.SculptorId}</td>
            <td>{item.Name}</td>
            <td>{item.BirthYear}</td>
            <td><Link to={`/editAuthor/${item.SculptorId}`}>Edit</Link></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default Sculptor;
