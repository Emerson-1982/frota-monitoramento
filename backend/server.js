const express = require("express");
const cors = require("cors");
const path = require("path");

const gpsRoutes = require("./routes/gps");
const reportRoutes = require("./routes/report");

const app = express();

app.use(cors());
app.use(express.json());

// Serve HTML files from the public folder
app.use(express.static(path.join(__dirname, "public")));

// API routes
app.use("/api/gps", gpsRoutes);
app.use("/api/report", reportRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Fleet server is running ✅");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
