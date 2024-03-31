var Express = require("express"),
  app = Express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose");
(User = require("./models/userListModels")),
  (bodyParser = require("body-parser"));

mongoose.Promise = global.Promise;
// mongoose.connect(
//   "mongodb+srv://miaguo:0406@cluster0.g6qrtod.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// );

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var route = require("./routes/userListRoutes");
route(app);

// get driver connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(port);
console.log("User List started on " + port);
