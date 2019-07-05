const express = require('express');
const forceSSL = require('express-force-ssl');
const fs = require('fs');
const http = require('http');
const https = require('https');
const path =  require('path');
const compression = require('compression')

const app = express();

app.use(compression())


// var ssl_options = {
//     key: fs.readFileSync('./keys/private.key'),
//     cert: fs.readFileSync('./keys/cert.crt'),
//     ca: fs.readFileSync('./keys/intermediate.crt')
//   };

app.use(express.static((path.join(__dirname,'./dist/tapatrio-page'))));


app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname,'./dist/tapatrio-page/index.html'));
})

// https.createServer({
//   key: fs.readFileSync(path.join(__dirname,'./server/ssl/server.key')),
//   cert: fs.readFileSync(path.join(__dirname,'./server/ssl/server.cert'))
// }, app)
// .listen(3000, function () {
//   console.log('Example app listening on port 3000! Go to https://localhost:3000/')
// })

http.createServer(app)
    .listen(process.env.PORT || 8080, function () {
      console.log('Example app listening on port')
    })