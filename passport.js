var passport = require("passport");
var Strategy = require("passport-local").Strategy;
var users = require("./database/user");

passport.use(new Strategy(function(username, password, done) {
  users.findByUsername(username).then(function(user) {
    user = user[0];
    if (!user) done(null, false);

    var check = users.authenticateUser(password, user.password);
    if (!check) return done(null, false);

    done(null, user);
  });
}));

passport.serializeUser(function(user, done) {
  done(null, user.username);
});

passport.deserializeUser(function(username, done) {
  users.findByUsername(username).then(function(user) {
    user = user[0];
    if (!user) return false;
    done(null, user);
  });
});
