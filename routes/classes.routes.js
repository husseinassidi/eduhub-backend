 // routes/userRoutes.js
 import express from 'express';

 import { createClass, deleteClass, readClass, readClasses, updateClass } from '../controllers/class.controller.js';
 
 import authMiddleware from '../middleWares/authenticate.middleware.js';
 import authorizeRole from '../middleWares/roleMiddleWare.js';
 
 
 const router = express.Router();
 router.post('/classes',authMiddleware,authorizeRole('isAdmin'), createClass);
 router.get('/classes/:id',authMiddleware,readClass);
 router.get('/classes',authMiddleware, readClasses);
 router.put('/classes/:id',authMiddleware,authorizeRole('isAdmin'), updateClass);
 router.delete('/classes/:id',authMiddleware,authorizeRole('isAdmin'), deleteClass);




 export default router;
 