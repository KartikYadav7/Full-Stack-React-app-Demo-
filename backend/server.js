require('dotenv').config();
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const connectdb = require('./config/db');

const app = express();

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));


connectdb()

app.use('/auth',require('./routes/authRoutes'));


app.listen(port, () => {
  console.log(`🚀 Server is running on port: ${port} 🚀🚀`);
});

