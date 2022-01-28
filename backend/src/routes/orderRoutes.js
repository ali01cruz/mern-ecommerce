import { Router } from "express";
import {
    addOrderItems,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDelivered,
    getMyOrders,
    getOrders,
    
} from '../controllers/orderController.js';
import {protect, admin} from '../middlewares/authMiddleware.js'


const router = Router();

router.get('/',protect,getOrders);
router.post('/',protect, addOrderItems);
router.put('/delivered',protect, updateOrderToDelivered);
router.get('/delivered/:id',protect,getMyOrders);
router.put('/:id/pay',protect, updateOrderToPaid);
router.get('/:id',protect, getOrderById);

export default router;
