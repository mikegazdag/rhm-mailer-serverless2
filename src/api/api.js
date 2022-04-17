const express = require("express");
const app = express();

app.get("/contact/create", (req, res) => {
  console.log("reps", resp);
  res.json({ statusCode: 200, message: resp || "not found" });

  // 1. Validate response
  // 2. Render template
  // 3. Send email bodies
});

module.exports = app;
