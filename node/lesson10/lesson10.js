
/*
## TIME SERVER (Exercise )

 Write a TCP time server!

 Your server should listen to TCP connections on the port provided by the
 first argument to your program. For each connection you must write the
 current date & 24 hour time in the format:

    "YYYY-MM-DD hh:mm"

 followed by a newline character. Month, day, hour and minute must be
 zero-filled to 2 integers. For example:

    "2013-07-06 17:42"

 After sending the string, close the connection.*/

 var net = require('net');

 var server = net.createServer( function(socket)  {
      var date = new Date();
      console.log( date );
      socket.end( date.getFullYear() + '-' + ("0" +  (Number(date.getMonth()) + 1)).slice(-2)  + '-' + ("0" + date.getDate()).slice(-2) + " " + date.getHours() + ':' + date.getMinutes() + '\n');

 });

 server.listen( process.argv[2] );
