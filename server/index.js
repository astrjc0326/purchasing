const express = require('express');
const database = require('../database/index.js')

const app = express();
const port = 3000;

app.use(express.static('client/dist'))

app.get('/:name', (req, res) => {
  console.log(req.params.name)
  const result = database.searchByName(req.params.name);
  res.send(result)
})

app.listen(port, () => {
  console.log(`server is listening at port ${port}`)
})