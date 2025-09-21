import mongoose, { Document, Model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';

export interface UserDocument extends Document {
  _id: string; // explicitly type _id
  name: string;
  email: string;
  password: string;
  username?: string;
  avatar?: string;
  isEmailVerified?: boolean;
  emailVerificationToken?: string;
  emailVerificationExpires?: Date;
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
  otpEnabled?: boolean;
  tempOTP?: string;
  tempOTPExpires?: Date;
  createdAt?: Date;
  lastLogin?: Date;

  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new Schema<UserDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, unique: true },
  avatar: String,
  isEmailVerified: { type: Boolean, default: false },
  emailVerificationToken: String,
  emailVerificationExpires: Date,
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  otpEnabled: { type: Boolean, default: false },
  tempOTP: String,
  tempOTPExpires: Date,
  createdAt: { type: Date, default: Date.now },
  lastLogin: Date
});

// Password comparison helper
userSchema.methods.comparePassword = async function (candidatePassword: string) {
  return bcrypt.compare(candidatePassword, this.password);
};

export const User: Model<UserDocument> = mongoose.model<UserDocument>('User', userSchema);
