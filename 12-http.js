
const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end('welocome to home page')
    }
    if(req.url == '/about'){
        res.end('welcome to about page');
    }
    res.end(`
        <h1>OOPs</h1>
        <p>cant find the page ur looking for</p>
        <a href="/">back home</a>
    `)
})

server.listen(5000);