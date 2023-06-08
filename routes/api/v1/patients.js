const express = require("express");
const router = express.Router();
const PatientsApi = require("../../../controllers/api/v1/patients_api");
const passport = require("passport");

router.post(
  "/register",
  passport.authenticate("jwt", { session: false }),
  PatientsApi.registerPatient
);
router.post(
  "/:id/create_report",
  passport.authenticate("jwt", { session: false }),
  PatientsApi.createReport
);
router.get(
  "/:id/all_reports",
  passport.authenticate("jwt", { session: false }),
  PatientsApi.getAllReports
);

module.exports = router;
