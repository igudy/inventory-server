const User = require("../model/userModel");

const signupService = async (userInfo) => {
  const user = await User.create(userInfo);
  return user;
};

const findUserByEmail = async (email) => {
  const res = await User.findOne({ email });
  return res;
};

const loginService = async (userInfo) => {
  const user = await User.create(userInfo);
  return user;
};

// Export the functions at the bottom
module.exports = {
  signupService,
  findUserByEmail,
  loginService,
};
