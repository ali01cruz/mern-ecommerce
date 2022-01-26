import { Router } from "express";
import userRouter from './userRoutes.js';
import routerProduct from './productRoutes.js'

const router = Router();

router.use('/users', userRouter);
router.use('/products', routerProduct);

export default router;
