import Withdrawal from '../models/withdrawal.model.js';

// Create a new withdrawal
export const createWithdrawal = async (req, res) => {
  try {
    const newWithdrawal = new Withdrawal(req.body);
    const savedWithdrawal = await newWithdrawal.save();
    res.status(201).json(savedWithdrawal);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all withdrawals
export const getWithdrawals = async (req, res) => {
  try {
    const withdrawals = await Withdrawal.find();
    res.status(200).json(withdrawals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single withdrawal by ID
export const getWithdrawalById = async (req, res) => {
  try {
    const withdrawal = await Withdrawal.findById(req.params.id).populate('userId').populate('classId');
    if (!withdrawal) {
      return res.status(404).json({ message: "Withdrawal not found" });
    }
    res.status(200).json(withdrawal);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a withdrawal by ID
export const updateWithdrawal = async (req, res) => {
  try {
    const updatedWithdrawal = await Withdrawal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedWithdrawal) {
      return res.status(404).json({ message: "Withdrawal not found" });
    }
    res.status(200).json(updatedWithdrawal);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a withdrawal by ID
export const deleteWithdrawal = async (req, res) => {
  try {
    const deletedWithdrawal = await Withdrawal.findByIdAndDelete(req.params.id);
    if (!deletedWithdrawal) {
      return res.status(404).json({ message: "Withdrawal not found" });
    }
    res.status(200).json({ message: "Withdrawal deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
