const express = require('express');
const app = express();
const mongoose = equire('mongoose');
const port = 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());


try {
  mongoose.connect("mongodb://db:27017/myapp")
  console.log("DB connected")
} catch (error) {
  console.log("DB connection failed")
}

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api/newapi', (req, res) => {
  res.json({ message: 'New Hello, World!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

