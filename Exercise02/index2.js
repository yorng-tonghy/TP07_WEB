
const express = require('express')
const path = require('path');
const port = 8080;

const app = express();

app.use(express.static(path.join(__dirname+"/src")));

app.listen(port, () => {
  console.log(`the sever is running port ${port}`);
});