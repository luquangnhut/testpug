const express = require('express')
const app = express()
const port = 3030;
  app.set('view engine','html');
  app.set('view','./view');


app.get('/', (req, res) => {
  res.render('index')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});