const { Schema, model, SchemaTypes } = require("mongoose");

const citySchema = new Schema(
  {
    name: { type: String, required: true },
    wood: { type: Number, required: true, default: 5000 },
    gold: { type: Number, required: true, default: 10000 },
    user: { type: SchemaTypes.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const City = model("City", citySchema);

module.exports = City;
