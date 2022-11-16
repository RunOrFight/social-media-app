const router = require("express").Router();
const User = require("../models/User");

router.get("/register", async (req, res) => {
  try {
    const user = await new User({
      username: "John",
      email: "John@gmail.com",
      password: "123456"
    });
    await user.save();
    res.send("ok");
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
