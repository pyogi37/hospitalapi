const express = require("express");
const router = express.Router();
const ReportsApi = require("../../../controllers/api/v1/reports_api");
const passport = require("passport");

router.get(
  "/:status",
  passport.authenticate("jwt", { session: false }),
  ReportsApi.getAllReports
);

module.exports = router;
