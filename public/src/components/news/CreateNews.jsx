import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateNews() {
  const [newsIcon, setNewsIcon] = useState('');
  const [newsTitle, setNewsTitle] = useState('');
  const [newsAuthor, setNewsAuthor] = useState('');
  const [newsDesc, setNewsDesc] = useState('');
  const [newsContent, setNewsContent] = useState('');
  const [categoryId, setCategoryID] = useState(1);
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5001/api/mssql/categories')
      .then((response) => {
        const fetchedCategories = response.data;
        if (fetchedCategories.length > 0) {
          setCategories(fetchedCategories);
        }
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', newsIcon);
    formData.append('NewsTitle', newsTitle);
    formData.append('NewsAuthor', newsAuthor);
    formData.append('NewsDesc', newsDesc);
    formData.append('NewsContent', newsContent);
    formData.append('CategoryID', categoryId);

    axios
      .post('http://localhost:5001/api/mssql/create', formData) 
      .then((response) => {
        console.log('Data created successfully:', response.data);
        navigate('/news');
      })
      .catch((error) => {
        console.error('Error creating data:', error);
      });

  };

  return (
    <div>
      <h1>Create News</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label>Icon:</label>
          <input type="file" name='file' onChange={(e) => setNewsIcon(e.target.files[0])} />
        </div>
        <div>
          <label>Title:</label>
          <input type="text" value={newsTitle} onChange={(e) => setNewsTitle(e.target.value)} />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" value={newsAuthor} onChange={(e) => setNewsAuthor(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <input type="text" value={newsDesc} onChange={(e) => setNewsDesc(e.target.value)} />
        </div>
        <div>
          <label>Content:</label>
          <textarea value={newsContent} onChange={(e) => setNewsContent(e.target.value)} />
        </div>
        <div>
          <label>Category:</label>
          <select
            name="CategoryID"
            value={categoryId}
            onChange={(e) => setCategoryID(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category.CategoryID} value={category.CategoryID}>
                {category.CategoryName}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateNews;
