var express = require('express');
var bodyParser = require('body-parser');

var controll = require('./productsCtrl.js');



var app = express();
app.use(bodyParser.json());


app.get('/api/products', controll.index);
app.get('/api/products/:productId', controll.show);
app.post('/api/products', controll.create);
app.put('/api/products/:productId', controll.update);
app.delete('/api/products/:productId', controll.destroy);



app.listen(3000, function(){
  console.log('App is listening on port 3000');
});
