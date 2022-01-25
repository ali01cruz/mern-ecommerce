import asyncHandler from "express-async-handler";
import Product from '../models/productModel.js'

export const getProducts = asyncHandler(async (req , res)=>{
    const pageSize = 10;
    const page = Number(req.query.pageNumber) || 1;
    const keyword = req.query.keyword
    ?{
        name :{
            $regex:req.query.keyword,
            $options:'i'
        },
    }:{};
    const count = await Product.countDocuments({...keyword});
    const products = await Product.find({...keyword})
        .limit(pageSize)
        .skip(pageSize * (page - 1));
    return res.json({products ,page ,pages:Math.ceil(count / pageSize)})
})

export const getProductsById = asyncHandler(async (req,res)=>{

})
export const deleteProduct = asyncHandler(async (req, res)=>{

});

export const createProduct = asyncHandler(async (req,res)=>{
    const product = new Product({
        name:'Sample name',
        price:0,
        user:req.user._id,
        image:'/image/',
        brand:'Sample brand',
        category:'Sample category',
        contInStock:0,
        numReviews:0,
        description:'Sample description',
    });
    const createProduct = await product.save();
    res.status(201).json(createProduct)
})

export const updateProduct = asyncHandler(async (req ,res)=>{
    
})