import express from "express";
import { HelloRoutes } from "./HelloRoutes";
import { UserRoutes } from "./UserRoutes";

const router = express.Router();

router.use(HelloRoutes);
router.use(UserRoutes);

export { router as Routes };
