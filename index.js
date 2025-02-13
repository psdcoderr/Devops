const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://db:27017/myapp", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected"))
  .catch((error) => console.log("DB connection failed", error));

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
