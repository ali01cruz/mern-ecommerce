import asyncHandler from "express-async-handler";
import Order from '../models/orderModel.js'
import User from "../models/userModel.js";
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
    console.log("hoal");
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
    const order = await Order.findById(req.params.id).populate({
        path: 'user',
        model: User,
        select:'name email'
    })
    //console.log(order.user._id.toString());
    if(!order){
        res.status(404)
        throw Error('Not Found Order') 
    }
    if((order && req.user._id.toString()===order.user._id.toString()) || (order && req.user.isAdmin)){
        res.status(200).json(order)
    }
});

export const updateOrderToPaid = asyncHandler(async (req,res)=>{
    //console.log(ordenExist);
    
});

export const updateOrderToDelivered = asyncHandler(async (req,res)=>{

});

export const getMyOrders = asyncHandler(async (req,res)=>{

});

export const getOrders = asyncHandler(async (req,res)=>{
    const orders = await Order.find().populate({
        path: 'user',
        model: User,
        select:'id name'
    })
     
    if(!orders){
        res.status(404)
        throw Error('Not Found Orders') 
    }
    res.status(200).json({
        orders
    });

});
