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

router.post('/',protect, addOrderItems);
router.get('/:id',protect, getOrderById);
router.put('/',protect, updateOrderToPaid);
router.put('/delivered',protect, updateOrderToDelivered);
router.get('/delivered/:id',protect,getMyOrders);
router.get('/',protect,getOrders);

export default router;
