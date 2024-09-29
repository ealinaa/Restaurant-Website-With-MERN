import { Request, Response } from "express";
import { Order } from "../models/order.model";
import { Restaurant } from "../models/restaurant.model";

export const getOrders = async (req: Request, res: Response) => {
    try {
        const orders = await Order.find({ user: req.id }).populate('user').populate('restaurant');
        return res.status(200).json({
            success: true,
            orders
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const createCheckoutSession = async (req: Request, res: Response) => {
    try {
      const checkoutSessionRequest: CheckoutSessionRequest = req.body;
      const restaurant = await Restaurant.findById(
        checkoutSessionRequest.restaurantId
      ).populate("menu");
      if (!restaurant) {
        return res.status(400).json({
          success: false,
          message: "Restaurant not found",
        });
      }
      const order = new Order({
        restaurant: restaurant._id,
        user: req.id, // id from token generated when user is authenticated is used
        deliveryDetails: checkoutSessionRequest.deliveryDetails,
        cartItems: checkoutSessionRequest.cartItems,
        status: "pending",
      });
    }