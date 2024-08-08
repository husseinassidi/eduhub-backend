import express from 'express';
import { createWithdrawal, getWithdrawals, getWithdrawalById, updateWithdrawal, deleteWithdrawal } from '../controllers/withdrawal.controller.js';

const router = express.Router();

router.post('/withdrawals', createWithdrawal);
router.get('/withdrawals', getWithdrawals);
router.get('/withdrawals/:id', getWithdrawalById);
router.put('/withdrawals/:id', updateWithdrawal);
router.delete('/withdrawals/:id', deleteWithdrawal);

export default router;
