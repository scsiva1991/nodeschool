

module.exports = function( dir, ext, callback ) {

    var fs = require('fs');
    
    fs.readdir( dir, function( err, files ) {
        if( err ) {
            return callback( err );
        }
        var list = [];
        for(var i =0; i < files.length; i++ ) {
            if( files[i].indexOf('.'+ext) > -1 ) {
                list.push( files[i] ); 
            }
        }
        
        callback( null, list);
    });

};
