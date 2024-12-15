import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function CategoryDelete() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.delete(`http://localhost:5001/api/mssql/categories/${id}`)
      .then((response) => {
        console.log('Category deleted successfully:', response.data);
        navigate('/categories');
      })
      .catch((error) => {
        console.error('Error deleting category:', error);
      });
  }, [id, navigate]);

  return (
    <div>
      <h2>Delete Category</h2>
      <p>Deleting category...</p>
    </div>
  );
}

export default CategoryDelete;
