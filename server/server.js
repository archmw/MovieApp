const express = require('express');

const app = express();
const movieRouter = require('./movies');
const bodyParser = require('body-parser');

app.use(function (request, response, next){
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});




app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// custom routers
app.use(movieRouter);

app.listen(3000,'0.0.0.0',() => {
    console.log(`server started on port 3000 @ localhost`);
});

