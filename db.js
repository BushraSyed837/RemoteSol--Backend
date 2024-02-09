const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect("mongodb://localhost:27017/WeatherApp", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;
