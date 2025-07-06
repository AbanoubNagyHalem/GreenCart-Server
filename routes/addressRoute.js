import express from "express";
import authSeller from "../middlewares/authSeller.js";
import { addAddress, getAddress } from "../controllers/addressController.js";

const addressRouter = express.Router();

addressRouter.post("/add", authSeller, addAddress);
addressRouter.post("/get", authSeller), getAddress;

export default addressRouter;
