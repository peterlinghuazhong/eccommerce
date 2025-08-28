const { Schema, model } = require("mongoose");
//  category model
// -label

const categorySchema = new Schema({
  label: {
    type: String,
    required: true,
  },
});

const Category = model("Category", categorySchema);
module.exports = Category;
