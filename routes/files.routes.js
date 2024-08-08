import express from 'express';
import { createFile, getFiles, getFileById, updateFile, deleteFile } from '../controllers/files.controller.js';

import authMiddleware from '../middleWares/authenticate.middleware.js';
import authorizeRole from '../middleWares/roleMiddleWare.js';



const router = express.Router();

router.post('/files',authMiddleware,authorizeRole("isAdmin"), createFile);
router.get('/files',authMiddleware, getFiles);
router.get('/files/:id',authMiddleware, getFileById);
router.put('/files/:id',authMiddleware,authorizeRole("isAdmin"), updateFile);
router.delete('/files/:id',authMiddleware,authorizeRole("isAdmin"), deleteFile);

export default router;
