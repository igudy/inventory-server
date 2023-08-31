const jwt = require("jsonwebtoken");

const generateToken = (userInfo) => {
  const payload = {
    email: userInfo.email,
    role: userInfo.role,
  };
  const token = jwt.sign(payload, process.env.TOKEN, {
    expiresIn: "20h",
  });
  return token;
};

// Export the function at the bottom
module.exports = {
  generateToken,
};
