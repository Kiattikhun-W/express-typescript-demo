import express from "express";
import config from "./config/config";
import { Routes } from "./routes";

const app = express();

// Use the configuration settings for the current environment
const env = process.env.NODE_ENV || "development";
const envConfig = config[env];

// Set up the database connection

// import mongoose from "mongoose";
// mongoose.connect(
//   `mongodb://${envConfig.database.host}:${envConfig.database.port}/${envConfig.database.name}`,
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

// Set up the port
app.set("port", envConfig.port);

// Define your routes and middleware here...
app.use("/api", Routes);

app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
});
