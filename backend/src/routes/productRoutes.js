/*import { Router } from "express";
import {
    
} from '../controllers/productController.js';
import {protect, admin} from '../middlewares/authMiddleware.js'

const router = Router();

router.post('/', registerProduct);
router.get('/',protect, admin, getProducts);
router.delete('/:id',protect,deleteProduct);
router.get('/:id', protect, admin, getProductById);
router.put('/:id', protect, updateProduct);

export default router;
**/