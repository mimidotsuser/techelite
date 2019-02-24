const http=require('http');
const fs=require('fs');
const port=3000;

const server = http.createServer((req, res) => {
    fs.readFile('index.html',(err,data)=>{
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    })
});

server.listen(port, () => {
    console.log(`Server running`);
});