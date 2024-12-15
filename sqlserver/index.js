const express = require('express');
const mssql = require('mssql');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001; 

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');  // Specify the directory where uploaded files will be stored
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);  // Assign a unique filename
  }
});

const upload = multer({ storage: storage });
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cors());
app.use(bodyParser.json());

const config = {
  user: 'sa',          
  password: '123',     
  server: 'OLTION',    
  database: 'FlowMingle',
  port: 1433, 
  options: {
    encrypt: true, // Enable encryption
    trustServerCertificate: true, // Accept self-signed certificates (not recommended for production)
  },
};

mssql.connect(config, (err) => {
  if (err) {
    console.error('Error connecting to MSSQL:', err);
  } else {
    console.log('Connected to MSSQL database');
  }
});

//News
app.get('/api/mssql/data', (req, res) => {
    const query = 'SELECT NewsID, NewsIcon, NewsTitle, NewsAuthor, NewsDesc, NewsContent, PublishDate, CategoryID FROM News';
  
    mssql.query(query, (err, result) => {
      if (err) {
        console.error('Error executing SQL query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(result.recordset);
      }
    });
  });

  app.post('/api/mssql/create', upload.single('file'), (req, res) => {
    const { NewsTitle, NewsAuthor, NewsDesc, NewsContent, CategoryID } = req.body;
    const filename = req.file.filename;

    const query = `
      INSERT INTO News (NewsIcon, NewsTitle, NewsAuthor, NewsDesc, NewsContent, CategoryID)
      VALUES (@filename, @NewsTitle, @NewsAuthor, @NewsDesc, @NewsContent, @CategoryID)
    `;
  
    const request = new mssql.Request();
  
    request.input('filename', mssql.NVarChar, filename);
    request.input('NewsTitle', mssql.NVarChar, NewsTitle);
    request.input('NewsAuthor', mssql.NVarChar, NewsAuthor);
    request.input('NewsDesc', mssql.NVarChar, NewsDesc);
    request.input('NewsContent', mssql.NVarChar, NewsContent);
    request.input('CategoryID', mssql.NVarChar, CategoryID);
  
    request.query(query, (err, result) => {
      if (err) {
        console.error('Error creating data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        console.log('Data created successfully');
        res.status(201).json({ message: 'Data created successfully' });
      }
    });
  });

  app.put('/api/mssql/edit/:id', upload.single('NewsIcon'), (req, res) => {
    const newsID = req.params.id;
    const filename = req.file ? req.file.filename : null; // Check if a file was uploaded
    const { NewsTitle, NewsAuthor, NewsDesc, NewsContent, PublishDate } = req.body;
  
    const query = `
      UPDATE News
      SET NewsIcon = @filename, NewsTitle = @NewsTitle, NewsAuthor = @NewsAuthor, NewsDesc = @NewsDesc, NewsContent = @NewsContent, PublishDate = @PublishDate
      WHERE NewsID = @newsID
    `;
  
    const request = new mssql.Request();
  
    request.input('filename', mssql.NVarChar, filename);
    request.input('NewsTitle', mssql.NVarChar, NewsTitle);
    request.input('NewsAuthor', mssql.NVarChar, NewsAuthor);
    request.input('NewsDesc', mssql.NVarChar, NewsDesc);
    request.input('NewsContent', mssql.NVarChar, NewsContent);
    request.input('PublishDate', mssql.Date, PublishDate);
    request.input('newsID', mssql.Int, newsID);
  
    request.query(query, (err, result) => {
      if (err) {
        console.error('Error updating data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        console.log('Data updated successfully');
        res.status(200).json({ message: 'Data updated successfully' });
      }
    });
  });

  app.delete('/api/mssql/delete/:id', (req, res) => {
    const newsID = req.params.id;
  
    const query = `
      DELETE FROM News
      WHERE NewsID = @newsID
    `;
  
    const request = new mssql.Request();
  
    request.input('newsID', mssql.Int, newsID);
  
    request.query(query, (err, result) => {
      if (err) {
        console.error('Error deleting data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else if (result.rowsAffected[0] === 0) {
        // If no rows were affected, it means the item with that ID doesn't exist
        res.status(404).json({ error: 'Item not found' });
      } else {
        console.log('Data deleted successfully');
        res.status(200).json({ message: 'Data deleted successfully' });
      }
    });
  });



//Categories
  app.get('/api/mssql/categories', (req, res) => {
    const query = 'SELECT CategoryID, CategoryName FROM Categories';
  
    mssql.query(query, (err, result) => {
      if (err) {
        console.error('Error executing SQL query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(result.recordset);
      }
    });
  });

  app.get('/api/mssql/categories/:id', (req, res) => {
    const categoryId = req.params.id;
    const query = `SELECT * FROM Categories WHERE CategoryID = @categoryId`;
  
    const request = new mssql.Request();
    request.input('categoryId', mssql.Int, categoryId);
  
    request.query(query, (err, result) => {
      if (err) {
        console.error('Error executing SQL query:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        if (result.recordset.length > 0) {
          res.json(result.recordset[0]);
        } else {
          res.status(404).json({ error: 'Category not found' });
        }
      }
    });
  });
  
  app.post('/api/mssql/categories', (req, res) => {
    const { CategoryName } = req.body;
  
    const query = `INSERT INTO Categories (CategoryName) VALUES (@categoryName)`;
  
    const request = new mssql.Request();
    request.input('categoryName', mssql.NVarChar, CategoryName);
  
    request.query(query, (err, result) => {
      if (err) {
        console.error('Error creating category:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        console.log('Category created successfully');
        res.status(201).json({ message: 'Category created successfully' });
      }
    });
  });
  
  app.put('/api/mssql/categories/:id', (req, res) => {
    const categoryId = req.params.id;
    const { CategoryName } = req.body;
  
    const query = `
      UPDATE Categories
      SET CategoryName = @categoryName
      WHERE CategoryID = @categoryId
    `;
  
    const request = new mssql.Request();
    request.input('categoryName', mssql.NVarChar, CategoryName);
    request.input('categoryId', mssql.Int, categoryId);
  
    request.query(query, (err, result) => {
      if (err) {
        console.error('Error updating category:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        console.log('Category updated successfully');
        res.status(200).json({ message: 'Category updated successfully' });
      }
    });
  });
  
  app.delete('/api/mssql/categories/:id', (req, res) => {
    const categoryId = req.params.id;
  
    const query = `DELETE FROM Categories WHERE CategoryID = @categoryId`;
  
    const request = new mssql.Request();
    request.input('categoryId', mssql.Int, categoryId);
  
    request.query(query, (err, result) => {
      if (err) {
        console.error('Error deleting category:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else if (result.rowsAffected[0] === 0) {
        res.status(404).json({ error: 'Category not found' });
      } else {
        console.log('Category deleted successfully');
        res.status(200).json({ message: 'Category deleted successfully' });
      }
    });
  });

//Sculptor

app.get('/api/mssql/sculptors', (req, res) => {
  const query = 'SELECT SculptorId, Name, BirthYear FROM Sculptor';

  mssql.query(query, (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(result.recordset);
    }
  });
});

app.post('/api/mssql/sculptors', (req, res) => {
  const { Name, BirthYear } = req.body;

  const query = `INSERT INTO Sculptor (Name, BirthYear) VALUES (@name, @birthyear)`;

  const request = new mssql.Request();
  request.input('name', mssql.NVarChar, Name);
  request.input('birthyear', mssql.Int, BirthYear);

  request.query(query, (err, result) => {
    if (err) {
      console.error('Error creating category:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('Category created successfully');
      res.status(201).json({ message: 'Category created successfully' });
    }
  });
});

app.put('/api/mssql/authors/:id', (req, res) => {
  const authorId = req.params.id;
  const { Name, BirthYear } = req.body;

  const query = `
    UPDATE Author
    SET Name = @name, BirthYear = @birthYear
    WHERE AuthorID = @authorId
  `;

  const request = new mssql.Request();
  request.input('name', mssql.NVarChar, Name);
  request.input('birthYear', mssql.Int, BirthYear);
  request.input('authorId', mssql.Int, authorId);

  request.query(query, (err, result) => {
    if (err) {
      console.error('Error updating category:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('Category updated successfully');
      res.status(200).json({ message: 'Category updated successfully' });
    }
  });
});

//Sculptures

app.get('/api/mssql/sculptures', (req, res) => {
  const query = 'SELECT SculptureId, Title, Material, SculptorId FROM Sculpture';

  mssql.query(query, (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(result.recordset);
    }
  });
});

app.post('/api/mssql/sculptures', (req, res) => {
  const { Title, Material, SculptorId } = req.body;

  const query = `INSERT INTO Sculpture (Title, Material, SculptorId) VALUES (@title, @material, @sculptorId)`;

  const request = new mssql.Request();
  request.input('title', mssql.NVarChar, Title);
  request.input('material', mssql.NVarChar, Material);
  request.input('sculptorId', mssql.Int, SculptorId);
console.log(SculptorId);
  request.query(query, (err, result) => {
    if (err) {
      console.error('Error creating category:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('Category created successfully');
      res.status(201).json({ message: 'Category created successfully' });
    }
  });
});

app.put('/api/mssql/sculptures', (req, res) => {
  const { SculptureId } = req.body;

  const query = `UPDATE Sculpture SET isDeleted = 'true' WHERE SculptureId = @sculptureId`;

  const request = new mssql.Request();
  request.input('sculptureId', mssql.Int, SculptureId);

  request.query(query, (err, result) => {
    if (err) {
      console.error('Error updating data:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      console.log('Data updated successfully');
      res.status(200).json({ message: 'Data updated successfully' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`MSSQL Server is running on port ${PORT}`);
});
