import { Router } from "express";
import userRouter from "./userRouter.js";
import routerAuth from "./auth.js";


const indexRouter = Router();

indexRouter.use("/users", userRouter);
indexRouter.use("/auth", routerAuth);

export default  indexRouter