var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');




router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/burgers", function(req, res) {
    burger.insertOne([
        "burger"
        ], [
      req.body.newBurger
    ], function(result) {
      res.redirect('/');
    });
  });
  
  router.put("/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
  
    burger.updateOne({
      devoured: true
    }, condition, function(result) {
    
        res.redirect('/');
     
      
    });
  });
  
  // Export routes for server.js to use.
  module.exports = router;
  