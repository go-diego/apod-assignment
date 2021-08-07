const express = require("express");
const apodApiController = require("./controllers/apodApi.controller")
const path = require("path");
const mongoose = require("mongoose");
const db = require("./models");
const apodController = require("./controllers/apod.controller");
mongoose.connect(
  process.env.MONFODB_URI || "mongodb://localhost/apod-image"
)
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/api/apodImages", apodApiController.getApodImages);
app.get("/api/SavedapodImages", apodController.selectedApod);
app.post("/api/apodImages", apodController.createApod);
app.delete("/api/SavedapodImages", apodController.deleteApod)

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

