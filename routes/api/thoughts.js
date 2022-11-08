const router = require("express").Router();
const {} = require("../../controllers/videoController");

// TODO: GET to get all thoughts

// GET to get a single thought by its _id

// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)

// // example data
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "lernantino",
//   "userId": "5edff358a0fcb779aa7b118b"
// }
// PUT to update a thought by its _id

// DELETE to remove a thought by its _id

// /api/routes2
router.route("/").get({}).post({});

// /api/routes2/:route
router.route("/:route").get({}).put({}).delete({});

// /api/routes2/:routeId/route
router.route("/:routeId/route").post({});

// /api/routes2/:routeId/route/:routeId
router.route("/:routeId/route/:routeId").delete({});

module.exports = router;
