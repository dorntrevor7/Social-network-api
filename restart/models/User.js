const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true, trim: true },
  email: { type: String, unique: true, required: true },
  thoughts: { type: mongoose.Schema.Types.ObjectId, ref: "Thought" },
});

const userThought = new mongoose.Schema({
  thoughtText: { type: String, unique: true, required: true },
  createdAt: { type: Date, default: Date.now },
  username: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const User = mongoose.model("User", userSchema);
const Thought = mongoose.model("Thought", userSchema);

const handleError = (err) => console.error(err);

// Will add data only if collection is empty to prevent duplicates
// More than one document can have the same username value
User.find({}).exec((err, collection) => {
  if (collection.length === 0) {
    User.insertMany(
      [
        {
          username: "trevdorn67558",
          email: "trev@test.com",
        },
        {
          username: "Kids5533",
          email: "kidkid@test.com",
        },
      ],
      (insertErr) => {
        if (insertErr) {
          handleError(insertErr);
        }
      }
    );
  }
});

module.exports = { User, Thought };
