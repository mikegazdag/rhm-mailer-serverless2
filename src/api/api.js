module.exports.handler = (evt, ctx, done) => {
  done(null, {
    statusCode: 200,
    headers: {},
    body: JSON.stringify({ message: "hello" }),
  });
};

// const express = require("express");
// const app = express();

// app.get("/test", (req, res) => {
//   res.json({ message: "ok" });
// });

// module.exports = app;
