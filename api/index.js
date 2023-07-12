const express = require('express');
const dotenv = require('dotenv');
const app = express();
const mongoose = require('mongoose');

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'e-commerce-db',
  })
  .then(() => {
    console.log('db connected!!!');
    // app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    /* ADD DATA ONE TIME */
    // User.insertMany(users);
    // Post.insertMany(posts);
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(5000, () => {
  console.log('BE server is running!!');
});
