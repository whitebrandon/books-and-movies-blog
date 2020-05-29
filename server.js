'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const blogPost = require('./models/blogpost');
const routes = require('./routes');

const PORT = process.env.PORT || 5000;

/* START DATABASE SERVER AND CONNECT TO DATABASE */
const MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost/reviewBlog`

mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

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

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})