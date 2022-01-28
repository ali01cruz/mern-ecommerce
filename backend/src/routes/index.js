import { Router } from "express";
import userRouter from './userRoutes.js';
import routerProduct from './productRoutes.js'
import routerOrder from './orderRoutes.js'
import uploadRouter from './uploadRoutes.js';

const router = Router();

router.use('/users', userRouter);
router.use('/products', routerProduct);
router.use('/order', routerOrder);
router.use('/upload', uploadRouter);
router.use('/config/paypal', (req, res) => res.send(config.paypal));

export default router;
