"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainRouter = void 0;
const health_routes_1 = require("./health.routes");
const express_1 = require("express");
const mainRouter = (0, express_1.Router)();
exports.mainRouter = mainRouter;
mainRouter.use(health_routes_1.healthRouter);
