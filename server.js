const express = require("express");
var fs = require("fs");
const mime = require('mime-types');
const systempath = require('path');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});

/* app.get('/*', (req, res) => {
    let fileRead = req.url
    console.log(fileRead);
    let contentType = 'image/jpeg';
    if (mime.lookup(fileRead)) contentType = mime.lookup(fileRead);
    // console.log(contentType);

    fs.readFile(__dirname + fileRead, { encoding: 'utf-8', flag: 'r' },
        (error, data) => {
            if (!error) {
                res.writeHead(200, { 'Content-Type': contentType });
                console.log(data.length);
                res.end(data);
            } else {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end(JSON.stringify(error));
            }
        });
}); */

app.use('/db', require('./routes/resorce-route'));

app.listen(3000, () => console.log("Server is running!"));