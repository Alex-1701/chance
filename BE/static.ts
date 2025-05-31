const express = require('express');
const path = require('path');

const PORT = 3000;

const app = express();

app.use(express.static('content'));

console.log('kek');

app.get('/', (req, res) => {
  // res.send("Hello World!");
  res.sendFile(__dirname + 'content/index.html');
  // res.sendFile("../content/index.html", { root: __dirname });
  // res.sendFile(path.resolve(__dirname + "./../content/index.html"));
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
