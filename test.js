
var express = require('express');
var index = express();
var fs = require("fs");
//var http = require('http'),
//httpProxy = require('http-proxy');
// 
// Create your proxy server and set the target in the options. 
// 
/*httpProxy.createProxyServer({target:'http://localhost:9000'}).listen(8000); // See (†) 
console.log('listening to port 9000...');*/
// 
// Create your target server 
// 




/*http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
  res.end();
}).listen(9000);*/

index.get('/', function (req, res) {
   fs.readFile( __dirname + "/" + "userList.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
});
var server = index.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port);
   console.log(port);
   console.log(host);

});
