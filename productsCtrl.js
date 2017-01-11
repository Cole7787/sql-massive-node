var massive = require('massive');
var db = massive.connectSync({
  connectionString : 'postgres://postgres:@localhost/massive_project'
});


module.exports = {
  index: function(req, res){
    db.read_products(function(err, result){
      if(err){
        console.log("Error");
      }
      else{
        res.send(result);
      }
    });
  },

  show: function(req, res){
    db.read_product([req.params.productId], function(err, result){
      if(err){
        console.log("Error");
      }
      else{
        res.send(result);
      }
    });
  },

  create: function(req, res){
    db.create_product([req.body.name, req.body.description, req.body.price, req.body.imageurl], function(err, result){
      if(err){
        console.log("Error");
      }
      else{
        res.send(result);
      }
    });
  },

  update: function(req, res){
    db.update_product([req.params.productId, req.query.description], function(err, result){
      if(err){
        console.log("Error");
      }
      else{
        res.send(result);
      }
    });
  },

  destroy: function(req, res){
    db.delete_product([req.params.productId], function(err, result){
      if(err){
        console.log("Error");
      }
      else{
        res.send(result);
      }
    })
  }
};
