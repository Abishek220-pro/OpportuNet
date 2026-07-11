require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const opportunityRoutes = require('./routes/opportunityRoutes');
app.use('/opportunities', opportunityRoutes);

console.log('Attempting to connect to MongoDB...');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => console.log('❌ Connection error:', err.message));

app.get('/', (req, res) => res.send('OpportuNet API running'));

app.listen(process.env.PORT, () => 
  console.log(`Server running on port ${process.env.PORT}`)
);