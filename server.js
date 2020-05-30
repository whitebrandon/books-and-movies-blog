'use strict';

// require modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// routers
const usersRouter = require('./routes/users');
const booksRouter = require('./routes/books');
const songsRouter = require('./routes/songs');
const rhymesRouter = require('./routes/rhymes');

// set env variables
const PORT = process.env.PORT || 5000; // port for server
const MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost/rhymebook`

// sets up connection
mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

// gets connection
const db = mongoose.connection;

db.on("error", (error) => {
  console.error("There is an error connecting to database", error);
})

db.once("open", async () => {
  console.log("The database connection was successful");
})

/* EXPRESS SERVER */
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// redirect client to GET /api/books
app.use('/', (req, res, next) => {
  return res.redirect('/api/books');
})

// middleware for url paths
app.use('/api/users', usersRouter);
app.use('/api/books', booksRouter);
app.use('/api/songs', songsRouter);
app.use('/api/rhymes', rhymesRouter);

// connect to app server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})