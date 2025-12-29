import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  deletedAt: {
    type: Date,
    default: null
  }
}, {
  timestamps: true  // This automatically adds createdAt and updatedAt
});

// Remove ALL pre-save middleware for now
// If you need custom logic, use this format:
// userSchema.pre('save', function(next) {
//   // Your logic here
//   this.updatedAt = Date.now();
//   next();
// });

const User = mongoose.model('User', userSchema);
export default User;