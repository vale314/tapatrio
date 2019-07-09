const express = require('express');
const forceSSL = require('express-force-ssl');
const fs = require('fs');
const http = require('http');
const https = require('https');
const path =  require('path');
const compression = require('compression')

const app = express();

app.use(compression())

app.use(express.static((path.join(__dirname,'./dist/tapatrio-page'))));

app.get('/video',(req,res)=>{
 const path = './server/video/video.mp4'

   const head = {
     'Accept-Ranges': 'bytes',
     'Content-Type': 'video/mp4',
   }

   res.writeHead(200, head)
   fs.createReadStream(path).pipe(res)

})

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname,'./dist/tapatrio-page/index.html'));
})

https.createServer({
  key: fs.readFileSync(path.join(__dirname,'./server/ssl/domain-key.pem')),
  ca: fs.readFileSync(path.join(__dirname,'./server/ssl/domain-ca.crt')),
  cert: fs.readFileSync(path.join(__dirname,'./server/ssl/domain-crt.crt'))
}, app)
.listen(443, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:3000/')
})

http.createServer(app)
    .listen(process.env.PORT || /*80*/8080, function () {
      console.log('Example app listening on port')
})