const express = require("express");

const apiRoutes = require("./routes/api");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static('client/build'));
}
// Add routes, both API and view
app.use("/api", apiRoutes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
