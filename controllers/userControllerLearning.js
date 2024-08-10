import User from "../model/User.js";
import bcrypt from 'bcryptjs'
import asyncHandler from 'express-async-handler'

// @desc    Register user    
// @route   POST /api/v1/users/register
// @access  Private/Admin 

export const registerUserCtrl = asyncHandler(async (req , res) =>{
    console.log(req.body); // Debugging line
    const { fullname, email, password } = req.body;
    //step 1  check if user exist 
    const userExists = await User.findOne({email});
    if(userExists){
        // throw err
        throw new Error("User Already exist")
        // res.json({
        //     msg: "User Already exist "
        // });
    }

    // step 2 hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)
    
    // step 3  create user
    const user = await User.create({
        fullname,
        email,
        password:hashedPassword,
    })
    res.status(201).json({
        status:"success",
        massage:"User created Successfully",
        data:user,
    })
});

// export const registerUserCtrl = async (req , res) =>{
//     res.json({
//         msg : "User Register Controller",
//     });
// };


// @desc    Login user    
// @route   POST /api/v1/users/login
// @access  Public

export const loginUserCtrl = asyncHandler(async (req,res) =>{
    const {email,password} = req.body;
    // find user in the Database only by email
    const userFound = await User.findOne({email});

    if (userFound && await bcrypt.compare(password, userFound ?.password)){
        res.json({
            status:"success",
            message :"User logged in successfully ",
            userFound,
        })
    }else{
        throw new Error("Invalid Login Credential");
        // res.json({
        //     status:"failed to logged in ",
        //     message :"failed to logged in "
        // })
    }



    // if (!userFound){
    //     return res.json({
    //         msg:"user is not found invalid login "
    //     })
    // }
    // res.json({
    //     msg:"Login Successfull "
    // })
});