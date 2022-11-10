// TODO: User
const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    thoughts: [],
    friends: [],
    _id: Number.AUTO_INCREMENT,
    username: String,
    email: String,
    friendCount: Number,
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.get(function () {
  return `${this.username} ${this.email}`;
});

const User = model("user", userSchema);

module.exports = User;
// username

// String
// Unique
// Required
// Trimmed
// email

// String
// Required
// Unique
// Must match a valid email address (look into Mongoose's matching validation)
// thoughts

// Array of _id values referencing the Thought model
// friends

// Array of _id values referencing the User model (self-reference)
// Schema Settings

// Create a virtual called friendCount that retrieves the length of the user's friends array field on query.
