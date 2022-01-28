import asyncHandler from "express-async-handler";
import Order from '../models/orderModel.js'

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

    const ordenExists= await Order.findById(req.body.id);
    console.log(ordenExists);
    if (ordenExists && (req.user.isAdmin || ordenExists.user._id.equals(req.user._id))){
        ordenExists.isPaid=true;
        ordenExists.paidAt=new Date();
        ordenExists.paymentMethod={
            id: req.body.id,
            status: req.body.status,
            update_time: renq.body.update_time,
            email_address: req.body.payer.email_address
        };

        ordenExists.save();

        res.status(200).json({
            mns:'Update Order"       '
            });

        
    } else {
        res.status(404);
        throw new Error("Order not found");
    }

});

export const updateOrderToDelivered = asyncHandler(async (req,res)=>{
    const ordenExists= await Order.findById(req.body.id);
    if (ordenExists){
        ordenExists.isDelivered=true;
        ordenExists.deliveredAt=new Date();

        ordenExists.save();

        res.status(200).json({
            mns:'Update Order"       '
            });

        
    } else {
        res.status(404);
        throw new Error("Order not found");
    }
    }


);

export const getMyOrders = asyncHandler(async (req,res)=>{

});

export const getOrders = asyncHandler(async (req,res)=>{

});
