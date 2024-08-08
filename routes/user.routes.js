 // routes/userRoutes.js
import express from 'express';
import { register,login } from '../controllers/user.controller.js';
import authMiddleware from '../middleWares/authenticate.middleware.js';
import authorizeRole from '../middleWares/roleMiddleWare.js';


const router = express.Router();

// User registration route
router.post('/register', register);
router.post('/login', login);

// Example of a protected route
router.get('/protected', authMiddleware, (req, res) => {
    res.send('This is a protected route');
  });
  
  // Example of a role-based protected route
  router.get('/admin', authMiddleware, authorizeRole('isAdmin'), (req, res) => {
    res.send('This is an admin route');
  });

  
export default router;
