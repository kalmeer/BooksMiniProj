const { model, Schema } = require("mongoose");

const AccountSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, default: 5 },
  image: { type: String, default: "../images/no_cover.jpg" },
});

{
  timestamps: true;
}
module.exports = model("Books", AccountSchema);
