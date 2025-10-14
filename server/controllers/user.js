import User from "./../models/User.js";

const postSignup = async (req, res) => {
  const { name, email, password } = req.body;

  const emailValidationRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  const nameValidationRegex = /^[a-zA-Z]+$/;
  const passwordValidationRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (nameValidationRegex.test(name) === false) {
    return res.status(400).json({
      success: false,
      message: "Name is contain only alphabets and spaces",
    });
  }

  if (emailValidationRegex.test(email) === false) {
    return res.status(400).json({
      success: false,
      message: "Email is not valid",
    });
  }

  if (passwordValidationRegex.test(password) === false) {
    return res.status(400).json({
      success: false,
      message:
        "Password must be at least 8 characters long and at least one uppercase letter, one lowercase letter, one number, and one special character",
    });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
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

export { postSignup, postLogin };
