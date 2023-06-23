import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { register } from "./controllers/auth.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import { verifyToken } from "./middleware/auth.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/commentRoutes.js";
import { createPost } from "./controllers/posts.js";
import User from "./models/User.js";
import Post from "./models/Post.js";
import { users, posts } from "./data/index.js";
dotenv.config();

// CONFIGURATION

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

/* express.json() is used to convert incoming request body
in raw format (which is in string format) to JSON format
eg . raw format : {"name": "John", "age": 30}
and json format : {
  name : "John",
  age : 30,
}
that is why when we send data to server we first stingify that json data 
eg.  const response = await fetch(`${BASE_URL}/posts/${postId}/like`, {
  method: "PATCH",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ userId: loggedInUserId }),
});
*/
app.use(express.json());

// helmet
import helmet from "helmet";
/*
helmet package is basically used to provide security to website
by preventing it from vaious vulnerabilities by preventing Content-Security-Policy,
X-XSS-Protection, and X-Frame-Options etc 

- cross-site scripting : it is a type of security vulnerability that 
prevent from corss origin scripting , because if this happen then attacker
can inject their code and can steal sensitive information of user
*/
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// morgan
import morgan from "morgan";
/*
if a client makes a GET request to the '/users' endpoint
of your application, morgan will log something like:
eg : GET /users 200 50.231 ms - 3421
this log include vaious information like type of request , endpoint
status code , timetaken for request
*/
app.use(morgan("common"));

// cors
/*
cors is a security feature built in web pages to prevent from
cross-origin resource sharing and but if cross-origin resource
sharing is required then that can be enabled with use of cors
package */
import cors from "cors";
app.use(cors()); // no parameter in cors() => all cross-origin
// resource sharing is enable

// path
// these two packages are used to configure path and they come with node.js itself
import path from "path";
// fileURLToPath function is used to convert fileUrl to path
import { fileURLToPath } from "url";
/*
import.meta.url is used to get meta data or 
url of module which is in use(current module)
so that we can access static files
*/
const __filename = fileURLToPath(import.meta.url);

// this will give current directory path
const __dirname = path.dirname(__filename);
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// multer
import multer from "multer";
//  Multer is an npm package that makes it easy to handle file uploads
// file storage
const storage = multer.diskStorage({
  /* destination is place where file will be stored by server
  in this case it is "public/assets"
  */
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  /*
  filename is used for how uploaded file will be named in server location 
  in this case it is set as file.originalname => it will be stored with its original name
   */
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const uploads = multer({ storage });

// routes with files
/* uploads.single("picture") => one file will be uploaded at a time and 
"picture" is the field name in form where file is stored */
app.get("/", (req, res) => {
  res.send("server is running");
});
app.post("/auth/register", uploads.single("picture"), register);
app.post("/posts", verifyToken, uploads.single("picture"), createPost);

// routes
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/comment", commentRoutes);

// MONGOOSE SETUP
const PORT = process.env.PORT || 6001;

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`SERVER PORT : ${PORT}`));
    // one time only
    // User.insertMany(users);
    // Post.insertMany(posts);
  })
  .catch((error) => {
    console.log(`${error} did not connect`);
  });
