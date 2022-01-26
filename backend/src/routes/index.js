import { Router } from "express";
import userRouter from './userRoutes.js';
import routerProduct from './productRoutes.js'
import routerOrder from './orderRoutes.js'

const router = Router();

router.use('/users', userRouter);
router.use('/products', routerProduct);
router.use('/order', routerOrder);

export default router;
