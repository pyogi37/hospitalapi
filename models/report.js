const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
  status: {
    type: String,
    enum: [
      "Negative",
      "Travelled - Quarantine",
      "Symptoms - Quarantine",
      "Positive - Admit",
    ],
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Report = mongoose.model("Report", reportSchema);

module.exports = Report;
