var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongojs = require('mongojs');

var app = express();

var port = 8005;
var db = mongojs('ecommerse');
var collection = db.collection('ecommerce');
app.use(bodyParser.json());
app.use(cors());


app.post('/products', function(req, res){
  console.log('post');
  return res.status('200').send('post')
});


app.get('/api/products', function(req, res){
  var query = {};
  if(req.query.id){
    query._id = mongojs.ObjectId(req.query.id);
  };
  if(req.query.name){
    query.name = req.query.name;
  }
collection.find(query, function(err, response){
  if(err){
    return res.status('500').send("err");
  }else{
    return res.status('200').send('response');
  };
});
/*console.log('get');
  return res.status('200').send('get')*/
});


app.put('/products/:id', function(req, res){
  console.log('put');
  return res.status('200').send('put')
});


app.delete('/products/:id', function(req, res){
  console.log('delete');
  return res.status('200').send('delete')
});




app.listen(port, function(req, res){
  console.log("listening on port " + port);
});
