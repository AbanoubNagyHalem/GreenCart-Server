import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./configs/db.js";
import sellerRouter from "./routes/sellerRoute.js";
import "dotenv/config";
import connectCloudinary from "./configs/cloudinary.js";
import productRouter from "./routes/productRoute.js";
import userRouter from "./routes/userRoute.js";

const app = express();
const port = process.env.PORT || 4000;

await connectDB();
await connectCloudinary;

const allowedOrigins = ["http://localhost:5173"];

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

app.get("/", (req, res) => res.send("API is Working"));
app.use("/api/user", userRouter);
app.use("/api/seller", sellerRouter);
app.use("/api/product", productRouter);

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
