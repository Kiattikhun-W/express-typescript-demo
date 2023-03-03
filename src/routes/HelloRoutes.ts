import express from "express";
import { HelloController } from "../controllers/HelloController";

const router = express.Router();

router.get("/hello", HelloController.sayHello);

export { router as HelloRoutes };
