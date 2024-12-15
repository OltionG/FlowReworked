import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SculptorCreate() {
  const [sculptorName, setSculptorName] = useState('');
  const [sculptorBirthyear, setSculptorBirthyear] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const sculptorData = {
      Name: sculptorName,
      BirthYear: sculptorBirthyear
    };

    axios.post('http://localhost:5001/api/mssql/sculptors', sculptorData)
      .then((response) => {
        console.log('Category created successfully:', response.data);
        navigate('/sculptors');
      })
      .catch((error) => {
        console.error('Error creating category:', error);
      });
  };

  return (
    <div>
      <h2>Create Sculptor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Sculptor Name:</label>
          <input
            type="text"
            value={sculptorName}
            onChange={(e) => setSculptorName(e.target.value)}
          />
        </div>
        <div>
          <label>Sculptor Birthyear:</label>
          <input
            type="number"
            value={sculptorBirthyear}
            onChange={(e) => setSculptorBirthyear(e.target.value)}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default SculptorCreate;
