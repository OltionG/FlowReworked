import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function CategoryEdit() {
  const { id } = useParams();
  const [categoryName, setCategoryName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5001/api/mssql/categories/${id}`)
      .then((response) => {
        setCategoryName(response.data.CategoryName);
      })
      .catch((error) => {
        console.error('Error fetching category:', error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const categoryData = {
      CategoryName: categoryName
    };

    axios.put(`http://localhost:5001/api/mssql/categories/${id}`, categoryData)
      .then((response) => {
        console.log('Category updated successfully:', response.data);
        navigate('/categories');
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
          <label>Category Name:</label>
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default CategoryEdit;
