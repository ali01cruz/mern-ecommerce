import {Router} from 'express';
import {upload, uploadConfig} from '../controllers/uploadController.js';
import {protect, admin} from '../middlewares/authMiddleware.js';


const router = Router();

router.post('/',protect,admin,uploadConfig,upload);

export default router;

