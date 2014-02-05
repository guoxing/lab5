var data = require("../data.json");

exports.addFriend = function(req, res) {    
  // Your code goes here
  console.log(req.query);
  var new_friend = {"name": req.query.name,
    "description": req.query.description,
    "imageURL": "http://lorempixel.com/400/400/people"
  };
  data["friends"].push(new_friend);
  res.render('add', {"name":req.query.name});
};
