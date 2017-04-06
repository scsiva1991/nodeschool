var http = require('http');
var bl = require('bl'); 
var result = [];
var count = 0;
function callback ( response ) {
    response.pipe(bl( function(err, data) {
        if( err ) {
            return console.error;
        }
        count++; 
        result.push( data.toString() );
        if( count == 3 ) {
            result.forEach( function(d) {
                console.log( d );
            });
        } 
    }));
    
};
for( var i = 2; i < process.argv.length; i++ ) {
    loadUrl( i ); 
}

function loadUrl( index ) {
    http.get( process.argv[index], function(response){ 
        response.pipe(bl( function(err, data) {
            if( err ) {
                return console.error;
            }
            result[index] = data.toString();
            count++; 

            if( count == 3 ) {
                result.forEach( function(d) {
                    console.log( d );
                });
            } 
        }));
        
        
    });
}
