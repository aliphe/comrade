import { Router } from "express";
import createUserRouter from "./user";

export default function initRouter(): Router {
  const router = Router();

  router.use('/users', createUserRouter());

  return router;
}
