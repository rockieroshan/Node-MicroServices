const express = require('express');
const dotenv = require('dotenv');
const bootcamp = require('./routes/bootcamp');
dotenv.config({ path: './config.config.env' });

const app = express();

app.use('/api/v1/bootcamp', bootcamp);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT} running on ${process.env.NODE_ENV}`);
});
