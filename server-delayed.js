var http = require('http');

var PORT = process.env.PORT || 2302     //env port comes from the environment you're in (ie. cloud9)



var kittyCat = http.createServer(function(request, response){
    setTimeout(function(){
        response.end("I've stolen your life, sucker!")    //what I send
    }, 4000)
    
     
});

kittyCat.listen(process.env.PORT, function(){
    console.log("server started on: " + PORT)
}); 
