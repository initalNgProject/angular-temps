const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const config = require('./config/dev');
const rental = require('./models/rental');
const User = require('./models/user');
const FakeDb = require('./fake-db');

const rentalRoutes = require('./routes/rental');
const userRoutes = require('./routes/users');

mongoose.connect(config.DB_URI).then(() => {
  const fakeDb = new FakeDb();
  fakeDb.seeDb();
});
const app = express();
app.use(bodyParser.json());
app.use('/api/v1/rentals',rentalRoutes);
app.use('/api/v1/users',userRoutes);
const PORT = process.env.PORT || 3002;
app.listen(PORT,function(){
  console.log('it is working...');
});
