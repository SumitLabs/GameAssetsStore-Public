import User from "../models/userModel.js";
export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      res.satus({
        success: false,
        message: "All field are required",
      });
    }
    const user = await User.find({ email });

    if (user) {
      res.status(400).json({
        success: false,
        message: "user already exissts",
      });
    }
   const newUser =await User.create({
    username,
    email,
    password
   })

   await newUser.save()
   return res.status({
    success:true,
    message:"Sign Up successfully"
   })

  } catch (error) {
     res.status({
    success:false,
    message:error.message
   })
  }
};
