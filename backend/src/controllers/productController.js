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

export const getProductById = asyncHandler(async (req,res)=>{
    let id=req.params.id
    const product = await Product.findById({_id:id})
    if(!product){
        res.status(404)
        throw new Error('Produc Not Found');
    }
    res.status(200).json(product)

})
export const deleteProduct = asyncHandler(async (req, res)=>{

});

export const registerProduct = asyncHandler(async (req,res)=>{
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

export const createProductReview = asyncHandler(async (req,res)=>{
    const {rating ,comment} = req.body;
    const product = await Product.findById(req.params.id);
    if(product){
        const alreadyReviewed = product.reviews.find(
            (r) => r.user.toString()=== req.params.id.toString()
        );
        if(alreadyReviewed){
            res.status(400);
            throw new Error('Produc already reviewed');
        }
        const review = {
            name:req.user.name,
            rating:Number(rating),
            comment,
            user:req.user._id,
        };
        product.reviews.push(review);
        product.numReviews = product.reviews.length;
        product.rating =
            product.reviews.reduce((acc,item)=>item.rating + acc ,0) /
            product.reviews.length;
        await product.save();
        res.status(201).json({messge:'Review added'});

    }else{
        res.status(404);
        throw new Error('Product not found');
    }
})

export const getTopProducts = asyncHandler(async (req ,res)=>{
    
})
