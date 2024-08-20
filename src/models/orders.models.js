import mongoose, { Mongoose, Schema } from "mongoose";
import cartsModel from "./carts.models.js";
import usersModel from './users.models.js'

mongoose.pluralize(null);

const collection = "orders";

const schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user_index",
  },
  cart: { type: { _id: mongoose.Schema.Types.ObjectId }, ref: "carts" },
  number: { type: Number, required: true },
  products: { type: [], required: true },
  totalPrice: { type: Number, default: 0.0 },
  status: { type: String, enum: ['pending', 'ready', 'delivered'], default: 'pending' }
});

schema.pre("find", function () {
  this.populate({ path: "cart", model: cartsModel });
  this.populate({ path: "user", model: usersModel });
});
const model = mongoose.model(collection, schema);

export default model;
