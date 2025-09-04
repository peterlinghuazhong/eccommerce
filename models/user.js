const { Schema, model } = require("mongoose");

/*  fileds 
   - name
   -email
   -password
   -role


*/

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // ensure the email entered is unique
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"], // emun is to control the  value for role
    default: "user",
  },
});

const User = model("User", userSchema);
module.exports = User;
