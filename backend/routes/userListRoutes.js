"use strict";
module.exports = function (app) {
  var userList = require("../controllers/userListController");
  app.route("/users").get(userList.list_all_users);
  app.route("/api/users").post(userList.create_a_user);
  app.route("users/:userId").get(userList.read_user);
};
