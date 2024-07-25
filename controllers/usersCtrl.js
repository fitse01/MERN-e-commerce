import User from "../model/User.js";
import bcrypt from 'bcryptjs'

// @desc    Register user    
// @route   POST /api/v1/users/register
// @access  Private/Admin 

export const registerUserCtrl = async (req , res) =>{
    console.log(req.body); // Debugging line
    const { fullname, email, password } = req.body;
    //step 1  check if user exist 
    const userExists = await User.findOne({email});
    if(userExists){
        // throw err
        res.json({
            msg: "User Already exist "
        });
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
};





// export const registerUserCtrl = async (req , res) =>{
//     res.json({
//         msg : "User Register Controller",
//     });
// };