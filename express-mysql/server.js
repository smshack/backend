const express = require("express");
const cors = require('cors');
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();
const mysql = require('mysql');
const port = 8081;
const appname ='mysql-app'

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));

const con = mysql.createConnection({
  host: "localhost",
  user: "smart",
  password: "1234",
  database: "TESTDB",
});

con.connect((err) => {
    if(err) throw err;
    console.log('mysql connnected');
})

app.use((req, res, next) => {
    res.status(404).send('Not found')
})

app.use((error,req, res, next) => {
    console.log(error);
    res.status(500).send('internal server Error')
})
app.listen(port, () => {
  console.log(`${port} ${appname} listening`);
});