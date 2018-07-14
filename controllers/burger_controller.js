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
        "newBurger"
        ], [
      req.body.burger
    ], function(result) {
      res.redirect('/');
    });
  });
  
  router.put("/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne({
      devoured: true
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        console.log("Error Nathan");
        return res.status(404).end();
      } else {
        res.redirect('/');
        res.status(200).end();
     
      }
    });
  });
  
  
  // Export routes for server.js to use.
  module.exports = router;
  