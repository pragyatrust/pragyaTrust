import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  subtitle: {
    type: String,
    trim: true
  },
  type: {
    type: String,
    enum: ['upcoming', 'previous'],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  descriptionHtml: {
    type: String
  },
  playlistUrl: {
    type: String,
    trim: true
  },
  playlistMeta: {
    title: String,
    description: String,
    thumbnailUrl: String,
    videoCount: Number,
    videos: [{
      title: String,
      videoId: String,
      thumbnailUrl: String,
      publishedAt: Date
    }]
  },
  heroUrl: {
    type: String,
    trim: true
  },
  duration: {
    type: String,
    trim: true
  },
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    default: 'Beginner'
  },
  prerequisites: {
    type: String
  },
  objectives: [String],
  courseFlow: [String],
  outcome: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

courseSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export const Course = mongoose.model('Course', courseSchema);
