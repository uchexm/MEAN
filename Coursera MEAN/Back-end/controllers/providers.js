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

  provider.firstname = req.body.firstname;
  provider.lastname = req.body.lastname;
  provider.position = req.body.position;
  provider.company.company_name = req.body.company_name;
  provider.company.address = req.body.address;
  provider.company.address2 = req.body.address2;
  provider.company.city = req.body.city;
  provider.company.state = req.body.state;
  provider.company.postal_code = req.body.postal_code;
  provider.company.phone = req.body.phone;
  provider.company.email = req.body.email;
  provider.company.description = req.body.description;
  provider.company.tagline = req.body.tagline;

  res.render("providers/providers-update", {
    // id: id,
    title: "Service Providers Update",
    // provider: provider,
  });
};

//ADD FORM
module.exports.addform = function (req, res) {
  // let id = req.params.id;
  // let provider = providers.find((provider) => provider.id == id);
  res.render("providers/providers-add-form", {
    // id: id,
    title: "Service Providers Add",
    // provider: provider,
  });
};
//ADD PROVIDER
module.exports.add = function (req, res) {
  //create a random id
  let min = 100000;
  let max = 999999;
  let id = Math.floor(Math.random() * (max - min) + min);
  // let provider = providers.find((provider) => provider.id == id);
  // Craete new provider obj
  let provider = {
    id: id,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    position: req.body.position,
    company: {
      company_name: req.body.company_name,
      address: req.body.address,
      address2: req.body.address2,
      city: req.body.city,
      state: req.body.state,
      postal_code: req.body.postal_code,
      phone: req.body.phone,
      email: req.body.email,
      description: req.body.description,
      tagline: req.body.tagline,
    },
  };
  //Add provider to list
  providers.push(provider);

  res.render("providers/providers-add", {
    // id: id,
    title: "Service Providers Added",
    // provider: provider,
  });
};

// DELETE a provider
module.exports.delete = function (req, res) {
  let id = req.params.id;
  let provider = providers.find((provider) => provider.id == id);
  let company = provider.company.company_name;
  let idx = providers.indexOf(provider);
  // Remove the idx
  providers.splice(idx, 1);
  res.render("providers/providers-delete", {
    // id: id,
    title: "Service Provider Delete",
    company: company,
  });
};
