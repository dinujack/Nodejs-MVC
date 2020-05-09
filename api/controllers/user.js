const userModel = require("../models/user");
const url = require('url');

exports.user_signup = (req, res, next) => {
  var error = []
  var { user_id, Password } = req.body
  userModel.getData(req.body, (rows) => {
    var user = rows.length > 0 ? true : false
    if (user) {
      res.json({
        flag: true,
        msg: 'success'
      })
    }
    else {
      res.json({
        flag: false,
        msg: 'username password dont match'
      })
    }
  });
};

