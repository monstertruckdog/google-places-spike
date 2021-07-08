/*
const http = require('http');
const fs = require('fs');

const PORT = 8080;

const handleRequest = (req, res) => {
  fs.readFile(`${__dirname}/google_test_view.html`, (err, data) => {
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
};

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Server is listening on PORT: ${PORT}`);
});
*/

// Dependencies
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname,'public')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'google_test_view.html')));

// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

