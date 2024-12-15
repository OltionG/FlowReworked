import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function EditNews() {
  const { id } = useParams();
  const [newsData, setNewsData] = useState({});
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all data
    axios
      .get('http://localhost:5001/api/mssql/data')
      .then((response) => {
        const allNews = response.data;
        // Find the item that matches the ID
        const selectedNews = allNews.find((news) => news.NewsID === parseInt(id));

        if (selectedNews) {
          setNewsData(selectedNews);
        } else {
          // Handle case where item with matching ID was not found
          console.error('News item not found.');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('NewsIcon', file);

    formData.append('NewsTitle', newsData.NewsTitle);
    formData.append('NewsAuthor', newsData.NewsAuthor);
    formData.append('NewsDesc', newsData.NewsDesc);
    formData.append('NewsContent', newsData.NewsContent);
    formData.append('PublishDate', newsData.PublishDate);

    console.log(formData); // Display the FormData

    axios
      .put(`http://localhost:5001/api/mssql/edit/${id}`, formData)
      .then((response) => {
        console.log('Data updated successfully:', response.data);
        navigate('/news');
      })
      .catch((error) => {
        console.error('Error updating data:', error);
      });
  };

  return (
    <div>
      <h2>Edit News</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label>Icon:</label>
          <input type="file" name="NewsIcon" onChange={handleImageChange} />
        </div>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="NewsTitle"
            value={newsData.NewsTitle}
            onChange={(e) => setNewsData({ ...newsData, NewsTitle: e.target.value })}
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            name="NewsAuthor"
            value={newsData.NewsAuthor}
            onChange={(e) => setNewsData({ ...newsData, NewsAuthor: e.target.value })}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="NewsDesc"
            value={newsData.NewsDesc}
            onChange={(e) => setNewsData({ ...newsData, NewsDesc: e.target.value })}
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            name="NewsContent"
            value={newsData.NewsContent}
            onChange={(e) => setNewsData({ ...newsData, NewsContent: e.target.value })}
          ></textarea>
        </div>
        <div>
          <label>Publish Date:</label>
          <input
            type="date"
            name="PublishDate"
            value={newsData.PublishDate}
            onChange={(e) => setNewsData({ ...newsData, PublishDate: e.target.value })}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditNews;
