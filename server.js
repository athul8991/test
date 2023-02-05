const http = require('http');
const hostName="0.0.0.0";
const port = 3000;
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html') 
    res.write("Hello world");
    res.end()
}).listen(port,hostName, ()=>{
    console.log("Server Started at port : "+port);

})