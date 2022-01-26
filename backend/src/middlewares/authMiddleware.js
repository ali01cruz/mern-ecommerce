import jwt from  'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import config from '../config/index.js'

export const protect = asyncHandler(async (req,res,next)=>{
    let token;
    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')

    ){
        try{
            token=req.headers.authorization.split(' ')[1];
            const decode = jwt.verify(token, config.jwtSecret);
            req.user = await User.findById(decode.id).select('-password');
            return next();

        }catch (error){
         console.error(error);
         res.status(401);
         throw new Error('Not authorized , no token');

        }
    }
     if (!token){
       res.status(401);
     throw new Error('Not authorized, no token');
        
    }
});


export const admin = (req,res,next)=>{
    
}