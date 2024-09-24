import { Request, Response } from "express";
import { Restaurant } from "../models/restaurant.model";
import {Multer} from "multer"
import uploadImageOnCloudinary from "../utils/imageUpload";
import { Order } from "../models/order.model";


export const createRestaurant = async(req:Request, res:Response) => {
    try{
        const{restaurantName, city, country, price, deliveryTime,cuisines} = req.body

        const restaurant = await Restaurant.findOne({User:req.id});
        const file = req.file
        if(restaurant) {
            return res.status(400).json({
                success:false,
                message: "Restaurant already exist for this User"

            })
        }
        if(!file) {
            return res.status(400).json({
                success:false,
                message: "Image is required"

            })
        }
        const imageURL = await uploadImageOnCloudinary(file as Express.Multer.File)
        await Restaurant.create({
            User: req.id,
            restaurantName,
            city,
            country,
            deliveryTime,
            cuisines:JSON.parse(cuisines),
            imageURL

        })
        return res.status(201).json({
            success: true,
            message:"Restaurant Added"
        });


    } catch(error) {
        console.log(error)
        return res.status(500).json({message: "Internal Server Error"})

    }
}

export const getRestaurant = async (req: Request,res:Response) => {
    try{
        const restaurant = await Restaurant.find({User: req.id})
        if(!restaurant) {
            return res.status(404).json({
                success: false,
                message: "Restaurant not found"
            })
        };
        return res.status(200).json({success: true, restaurant})

    } catch(error) {
        console.log(error)
        return res.status(500).json({message: "Internal server error"})
    }
}


export const updateRestaurant  = async(req: Request, res: Response) => {
    try{
        const {restaurantName, city, country, deliveryTime, cuisines} = req.body;
        const file = req.file
        const restaurant = await Restaurant.findOne({User:req.id})
        if(!restaurant){
            return res.status(404).json({
                success:false,
                message: "Restaurant not found"

            })
        };
        restaurant.restaurantName = restaurantName;
        restaurant.city= city;
        restaurant.country= country;
        restaurant.deliveryTime = deliveryTime
        restaurant.cuisines = JSON.parse(cuisines)

        if(file) {
            const imageUrl = await uploadImageOnCloudinary(file as Express.Multer.File)
           restaurant.imageURL = imageUrl
        }
        await restaurant.save()
         return res.status(200).json({
            success: true,
            message: "Restauranat Updated",
            restaurant

        })        

    } catch(error) {
        console.log(error)
        return res.status(500).json({message: "Internal Server error"})
    }
}

export const getRestaurantOrder= async(req: Request ,res: Response) => {
    try{
        const restaurant = await Restaurant.findOne({User: req.id})
        if(!restaurant){
            return res.status(404).json({
                success: false,
                message: "Restaurnat not found"

            })
        };
        const orders = await Order.find({restaurant: restaurant._id}).populate('restaurant').populate('User')
        return res.status(200).json({
            success: true,
            orders
        })


    } catch(error) {
        console.log(error)
        return res.status(500).json({message: "Internal Server Error"})
    }
}

export const updateOrderStatus = async(req: Request, res: Response) => {
    try{
        const {orderId} =req.params
        const {status}= req.body
        const order = await Order.findById(orderId)
        if(!order) {
            return res.status(404).json({
                success: false,
                message: "Order not found"
            })
        }
        order.status = status
        await order.save()
        return res.status(200).json({
            success: true,
            message: "status Updated"
        })

    } catch(error) {
        console.log(error)
        return res.status(500).json({message: "Internal server status"})
    }

}

export const searchRestaurant = async (req: Request, res: Response) => {
    try {
        const searchText = req.params.searchText || ""
        const searchQuery = req.query.searchQuery as string || ""
        const selectedCuisines = (req.query.selectedCuisines as string || "").split(",").filter(cuisine=>cuisine)
        

        
    } catch (error) {
        
    }
}
