import mongoose from 'mongoose';

const withdrawalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  classId: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true },
  status: {
    type: String,
    enum: ['issued', 'accepted', 'rejected', null],
    default: null,
  },
  description: { type: String, maxlength: 500 },
}, { timestamps: true });

export default mongoose.model('Withdrawal', withdrawalSchema);
