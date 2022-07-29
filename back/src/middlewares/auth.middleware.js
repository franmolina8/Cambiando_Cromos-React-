const jwt = require("jsonwebtoken");
const HTTPSTATUSCODE = require("../utils/httpStatusCode");
const bcrypt = require("bcrypt");
const {verifyToken} = require ("../utils/jwt");
const User = require ("../api/models/user.model")



const isRegistered = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return next(setError(404, "Unauthorized"));
    }
    const parsedToken = token.replace("Bearer ", "");
    const validToken = verifyToken(parsedToken, process.env.JWT_SECRET);
    const userLogued = await User.findById(validToken.id);

    userLogued.password = null;
    req.user = userLogued;
    next();
  } catch (error) {
    return next(error);
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log(" uno ", token)
    if (!token) {
      return next(setError(404, "Unauthorized"));
    }
    const parsedToken = token.replace("Bearer ", "");
    console.log(" dos", parsedToken, process.env.JWT_SECRET)
    const validToken = verifyToken(parsedToken, process.env.JWT_SECRET);

    console.log("tres ", validToken)
    const userLogued = await User.findById(validToken.id);
    console.log("cuatro ", userLogued)

    if (userLogued.rol === "admin") {
      userLogued.password = null;
      req.user = userLogued;
      next();
    } else {
      return next("no eres admin");
    }
  } catch (error) {
    return next("error");
  }
};

module.exports = {  isRegistered, isAdmin };

// const isAuth = (req, res, next) => {
//   const authorization = req.headers.authorization;

//   if (!authorization) {
//     return res.json({
//       status: 401,
//       message: HTTPSTATUSCODE[401],
//       data: null,
//     });
//   }

//   const splits = authorization.split(" ");
//   if (splits.length != 2 || splits[0] != "Bearer") {
//     return res.json({
//       status: 400,
//       message: HTTPSTATUSCODE[400],
//       data: null,
//     });
//   }

//   const jwtString = splits[1];

//   try {
//     var token = jwt.verify(jwtString, req.app.get("secretKey"));
//   } catch (error) {
//     return next(error);
//   }

//   const authority = {
//     id: token.id,
//     name: token.name,
//   };

//   req.authority = authority;

//   next();
// };
