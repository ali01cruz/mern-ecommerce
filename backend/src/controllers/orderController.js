import asyncHandler from "express-async-handler";
import Order from '../models/userModel.js'

export const addOrderItems = asyncHandler(async (req , res)=>{
    const{
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body

    if(orderItems && orderItems.length === 0){
        res.status(400);
        throw new Error('No order items');
    }else{
        const order = new Order({
            user:req.user._id,
            orderItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        });
        const createOrder = await order.save();
        res.status(201).json(createOrder);
    }
});


export const getOrderById = asyncHandler(async (req,res)=>{

});

export const updateOrderToPaid = asyncHandler(async (req,res)=>{

});

export const updateOrderToDelivered = asyncHandler(async (req,res)=>{

});

export const getMyOrders = asyncHandler(async (req,res)=>{

});

export const getOrders = asyncHandler(async (req,res)=>{

});
