// const express = require("express");
// const nedb = require("nedb");
// const rest = require("express-nedb-rest");
// const cors = require("cors");

// const app = express();

// const datastore = new nedb({ filename: "mycoffeapp.db", autoload: true });
// const restApi = rest();
// restApi.addDatastore('coffees', datastore);

// console.log(`Server running at http:///`);

// app.use(cors());
// app.use('/', restApi);

// app.listen(3000);

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});