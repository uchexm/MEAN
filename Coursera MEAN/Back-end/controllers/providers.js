const providers = require("../models/providers");
//LIST
module.exports.list = function (req, res) {
  res.render("providers/providers-list", {
    title: "Service Providers",
    providers: providers,
  });
};
// DETAILS
module.exports.details = function (req, res) {
  let id = req.params.id;
  let provider = providers.find((provider) => provider.id == id);
  res.render("providers/providers-details", {
    id: id,
    title: "Service Providers Details",
    company: provider.company,
  });
};
//EDIT FORM
module.exports.edit = function (req, res) {
  let id = req.params.id;
  let provider = providers.find((provider) => provider.id == id);
  res.render("providers/providers-edit", {
    id: id,
    title: "Service Providers Edit",
    provider: provider,
  });
};
//UPDATE
module.exports.update = function (req, res) {
  let id = req.params.id;
  let provider = providers.find((provider) => provider.id == id);
  res.render("providers/providers-update", {
    // id: id,
    title: "Service Providers Update",
    // provider: provider,
  });
};
