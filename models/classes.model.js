import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
    className: {
        type: String,
        required: true
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    description: {
        type: String,
        required: false,
        default: null
    },
    files: [{
        type: String,
        required: false
    }]
}, { timestamps: true });

export default mongoose.model("Class", classSchema);




