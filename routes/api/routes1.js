const router = require("express").Router();
const {} = require("../../controllers/userController");

// /api/routes1/
router.route("/").get({}).post({});

// /api/routes1/:route
router.route("/:route").get({});

module.exports = router;
