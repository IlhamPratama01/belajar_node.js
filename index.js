// const http = require("http");
// const port = 8080;

// http
//   .createServer(function (req, res) {
//     console.log("Aplikasi berjalan pada port : " + port);
//     res.write("<h1>Hello world</h1>");
//     res.write("<p>Selamat datang</p>");
//     res.write("<p>Selamat Bahagia</p>");
//     res.write("<p>Selamat Pagi</p>");
//     res.end();
//   })
//   .listen(port);
// console.log("Aplikasi berjalan pada port : " + port);

// Import essential libraries
const express = require("express");
const app = express();
const port = 3000;
const hari = new Date();

// Setup essential routes
const bukuremote = require("./routes/buku");
const homeremote = require("./routes/home");
const userremote = require("./routes/user");

app.use(bukuremote);
app.use(homeremote);
app.use(userremote);
app.use(express.static("views"));

//add the router
app.listen(port, () => {
  console.log("Starting Node development server: http://localhost:3000");
  console.log(
    `[${hari}] Node 18.15.0 Development Server (http://localhost:3000) started`
  );
});
