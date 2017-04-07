var bl = require('bl');
var http = require('http');

http.get( process.argv[2], function(response) {
    
    response.pipe( bl(function(err, data){
        if( err ) {
            return console.error;
        }
        console.log( data.toString().length );
        console.log( data.toString() );
    }));

}).on("error", console.error);
