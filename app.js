const http = require('http')
const {readFileSync} = require('fs')

//get all files
const homePage = readFileSync('./index.html')

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url === '/'){
        res.writeHead(200, {'content-type':'text/html'})  // specify the type of data we are sending
        console.log('user hit the server'); 
        res.write(homePage)  // here we are going to passing in our html file like index.html using the file system('fs') Note that we will be passing in the content thats y we will be specifying the content type
        res.end()
    } else if(url === '/about'){
        res.writeHead(200, {'content-type':'text/html'})  
        res.write(`<h1>About Page</h1>`)
        res.end()
    } else{  // error page
        res.writeHead(404, {'content-type':'text/html'})  
        res.write(`<h1>Page Not Found</h1>`)
        res.end()
    }
})

server.listen(5000)