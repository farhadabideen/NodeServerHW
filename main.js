var http = require('http');
var URL = require('url');

var server = http.createServer(
    function (req,res){
        // res.end('Hello World');

        // res.writeHead(200,{'content-type':'text/html'});
        // if(req.url == "/"){
        //     res.write('<h1>This is Home Page</h1>');
        //     res.end();
        // }else if(req.url == "/contact"){
        //     res.write('<h1>This is Contact Page</h1>');
        //     res.end();
        // }else if(req.url = "/about"){
        //     res.write('<h1>This is About Page</h1>');
        //     res.end();
        // }

        var myUrl = "http://farhad.com.bd/contact.html?year2021";
        var myUrlObj = URL.parse(myUrl,true);
        var myUrlHostName = myUrlObj.host;
        var myUrlPathName = myUrlObj.path;
        var myUrlSerach = myUrlObj.search;

        res.writeHead(200,{'content-type':'text/html'});
        res.write(myUrlHostName);
        res.end();



    }
);

server.listen(4040);
console.log('Server is running..');