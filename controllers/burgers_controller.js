
var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function(result) {
    // Send back the ID of the new quote
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = req.params.id;

  console.log("condition", condition);

  burger.update(condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// router.delete("/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   cat.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;






// var express = require("express");

// var router = express.Router();

// // Import the model (cat.js) to use its database functions.
// var burger = require("../models/burger.js");

// // Create all our routes and set up logic within those routes where required.
// router.get("/", function (req, res) {
//   burger.all(function (data) {
//     var hbsObject = {
//       burgers: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

// router.post("/", function (req, res) {
//   burger.create([
//     "burger_name", "devoured"
//   ], [
//       req.burger_name, req.body.devoured
//     ], function () {
//       // Send back the ID of the new quote
//       res.redirect("/");
//     });
// });

// router.put("/:id", function (req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   burger.update({
//     devoured: req.body.devoured
//   }, condition, function () {

//     res.redirect("/");

//   });
// });

// router.delete("/:id", function (req, res) {
//   var condition = "id = " + req.params.id;

//   burger.delete(condition, function () {

//     res.redirect("/");

//   });
// });

// // Export routes for server.js to use.
// module.exports = router;
