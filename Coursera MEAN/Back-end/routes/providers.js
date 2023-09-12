var express = require("express");
var router = express.Router();
const providerController = require("../controllers/providers");

/* GET list page. */
router.get("/", providerController.list);
/* GET Details Page */
router.get("/details/:id", providerController.details);
/* GET Edit Page */
router.get("/edit/:id", providerController.edit);
/* POST Update Page */
router.post("/update/:id", providerController.update);
module.exports = router;
