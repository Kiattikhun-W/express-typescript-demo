import express from "express";
import config from "./config/config";
import { Routes } from "./routes";

const app = express();
app.use(express.json());

// Use the configuration settings for the current environment
const env = process.env.NODE_ENV || "development";
const envConfig = config[env];

// Set up the database connection

// Set up the port
app.set("port", envConfig.port);

// Define your routes and middleware here...

app.use("/api", Routes);

app.listen(app.get("port"), () => {
  console.log(`hi, I'm listening on port ${app.get("port")} :) !`);
});
