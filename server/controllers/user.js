import User from "./../models/User.js";

const postSignup = async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await User.findOne({email});
  if(existingUser){
    return res.status(400).json({
        success: false,
        message: `User with ${email} already exists`,
    });
  }

  const newUser = new User({ name, email, password });

  const savedUser = await newUser.save();

  res.json({
    success: true,
    message: "User registered successfully",
    user: savedUser,
  });
};

const postLogin = (req, res) => {};

export { postSignup, postLogin }
