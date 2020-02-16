const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: './config.config.env' });

const app = express();

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT} running on ${process.env.NODE_ENV}`);
});
