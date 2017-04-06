var module = require('./module.js');

function callback( err, data ) {
    if( err ) {
        console.log('Some error occurs!!');
    }
    for( var i = 0; i < data.length; i++ ) {
        console.log( data[i] );
    }
}
module(process.argv[2], process.argv[3], callback);
