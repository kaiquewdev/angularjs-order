
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/product/read/:id', routes.index);
app.get('/product/new', routes.index);
app.get('/product/edit/:id', routes.index);
app.get('/product/delete/:id', routes.index);

app.get('/partials/:dir/:filename', routes.partials.template);

app.get('/api/product/list', routes.api.product.list);
app.post('/api/product/new', routes.api.product.new);
app.get('/api/product/read/:id', routes.api.product.read);
app.put('/api/product/edit/:id', routes.api.product.edit);
app.delete('/api/product/delete/:id', routes.api.product.delete);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
