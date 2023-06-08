const express = require("express");
const router = express.Router();
const doctorsApi = require("../../../controllers/api/v1/doctors_api");
const passport = require("passport");

router.post("/login", doctorsApi.createSession);
router.post("/register", doctorsApi.create);

module.exports = router;
