// Home controller

module.exports.home = function (req, res) {
  res.render("index", { title: "The MEAN Stack Agency" });
};

module.exports.about = function (req, res) {
  res.render("about", { title: "About" });
};

module.exports.contact = function (req, res) {
  res.render("contact", { title: "Contact" });
};

module.exports.login = function (req, res) {
  res.render("login", { title: "Login" });
};

module.exports.services = function (req, res) {
  res.render("services", { title: "Services" });
};

module.exports.register = function (req, res) {
  res.render("register", { title: "Register" });
};

module.exports.forgotpassword = function (req, res) {
  res.render("forgotpassword", { title: "Forgot Password" });
};
