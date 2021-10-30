const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");
const generateToken = require("../utils/GenerateToken");

const registerUser = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phoneNo,
    age,
    address,
    password,
    pic,
    status,
    shortDescription,
    longDescription,
    socail,
    isAdmin,
    services,
    skills,
  } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists.");
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    phoneNo,
    age,
    address,
    password,
    pic,
    status,
    shortDescription,
    longDescription,
    socail,
    isAdmin,
    services,
    skills,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      services: user.services,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Something went wrong");
  }

  res.json({
    email,
  });
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNo: user.phoneNo,
      age: user.age,
      address: user.address,
      shortDescription: user.shortDescription,
      longDescription: user.longDescription,
      social: user.social,
      skills: user.skills,
      status: user.status,
      isAdmin: user.isAdmin,
      services: user.services,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email or Password !!");
  }
});

const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.email = req.body.email || user.email;
    user.phoneNo = req.body.phoneNo || user.phoneNo;
    user.age = req.body.age || user.age;
    user.address = req.body.address || user.address;
    user.shortDescription = req.body.shortDescription || user.shortDescription;
    user.longDescription = req.body.longDescription || user.longDescription;
    user.pic = req.body.pic || user.pic;
    user.status = req.body.status || user.status;
    user.skills = req.body.skills || user.skills;
    user.services = req.body.services || user.services;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNo: user.phoneNo,
      age: user.age,
      address: user.address,
      shortDescription: user.shortDescription,
      longDescription: user.longDescription,
      social: user.social,
      skills: user.skills,
      status: user.status,
      isAdmin: user.isAdmin,
      services: user.services,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(404);
    throw new Error("User Not Found !!!!");
  }
});

module.exports = { registerUser, authUser, updateUserProfile };
