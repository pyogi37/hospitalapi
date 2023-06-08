const Report = require("../../../models/report");

module.exports.getAllReports = async function (req, res) {
  try {
    const reports = await Report.find({ status: req.params.status });

    if (!reports) {
      return res.json(404, {
        message: "No reports found with this status",
      });
    }

    return res.json(200, {
      message: `Here are all the reports for patient id ${req.params.status}`,
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
