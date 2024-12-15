import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Dashboard from '../Dashboard';
function NewsShow() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your Node.js server
    axios.get('http://localhost:5001/api/mssql/data') // Replace with your server's URL
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <Dashboard />
<button type="button" className="btn btn-primary m-2 float-end">
<Link style={{color: 'white'}} to={`/createNews`}>Create</Link>
</button>
      <table className="table table-striped" >
        <thead>
          <tr>
            <th>ID</th>
            <th>Icon</th>
            <th>Title</th>
            <th>Author</th>
            <th>Description</th>
            <th>Content</th>
            <th>Publish Date</th>
            <th>Category</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody >
          {data.map((item) => (
            <tr key={item.NewsID}>
              <td>{item.NewsID}</td>
              <td> <img style={{width: '30px', height: '30px'}} src={`http://localhost:5001/uploads/${item.NewsIcon}`}alt="News Icon"/></td>
              <td>{item.NewsTitle}</td>
              <td>{item.NewsAuthor}</td>
              <td>{item.NewsDesc}</td>
              <td>{item.NewsContent}</td>
              <td>{item.PublishDate}</td>
              <td>{item.CategoryID}</td>
              <td><Link to={`/editNews/${item.NewsID}`}>Edit</Link></td>
              <td><Link to={`/deleteNews/${item.NewsID}`}>Delete</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NewsShow;