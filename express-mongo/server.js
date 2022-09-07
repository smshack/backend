const express = require("express");
const cors = require('cors');
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();
const port = 31001;
const appname = `mongo-app`


app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));


app.use((req, res, next) => {
    res.status(404).send('Not found')
})

app.use((error,req, res, next) => {
    console.log(error);
    res.status(500).send('internal server Error')
})
app.listen(port,() =>{
  console.log(`${port} ${appname} listening`);
})