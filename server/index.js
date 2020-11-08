const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const axios = require('axios');

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

app.use(cors());

app.get('/', (req, res) => {
  axios
    .get('https://covid2019-api.herokuapp.com/v2/current')
    .then((resp) => {
      res.status(200).send(resp.data);
    })
    .catch((err) => {
      console.log('error', err);
    });
});

const PORT = process.env.PORT || 3131;
app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
