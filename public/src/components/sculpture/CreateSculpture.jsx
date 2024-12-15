import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SculptureCreate() {
  const [sculptureTitle, setSculptureTitle] = useState('');
  const [sculptureMaterial, setSculptureMaterial] = useState('');
  const [sculptorId, setSculptorId] = useState(1);

  const [sculptors, setSculptors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:5001/api/mssql/sculptors')
      .then((response) => {
        const fetchedSculptors = response.data;
        if (fetchedSculptors.length > 0) {
          setSculptors(fetchedSculptors);
        }
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const sculptureData = {
      Title: sculptureTitle,
      Material: sculptureMaterial,
      SculptorId: sculptorId
    };
    console.log(sculptureData.SculptorId)
    axios.post('http://localhost:5001/api/mssql/sculptures', sculptureData)
      .then((response) => {
        console.log('Category created successfully:', response.data);
        navigate('/sculptures');
      })
      .catch((error) => {
        console.error('Error creating category:', error);
      });
  };

  return (
    <div>
      <h2>Create Sculpture</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Sculpture Title:</label>
          <input
            type="text"
            value={sculptureTitle}
            onChange={(e) => setSculptureTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Material</label>
          <input
            type="text"
            value={sculptureMaterial}
            onChange={(e) => setSculptureMaterial(e.target.value)}
          />
        </div>
        <div>
          <label>Sculptor:</label>
          <select
            name="SculptorID"
            value={sculptorId}
            onChange={(e) => setSculptorId(e.target.value)}
          >
            {sculptors.map((sculptor) => (
              <option key={sculptor.SculptorId} value={sculptor.SculptorId}>
                {sculptor.SculptorId}
              </option>
            ))}
          </select>
        </div>
        
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default SculptureCreate;
