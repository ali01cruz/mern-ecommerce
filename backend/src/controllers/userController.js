import asyncHandler from 'express-async-handler';
import generateToken from '../common/generateToken.js';
import User from '../models/userModel.js';

export const authUser = asyncHandler(async (req, res)=> {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(user && (await user.matchPassword(password))){
        res.json({
            _id : user._id,  //LO tache por que me tiraba un error 
            name: user.name,
            email : user.email,
            isAdmin: user.isAdmin,
            token : generateToken(user._id)
        });
    }else{
        res.status(401);
        throw new Error('Invalid email or password');
    }
});


export const registerUser = asyncHandler(async (req, res)=> {
    const {name,email, password} = req.body;
    const userExists = await User.findOne({email});
    if(userExists){
        res.status(400);
        throw new Error('User already Exists');
    }

    const user = await User.create({
        name,
        email,
        password
    
    });

    if(user){
        res.status(201).json({
            _id : user._id,
            name: user.name,
            email : user.email,
            isAdmin: user.isAdmin,
            token : generateToken(user._id),
        });
    }else{
        res.status(401);
        throw new Error('Invalid user data');
    }
});


export const getUserProfile = asyncHandler(async(req ,res)=>{
    const id_user = req.user._id
    //usar find_by_id
    const user = await User.findById(id_user).exec();
    console.log(user);
    if(!user){
        res.status(400);
        throw new Error('User already NOT Exists');
    }
    res.status(200).json(user)
});

export const updateUserProfile = asyncHandler(async(req ,res)=>{
    let body = req.body;
    User.updateOne({ _id: body._id }, {
            $set: req.body
        },
        function(error, info) {
            if (error) {
                res.json({
                    resultado: false,
                    msg: 'No se pudo modificar el cliente',
                    err
                });
            } else {
                res.json({
                    resultado: true,
                    info: info
                })
            }
       }

   )  
});

export const getUsers = asyncHandler(async(req ,res)=>{
    User.find((err, Usuarios) =>{
        if (err){
            res.json({
                msj: 'No hay usuarios registrados',
                err
            });
        }else{
            res.json({
                msj: 'Lista de Usuarios',
               Usuarios 
            });
        }
    });
})

export const deleteUser = asyncHandler(async(req ,res)=>{

})

export const getUserById = asyncHandler(async(req ,res)=>{

})

export const updateUser = asyncHandler(async(req ,res)=>{

})