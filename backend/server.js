require('dotenv').config();
const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const connectdb = require('./config/db');

const app = express();

app.use(cors({
  origin: ['https://full-stack-react-app-demo-frontend.vercel.app'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use(express.json());
connectdb()

app.get('/',(req,res)=>{
  res.send('Hello World')
}
)
app.use('/auth',require('./routes/authRoutes'));


app.listen(port, () => {
  console.log(`🚀 Server is running on port: ${port} 🚀🚀`);
});

