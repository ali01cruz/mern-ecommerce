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

router.get('/', getProducts);
router.delete('/:id',protect,deleteProduct);
router.get('/:id',getProductById);
router.put('/:id', protect, updateProduct);

export default router;
