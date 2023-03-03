import express, { Router } from "express";
import { HelloRoutes, UserRoutes } from "./routes";

const router = express.Router();

router.use(HelloRoutes);
router.use(UserRoutes);

export { router as Routes };
