import { Router } from "express";
import initUserRouter from "./user";

export default function initRouter(): Router {
  const router = Router();

  router.use('/users', initUserRouter());

  return router;
}
