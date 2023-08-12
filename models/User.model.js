const { Schema, model, SchemaTypes } = require("mongoose");

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    login: { type: String, required: true },
    password: { type: String, required: true },
    city: [{ type: SchemaTypes.ObjectId, ref: "City" }],
  },
  { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
