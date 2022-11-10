const connection = require("../config/connection");
const { User } = require("../models");
const { getRandomName } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  await User.deleteMany({});

  const users = [];

  for (let i = 0; i < 20; i++) {
    const fullName = getRandomName();
    const first = fullName.split(" ")[0];

    users.push({
      first,
      last,
    });
  }

  await User.collection.insertMany(users);

  // loop through the saved videos, for each video we need to generate a video response and insert the video responses
  console.table(users);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
