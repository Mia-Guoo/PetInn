"use strict";
var mongoose = require("mongoose");
User = mongoose.model("User");

exports.list_all_users = function (req, res) {
  User.find({}, function (err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};
// exports.create_a_user = function (req, res) {
//   var new_user = new User(req.body);
//   new_user.save(function (err, user) {
//     if (err) res.send(err);
//     res.json(user);
//   });
// };
exports.create_a_user = async function (req, res) {
  const new_user = new User(req.body);
  try {
    const saved_user = await new_user.save();
    res.json(saved_user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.read_user = function (req, res) {
  User.findById(req, params.userId, function (err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};
