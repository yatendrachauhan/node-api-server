const express = require("express");
const nedb = require("nedb");
const rest = require("express-nedb-rest");
const cors = require("cors");

const app = express();

const datastore = new nedb({ filename: "mycoffeapp.db", autoload: true });
const restApi = rest();
restApi.addDatastore('coffees', datastore);

console.log(`Server running at http:///`);

app.use(cors());
app.use('/', restApi);

app.listen(3000);