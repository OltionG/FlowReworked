import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CategoryCreate() {
  const [categoryName, setCategoryName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const categoryData = {
      CategoryName: categoryName
    };

    axios.post('http://localhost:5001/api/mssql/categories', categoryData)
      .then((response) => {
        console.log('Category created successfully:', response.data);
        navigate('/categories');
      })
      .catch((error) => {
        console.error('Error creating category:', error);
      });
  };

  return (
    <div>
      <h2>Create Category</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Category Name:</label>
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CategoryCreate;
