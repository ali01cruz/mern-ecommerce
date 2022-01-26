import { Router } from "express";
import {
    registerProduct,
    getProducts,
    deleteProduct,
    getProductById,
    updateProduct,
    createProductReview,
    
} from '../controllers/productController.js';
import {protect, admin} from '../middlewares/authMiddleware.js'


const router = Router();

router.post('/',protect, registerProduct);
router.post('/:id/review',protect, createProductReview);

router.get('/',protect, getProducts);
router.delete('/:id',protect,deleteProduct);
router.get('/:id', protect, admin, getProductById);
router.put('/:id', protect, updateProduct);

export default router;
