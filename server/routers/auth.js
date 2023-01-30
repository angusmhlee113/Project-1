const express = require("express");
const User = require("../models/user");
const router = new express.Router();
const { isValidEmail, isValidText } = require("../util/validation");
let errors = {};

router.post("/signup", async (req, res) => {
  const data = req.body;
  let errors = {};

  //Check if email is valid, else check if existed in database
  if (!isValidEmail(data.user_id)) {
    errors.user_id = "Invalid email.";
  } else {
    try {
      const usersearch = await User.find(
        { user_id: data.user_id },
        { new: true, runValidators: true }
      );
      if (usersearch.length !== 0) {
        res.send("Email existed");
      }
    } catch (error) {}
  }
  if (!isValidText(data.user_pw, 6)) {
    errors.user_pw = "Invalid password. Must be at least 6 characters long.";
  }
  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: "User signup failed due to validation errors.",
      errors,
    });
  }
  //create the user
  try {
    const createdUser = new User(data);
    await createdUser.save();
    //const authToken = createJSONToken(createdUser.email);
    res.send("done");
  } catch (error) {}
});
module.exports = router;
