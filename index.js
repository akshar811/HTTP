const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url=="/"){
        res.end("welcome to the server")
    }
    else if(req.url=="/index"){
        res.end("<h1>welcome to the index page</h1>")
    }
    else if(req.url=="/login"){
        res.end("<h2>welcome to the login page</h2>")
    }
    else if(req.url=="/sign up"){
        res.end("<h3>welcome to the login page</h3>")
    }
    else if(req.url=="/about"){
        res.end("<h3>welcome to the about page6</h3>")
    }
    
})

server.listen(8091,()=>{
    console.log("starting server a port of 8091")
})