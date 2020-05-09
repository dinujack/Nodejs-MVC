exports.checkLoginStatus = (session, res, callback) => {
    var user;
    if (session.user) {
        user = true
    }
    else {
        user = false
        res.redirect("/");
    }
    callback(user)
};
