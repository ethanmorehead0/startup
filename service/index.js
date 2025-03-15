const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const uuid = require("uuid");

const express = require("express");
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.listen(port, () => {
  console.log("Listening on port ${port}");
});

app.use(express.json());

let users = [];
let scores = [];

let apiRouter = express.Router();
app.use(`/api`, apiRouter);

let apiRouter = express.Router();
app.use(`/api`, apiRouter);
// app.use(express.static("public"));

// import { defineConfig } from "vite";

// export default defineConfig({
//   server: {
//     proxy: {
//       "/api": "http://localhost:4000",
//     },
//   },
// });

// apiRouter.post("/auth/login", async (req, res) => {
//   const user = await findUser("email", req.body.email);
//   if (user) {
//     if (await bcrypt.compare(req.body.password, user.password)) {
//       user.token = uuid.v4();
//       setAuthCookie(res, user.token);
//       res.send({ email: user.email });
//       return;
//     }
//   }
//   res.status(401).send({ msg: "Unauthorized" });
// });

// apiRouter.delete("/auth/logout", (req, res) => {
//     const user = await findUser('token', req.cookies[authCookieName]);
//     if (user) {
//       delete user.token;
//     }
//     res.clearCookie(authCookieName);
//     res.status(204).end();
// });
