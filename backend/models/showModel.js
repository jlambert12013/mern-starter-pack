const mongoose = require("mongoose");

const showSchema = mongoose.Schema({
  showType: {
    type: String,
    required: [true, "Please Add Show "]
  }
});

module.exports = mongoose.model("Show", showSchema);
