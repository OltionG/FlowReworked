import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function AuthorEdit() {
  const { id } = useParams();
  const [authorName, setAuthorName] = useState('');
  const [authorBirthyear, setAuthorBirthyear] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5001/api/mssql/authors/${id}`)
      .then((response) => {
        setAuthorName(response.data.Name);
        setAuthorBirthyear(response.data.BirthYear);
      })
      .catch((error) => {
        console.error('Error fetching category:', error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const authorData = {
        Name: authorName,
        BirthYear: authorBirthyear
      };
  

    axios.put(`http://localhost:5001/api/mssql/authors/${id}`, authorData)
      .then((response) => {
        console.log('Category updated successfully:', response.data);
        navigate('/authors');
      })
      .catch((error) => {
        console.error('Error updating category:', error);
      });
  };

  return (
    <div>
      <h2>Edit Category</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label>Author Name:</label>
          <input
            type="text"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
          />
        </div>
        <div>
          <label>Author Birthyear:</label>
          <input
            type="number"
            value={authorBirthyear}
            onChange={(e) => setAuthorBirthyear(e.target.value)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default AuthorEdit;
