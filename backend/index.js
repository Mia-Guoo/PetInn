const cors = require("cors");
var Express = require("express"),
  app = Express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose");
(User = require("./models/userListModels")),
  (bodyParser = require("body-parser"));

mongoose.Promise = global.Promise;
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./routes/userListRoutes");
routes(app);

// get driver connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", async () => {
  console.log("MongoDB database connection established successfully");
  try {
    const user = await User.findOne({});
    console.log("User found:", user);
  } catch (error) {
    console.error("Error finding user:", error);
  }
});
app.listen(port);
console.log("User List started on " + port);
