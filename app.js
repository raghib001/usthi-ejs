let express = require("express");
let app = express();
let config = require("./config/config");
let api = require("./routes/api");
let cors = require("cors");
const path = require("path");
app.set("view engine", "ejs");

const formidable = require("express-formidable");
app.use(formidable({ maxFieldsSize: 50971520 }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// let db = require("./src/models/index");
app.options("*", cors());

app.use("/uploads", express.static("uploads"));

app.use("/", api);

app.use("/public", express.static("public"));

const viewsPath = path.join(__dirname, "/views");
app.set("views", viewsPath);

app.listen(config.port, () => {
  console.log("listen on : " + config.port);
});
