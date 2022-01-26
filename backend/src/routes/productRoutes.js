import { Router } from "express";
import {
    registerProduct,
    getProducts,
    deleteProduct,
    getProductById,
    updateProduct,
} from '../controllers/productController.js';
import {protect, admin} from '../middlewares/authMiddleware.js'


const router = Router();

router.post('/',protect, registerProduct);
router.get('/',protect, admin, getProducts);
router.delete('/:id',protect,deleteProduct);
router.get('/:id', protect, admin, getProductById);
router.put('/:id', protect, updateProduct);

export default router;
