const Doctor = require("../../../models/doctor");
const jwt = require("jsonwebtoken");

module.exports.createSession = async function (req, res) {
  try {
    let user = await Doctor.findOne({ email: req.body.email });
    if (!user || user.password != req.body.password) {
      return res.json(422, {
        message: "Invalid username or password",
      });
    }

    return res.json(200, {
      message: "Sign in successfull, here is your token",
      data: {
        token: jwt.sign(user.toJSON(), "hospital_api", {
          expiresIn: "2000000",
        }),
      },
    });
  } catch (error) {
    console.log("Error in finding user");
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};

module.exports.create = async function (req, res) {
  if (req.body.password != req.body.confirm_password) {
    return res.redirect("back");
  }
  try {
    let user = await Doctor.findOne({ email: req.body.email });
    if (user) {
      return res.json(422, {
        message: "USer already exists",
      });
    }
    if (!user) {
      try {
        user = await Doctor.create(req.body);
        return res.json(200, {
          message: "Sign up successfull",
          data: {
            user: user,
          },
        });
      } catch (error) {
        console.log("error in creating new user", error);
        return res.json(500, {
          message: "Internal Server Error",
        });
      }
    }
  } catch (error) {
    console.log("error in creating new user*********", error);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};
