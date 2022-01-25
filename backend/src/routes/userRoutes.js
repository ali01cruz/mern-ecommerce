import { Router } from "express";
import {
    registerUser,
     authUser,
     getUsers,
     getUserProfile,
     updateUserProfile,
     deleteUser,
     getUserById,
     updateUser,
    } from '../controllers/userController.js';
import { admin ,protec} from "../middlewares/authMiddleware.js";


const router = Router();

router.post('/', registerUser);
router.post('/login', authUser);
router.get('/profile' ,protec ,getUserProfile)


/* router.post('/', protect,admin ,getUsers);

router.get('/profile' ,protect ,getUserProfile)
router.put('/profile',protect ,updateUserProfile)
router.delete('/:id',protect, admin ,deleteUser)
router.get('/:id',protect, admin ,getUserById)
router.put('/:id',protect, admin ,updateUser)
 */


export default router;