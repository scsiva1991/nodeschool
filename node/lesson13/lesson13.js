var url = require('url');
var http = require('http');

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime: time.getTime() }
}

var server = http.createServer( function(req, res) {
  var parsedUrl = url.parse( req.url, true );
  var time = new Date( parsedUrl.query.iso );
  var result;

  if ( req.url.indexOf('parsetime') > -1 ) {
    result = parsetime(time)
  } else if ( req.url.indexOf('unixtime') > -1 ) {
    result = unixtime(time)
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
});

server.listen( process.argv[2] );
