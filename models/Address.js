import mongoose, { model, Schema } from "mongoose";

const addressSchema = new Schema({
  userId: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipcode: { type: Number, required: true },
  country: { type: String, required: true },
  phone: { type: String, required: true },
});

const Address = mongoose.models.address || model("address", addressSchema);

export default Address;
