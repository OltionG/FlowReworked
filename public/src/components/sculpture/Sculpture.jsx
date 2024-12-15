import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Dashboard from '../Dashboard';

function Sculpture() {
  const [sculptures, setSculptures] = useState([]);
  const [allSculptures, setAllSculptures] = useState([]);
  const [filter, setFilter] = useState('');
  const [sculptorId, setSculptorId] = useState('');
  const [sculptors, setSculptors] = useState([]);
  const [sculptureId, setSculptureId] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5001/api/mssql/sculptures')
      .then((response) => {
        setAllSculptures(response.data);
        setSculptures(response.data);
      })
      .catch((error) => {
        console.error('Error fetching sculptures:', error);
      });
  }, []);

  useEffect(() => {
    axios.get('http://localhost:5001/api/mssql/sculptors')
      .then((response) => {
        setSculptors(response.data);
      })
      .catch((error) => {
        console.error('Error fetching sculptors:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      SculptureId: sculptureId,
    };
    
console.log(formData.SculptureId)
    axios
      .put(`http://localhost:5001/api/mssql/sculpture`, formData)
      .then((response) => {
        console.log('Data updated successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error updating data:', error);
      });
  };
  const filterData = () => {
    let filteredSculptures = allSculptures;


    if (sculptorId !== '' && !Array.isArray(sculptorId)) {
      filteredSculptures = filteredSculptures.filter((sculpture) => sculpture.SculptorId === parseInt(sculptorId));
    }

    setSculptures(filteredSculptures);
  };

  return (
    <div>
      <Dashboard />
      
      <div>
        <label>Filter by Sculptor:</label>
        <select
          name="SculptorID"
          value={sculptorId}
          onChange={(e) => setSculptorId(e.target.value)}
        >
          <option value="">Select an sculptor</option>
          {sculptors.map((sculptor) => (
            <option key={sculptor.SculptorId} value={sculptor.SculptorId}>
              {sculptor.Name}
            </option>
          ))}
        </select>
      </div>

      <button type="button" className="btn btn-primary m-2" onClick={filterData}>Filter</button>
      <button type="button" className="btn btn-primary m-2 float-end">
        <Link style={{ color: 'white' }} to={`/createSculpture`}>Create</Link>
      </button>
            <form onSubmit={handleSubmit}>
            <div>
          <label>SculptureId:</label>
          <input
            type="number"
            value={sculptureId}
            onChange={(e) => setSculptureId(e.target.value)}
          />
        </div>
        <button type="submit">Delete</button>
            </form>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Material</th>
            <th>SculptorID</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {sculptures.map((item) => (
            <tr key={item.SculptureId}>
              <td>{item.SculptureId}</td>
              <td>{item.Title}</td>
              <td>{item.Material}</td>
              <td>{item.SculptorId}</td>
              <td><Link to={`/editSculpture/${item.SculptureID}`}>Edit</Link></td>
              <td><Link to={`/deleteSculpture/${item.SculptureID}`}>Delete</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Sculpture;
