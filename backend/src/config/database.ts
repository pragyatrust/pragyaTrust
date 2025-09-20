import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    if (process.env.MONGO_URL) {
      await mongoose.connect(process.env.MONGO_URL);
      console.log('✅ MongoDB connected successfully');
    } else {
      console.log('📝 Using in-memory storage (no MongoDB connection)');
    }
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    // Don't exit process, fall back to in-memory storage
  }
};
