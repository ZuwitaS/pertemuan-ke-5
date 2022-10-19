const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 456;

const server = http.createServer((req,res) => {
  res.statusCode = 200;
  res.setHeader("content-Type","text/html");
  const data = fs.readFileSync("../M1/LatihanM01.html");
  res.write("<p>Simple Text</p>");
  res.end(data)

  
});

server.listen(port, hostname,()=>{
  console.log(`Server running at ${hostname}:${port}`);
})
