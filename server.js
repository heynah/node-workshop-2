var http = require('http');

var server = http.createServer(function(request, response){
    
    var answer = "Hello World";
    
    response.end(answer); 
});

server.listen(process.env.PORT); 