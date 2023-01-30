const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  user_id: {
    type: String,
    trim: true,
  },
  user_pw: {
    type: String,
    trim: true,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
