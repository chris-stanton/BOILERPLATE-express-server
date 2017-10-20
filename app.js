
// dependancies
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

// body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// express middleware
app.use(express.static(path.join(__dirname, './public')));


// static file(s)
// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, './public/index.html'));
// });

// index route
app.get('/', (req, res) => {
  res.send('express server running...');
});

// port listening on
app.listen(port, () => {
  console.log('Listening on port: ', port);
});
