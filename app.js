const express = require("express");
const app = express();

const path = require("path");

// Set EJS as the view engine
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); //  Specify the views directory

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define a route to render the 'index.ejs' template
app.get("/", (req, res) => {
  res.render("index", {
    title: "Home Page",
    message: "Express + EJS boilerplate in one file!",
  });
});

// Rout For Get
app.get("/:username", (request, response) => {
  response.send(`${request.params.username}`);
});
app.get("/:user/:age", (request, response) => {
  response.send(`welcome ${request.params.user} of  ${request.params.age}`);
});

app.post("/submit", (req, res) => {
  res.render("index", {
    title: "Form Submitted",
    message: "You sent data:",
    data: req.body,
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running → http://localhost:${PORT}`);
});
