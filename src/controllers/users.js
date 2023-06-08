var randomid = require("randomid");
const jwt = require("jsonwebtoken");


//GET '/users'



const createUser = async (req, res, next) => {
  
  const {
    firstName,
    lastName,
    email,
    password: hashedPassword,
    registerAs,
    phone,
  } = req.body;
  try {
   
    const id = randomid(6);
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(hashedPassword, salt);
    // const user = await models.User.create({
    //   id,
    //   firstName,
    //   lastName,
    //   email,
    //   registerAs,
    //   phone,
    //   password,
    // });

    return res.status(201).json({
      message: "Your account was successfully created",
      user,
    });
  } catch (err) {
    return res.status(200).json({
      message: "User was not  created",
      error: err,
    });
  }
};
// PST PARTNER

//GET '/users'

const getToken = ({ firstName, email }) =>
  jwt.sign(
    {
      email,
      firstName,
    },
    process.env.JWT_KEY,
    { expiresIn: "1d" }
  );

const loginUser = async (req, res, next) => {
 
  const { email, password } = req.body;
  
  try {
    // const user = await models.User.findOne({ where: { email } });
    if (!user) {
      return res.status(200).json({
        message: "Authentication Failed! Please check your credentials",
      });
    }
    const match = bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(200).json({
        message: "Authentication Failed! Please check your credentials",
      });
    }
    const token = getToken(user);
    return res.status(200).json({ message: "Login Successful", user, token });
  } catch (err) {
    console.log(err);
    return res.status(200).json({
      message: "We have errors in your request",
    });
  }
};



module.exports = {
  createUser,
  loginUser,
 
};
