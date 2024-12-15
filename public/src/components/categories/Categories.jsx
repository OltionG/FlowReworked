import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Dashboard from '../Dashboard';

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/api/mssql/categories')
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <div>
    <Dashboard />
<button type="button" className="btn btn-primary m-2 float-end">
<Link style={{color: 'white'}} to={`/createCategory`}>Create</Link>
</button>
    <table className="table table-striped" >
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody >
        {categories.map((item) => (
          <tr key={item.NewsID}>
            <td>{item.CategoryID}</td>
            <td>{item.CategoryName}</td>
            <td><Link to={`/editCategory/${item.CategoryID}`}>Edit</Link></td>
            <td><Link to={`/deleteCategory/${item.CategoryID}`}>Delete</Link></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default Categories;
