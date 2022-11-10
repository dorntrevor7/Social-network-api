const router = require("express").Router();
const User = require("../models/User");

// const {} = require("../../controllers/userController");

// TODO: /api/users

// GET all users

// GET a single user by its _id and populated thought and friend data

// POST a new user:

// // example data
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }
// PUT to update a user by its _id

// DELETE to remove user by its _id

// BONUS: Remove a user's associated thoughts when deleted.

// TODO: /api/users/:userId/friends/:friendId

// POST to add a new friend to a user's friend list

// DELETE to remove a friend from a user's friend list

// /api/users/
router.route("/").get(function (req, res) {
  User.find({})
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
});

// /api/routes1/:route
router.route("/:route").get({});

module.exports = router;
