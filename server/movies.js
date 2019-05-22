/**
 * movies module: handles: GET/POST/PUT/DELETE
 */

 const express = require('express');
 const router = express.Router();
 const db = require('./db');
 const utils = require('./utils');

 router.get('/movies',(request,response) => {
    const connection = db.connect();
    const statement = `SELECT title, writers, directors, star_cast, short_description, story_line, year, genre from movies`;
    connection.query(statement, (error,result) => {
        connection.end();
        response.send(utils.createResponse(error,result));
    })
    
 });
 router.post('/movies', (request,response) => {
     const connection = db.connect();
     const { title, writers, directors, 
        star_cast, short_description, story_line, year, genre} = request.body
     const statement = `INSERT INTO movies (title, writers, directors,star_cast, short_description, story_line, year, genre) values ('${title}', '${writers}', '${directors}', '${star_cast}', '${short_description}', '${story_line}', '${year}', '${genre}')`;
    connection.query(statement,(error, result)=>{
        connection.end();
        response.send(utils.createResponse(error,result));
    });
 })


 module.exports = router;