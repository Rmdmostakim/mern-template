const path =require("path");
const express = require("express");
const database = require("../database");
const { environment } = require("../config");
const env = environment();
const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/../views'));

const server = () => {
  app.listen(env.port, () => {
    console.log(`server started at port ${env.port}`);
  });
  const abc = path.join(__dirname, '/../views');
  database();
};
//routes
const Routes = require("../routes");
app.use("*", Routes.Home);


module.exports = server;