var http = require('http');

 
 var requestListener = function(req, response) {
        // response.end('Wait a sec...');
        var start = new Date().getTime();
        while (new Date().getTime() - start < 3000);
  // INSERT YOUR res.writeHead / res.end lines after this line
        response.writeHead(200);
        response.end('Hello Worldy World! Good waiting'); 
 }
 
 var server = http.createServer(requestListener);
 
 server.listen(process.env.PORT, process.env.IP); 
 
 
 /*
 
 var request = require('request');
 request('url', function(err, res, body) {
       //console.log(err, res, body);
       if (err) {
         ***response.writeHead(200);
         ***response.end('Sorry, try again! There was an error:' + err);           
       }
       else {
           var data = JSON.parse(body);
           var firstResult = data.arrayFromBody[0];
           
           if (firstResult) {
             var location = data.arrayFromBody[0].geometry.location;
             ***response.writeHead(200);
             ***response.end('Hello, you are located at ' + location.lat + ',' + location.lng);           
           }
           else {
             ***response.writeHead(200);
             ***response.end('Sorry there are no results');                         
           }
       }
   });
   
   */