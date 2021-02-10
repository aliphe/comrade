import { Router } from "express";
import initUserRegisterRouter from "./register";

export default function initUserRouter(): Router {
  const router = Router();

  router.use('/register', initUserRegisterRouter());

  return router;
}
