import { healthRouter } from "./health.routes";
import { Router } from "express";

const mainRouter = Router();

mainRouter.use(healthRouter);

export { mainRouter };