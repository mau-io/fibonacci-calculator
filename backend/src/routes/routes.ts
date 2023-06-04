import { Router } from 'express';
import FibonacciController from "../controllers/fibonacci.controller";

const router: Router = Router();

router.get("/:n", FibonacciController.getFibonacciNumber);

export default router;
