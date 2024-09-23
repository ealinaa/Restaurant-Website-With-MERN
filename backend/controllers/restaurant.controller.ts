import { Request, Response } from "express";
import { Restaurant } from "../models/restaurant.model";

export const createRestaurant = async(req:Request, res:Response) => {
    try{
        const{restaurantName, city, country, price, deliveryTime,cuisines} = req.body

        const restaurant = await Restaurant.findOne({User:req.id});
        if(restaurant) {
            return res.status(400).json({
                success:false,
                message: "Restaurant already exist for this User"

            })
        }

    } catch(error) {
        console.log(error)
        return res.status(500).json({message: "Internal Server Error"})

    }
}