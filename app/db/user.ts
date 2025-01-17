import mongoose, { Document, Schema } from 'mongoose';

// Define the TypeScript interface for the User data
export interface IUser extends Document {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
}

// Create the user schema
const userSchema = new Schema<IUser>({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,  // Ensures email is unique
  },
  password: {
    type: String,
    required: true,
    minlength: 6,  // Minimum password length
  },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Create and export the User model
const User = mongoose.model<IUser>('User', userSchema);

export default User;
    