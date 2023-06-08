const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    phoneNumber: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return /^[0-9]{10}$/.test(value);
        },
        message: "Phone number must be a 10-digit number.",
      },
    },
    name: {
      type: String,
      required: true,
    },
    dateOfCheckup: {
      type: Date,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
