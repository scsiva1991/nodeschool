var fs = require('fs');

function callback( err, files ) {
   for( var i = 0; i < files.length; i++ ) { 
        if( files[i].indexOf('.'+process.argv[3]) > -1 ) {
            console.log(files[i]);
        }
   }
};
fs.readdir( process.argv[2], callback);
