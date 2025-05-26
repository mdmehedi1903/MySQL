const User = require("../models/user");

exports.demo = async (req, res) => {
  try {
    const reqBody = req.body;
    const savedUser = await User.create(reqBody);

    res.status(201).json({
      message: "User created successfully",
      user: savedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating user",
      error: error.message,
    });
  }
};
