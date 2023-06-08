const Patient = require("../../../models/patient");
const Report = require("../../../models/report");

module.exports.registerPatient = async function (req, res) {
  try {
    const patient = await Patient.create(req.body);
    return res.json(200, {
      message: "Patient registered succesfully!",
      data: {
        patient,
      },
    });
  } catch (error) {
    console.log("Error in registering patient", error);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};

module.exports.createReport = async function (req, res) {
  console.log("REQ USER", req.user);
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.json(422, {
        message: "Invalid Patient id",
      });
    }
    const report = await Report.create({
      patient: patient,
      doctor: req.user,
      status: req.body.status,
      date: req.body.date,
    });

    return res.json(200, {
      message: "Report created succesfully!",
      data: {
        report,
      },
    });
  } catch (error) {
    console.log("Error in registering patient", error);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};

module.exports.getAllReports = async function (req, res) {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) {
      return res.json(422, {
        message: "Invalid Patient id",
      });
    }
    const reports = await Report.find({ patient: req.params.id }).sort({
      createdAt: 1,
    });
    if (!reports) {
      return res.json(404, {
        message: "No reports found with this patient id",
      });
    }

    return res.json(200, {
      message: `Here are all the reports for patient id ${req.params.id}`,
      data: {
        reports,
      },
    });
  } catch (error) {
    console.log("Error in getting reports", error);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};
