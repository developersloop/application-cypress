var app = require('express')();
var http = require('http').Server(app);
var serveStatic = require('serve-static');

app.use(serveStatic('.', {'index': ['index.html']}));

http.listen(process.env.PORT || 5000, function(){
  console.log('listening on 0.0.0.0:5000');
});