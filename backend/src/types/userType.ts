export interface UserType {
  _id: string;
  name: string;
  email: string;
  password: string;
  username?: string;
  avatar?: string;
  otpEnabled?: boolean;
  otpSecret?: string;
  tempOTP?: string;
  tempOTPExpires?: Date;
  isEmailVerified: boolean;
  emailVerificationToken?: string;
  emailVerificationExpires?: Date;
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
  lastLogin?: Date;
}
