// models/User.js
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    isUser: { type: Boolean, default: true },
    isAdmin: { type: Boolean, default: false },
  },
  courses: {
    enrolled: [
      {
        id: { type: String, required: false },
        status: {
          type: String,
          enum: ["enrolled", "dropped", "completed", "fail"],
          required: true,
        },
      },
    ],
  },
  withdrawal: {
    status: {
      type: String,
      enum: ["issued", "accepted", "rejected", null],
      default: null,
    },
    description: { type: String, maxlength: 500 },
  },
});

// Hash the password before saving the user model
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
}); 



userSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};




export default mongoose.model("User", userSchema);




