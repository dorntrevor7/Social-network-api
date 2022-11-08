const router = require("express").Router();
const {} = require("../../controllers/videoController");

// /api/routes2
router.route("/").get({}).post({});

// /api/routes2/:route
router.route("/:route").get({}).put({}).delete({});

// /api/routes2/:routeId/route
router.route("/:routeId/route").post({});

// /api/routes2/:routeId/route/:routeId
router.route("/:routeId/route/:routeId").delete({});

module.exports = router;
