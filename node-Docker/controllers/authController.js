const User =require("../models/userModel")
const bcrypt =require("bcryptjs")


exports.signup = async(req,res)=>{
   
    
    try {
        const { username ,password } =req.body;
        const hashpassword =await bcrypt.hash(password,12);

        const newUser = await User.create({
            username,
            password:hashpassword,
        });
        res.status(201).json({
            status:'success',
            data:{
                user:newUser,
            }
        })
    } 
    catch (error) {
        console.log(error);
        res.status(400).json({
            status:'fail',
            message:"User already exists"
        })
     }

}


exports.signin = async(req,res)=>{
    const { username ,password } =req.body;
    
    
    try {
        const user = await User.findOne({username})

        if(!user)
        {
           return  res.status(404).json({
                status:'fail',
                message:'user not found'
            })

        }
        else{
       const isCorrect=    await bcrypt.compare(password,user.password)

       if(isCorrect)
       {
        res.status(200).json({
            status:'success'
        })
       }
       else
       {
        return  res.status(404).json({
            status:'fail',
            message:'password or username incorect'
        })

       }
        }

    } 
    catch (error) {
        console.log(error);
        res.status(400).json({
            status:'fail',
        })
     }

}

