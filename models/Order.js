import mongoose, { Model, Schema } from "mongoose";

const orderSchema = new Schema(
  {
    userId: { type: String, required: true, ref: "user" },
    item: [
      {
        product: { type: String, required: true, ref: "product" },
        quantity: { type: Number, required: true },
      },
    ],
    amount: { type: Number, required: true },
    address: { type: String, required: true, ref: "address" },
    status: { type: String, default: "Order Placed" },
    paymentType: { type: String, required: true },
    isPaid: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

const Order = mongoose.models.order || Model("order", orderSchema);

export default Order;
