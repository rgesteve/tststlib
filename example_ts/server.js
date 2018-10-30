var express = require('express');
var fs = require('fs');
var app = express();

var port = process.env.PORT || 8080;

app.use(express.static(process.cwd() + '/static'));
app.use('/lib', express.static(process.cwd() + '/node_modules/tststlib/dist/js'))

/*
app.get('/', function(req, res){
  res.redirect('/NotFound.html');
})
*/
app.listen(port, function(){
  console.log('Listening to port: ' + port);
});
