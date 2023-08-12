const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("config");
const morgan = require("morgan");

const app = express();
const PORT = config.get("serverPort");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

app.use(require("./routes"));

async function start() {
  try {
    await mongoose.connect(config.get("dbUrl"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    app.listen(PORT, () => {
      console.log(`Server has been started on port ${PORT}`);
    });
  } catch (e) {
    console.log("Server error", e.message);
    process.exit(1);
  }
}

start();
