import express from 'express';
import Joi from 'joi';
import { Course } from '../models/Course.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// In-memory storage fallback
let inMemoryCourses: any[] = [
  {
    _id: '1',
    slug: 'drg-drsya-viveka',
    title: 'Dṛg-Dṛśya-Viveka',
    subtitle: 'The Discrimination between the Seer and the Seen',
    type: 'upcoming',
    description: 'A short but profoundly powerful text of Advaita Vedānta for systematic inner enquiry.',
    duration: '8-10 weeks',
    level: 'Intermediate',
    createdAt: new Date()
  },
  {
    _id: '2',
    slug: 'viveka-chudamani',
    title: 'Viveka Chudamani',
    subtitle: 'The Crest Jewel of Discrimination',
    type: 'previous',
    description: 'A seminal Advaita Vedānta text on the path to Self-realization.',
    duration: 'Completed',
    level: 'Intermediate',
    hasYoutube: true,
    playlistUrl: 'https://www.youtube.com/playlist?list=PLcCCF9CS73I3YB3oBBesI05S7KVXU4W6s',
    createdAt: new Date()
  },
  {
    _id: '4',
    slug: 'tattvabodha',
    title: 'Tattvabodha',
    subtitle: 'Knowledge of Reality',
    type: 'previous',
    description: 'तत्वबोध is a foundational Vedānta text authored by Adi Shankaracharya.',
    duration: 'Completed',
    level: 'Beginner',
    hasYoutube: true,
    playlistUrl: 'https://www.youtube.com/playlist?list=PLcCCF9CS73I1YB3oBBesI05S7KVXU4W6s',
    createdAt: new Date()
  },
  {
    _id: '5',
    slug: 'sanskrit-class',
    title: 'Sanskrit Class',
    subtitle: 'शतश्लोकेन पण्डितः',
    type: 'previous',
    description: 'The "शतश्लोकेन पण्डितः" approach is a focused and practical method.',
    duration: 'Completed',
    level: 'Beginner',
    hasYoutube: true,
    playlistUrl: 'https://www.youtube.com/playlist?list=PLcCCF9CS73I0YB3oBBesI05S7KVXU4W6s',
    createdAt: new Date()
  }
];

const courseSchema = Joi.object({
  slug: Joi.string().trim().required(),
  title: Joi.string().trim().required(),
  subtitle: Joi.string().trim().optional(),
  type: Joi.string().valid('upcoming', 'previous').required(),
  description: Joi.string().required(),
  descriptionHtml: Joi.string().optional(),
  playlistUrl: Joi.string().uri().optional().allow(''),
  heroUrl: Joi.string().uri().optional().allow(''),
  duration: Joi.string().trim().optional(),
  level: Joi.string().valid('Beginner', 'Intermediate', 'Advanced').optional(),
  prerequisites: Joi.string().optional(),
  objectives: Joi.array().items(Joi.string()).optional(),
  courseFlow: Joi.array().items(Joi.string()).optional(),
  outcome: Joi.string().optional()
});

// Get all courses
router.get('/', async (req, res) => {
  try {
    let courses;
    if (process.env.MONGO_URL) {
      courses = await Course.find().sort({ createdAt: -1 });
    } else {
      courses = inMemoryCourses.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }
    res.json(courses);
  } catch (error) {
    console.error('Get courses error:', error);
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

// Get course by slug
router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    let course;
    
    if (process.env.MONGO_URL) {
      course = await Course.findOne({ slug });
    } else {
      course = inMemoryCourses.find(c => c.slug === slug);
    }
    
    if (!course) {
      return res.status(404).json({ error: 'Course not found' });
    }
    
    res.json(course);
  } catch (error) {
    console.error('Get course error:', error);
    res.status(500).json({ error: 'Failed to fetch course' });
  }
});

// Create/Update course (admin only)
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { error, value } = courseSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    let course;
    if (process.env.MONGO_URL) {
      course = await Course.findOneAndUpdate(
        { slug: value.slug },
        value,
        { upsert: true, new: true }
      );
    } else {
      const existingIndex = inMemoryCourses.findIndex(c => c.slug === value.slug);
      if (existingIndex >= 0) {
        inMemoryCourses[existingIndex] = { ...inMemoryCourses[existingIndex], ...value };
        course = inMemoryCourses[existingIndex];
      } else {
        course = { _id: Date.now().toString(), ...value, createdAt: new Date() };
        inMemoryCourses.push(course);
      }
    }

    res.json(course);
  } catch (error) {
    console.error('Create/Update course error:', error);
    res.status(500).json({ error: 'Failed to save course' });
  }
});

// Fetch playlist metadata
router.post('/playlists/fetch', authenticateToken, async (req, res) => {
  try {
    const { playlistUrl } = req.body;
    
    if (!playlistUrl) {
      return res.status(400).json({ error: 'Playlist URL required' });
    }

    // Extract playlist ID from URL
    const playlistIdMatch = playlistUrl.match(/[?&]list=([^&]+)/);
    if (!playlistIdMatch) {
      return res.status(400).json({ error: 'Invalid playlist URL' });
    }

    const playlistId = playlistIdMatch[1];

    if (!process.env.YT_API_KEY) {
      return res.status(400).json({ error: 'YouTube API key not configured' });
    }

    // Fetch playlist metadata from YouTube API
    const playlistResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${process.env.YT_API_KEY}`
    );
    
    const playlistData = await playlistResponse.json();
    
    if (!playlistData.items || playlistData.items.length === 0) {
      return res.status(404).json({ error: 'Playlist not found' });
    }

    // Fetch playlist videos
    const videosResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=${process.env.YT_API_KEY}`
    );
    
    const videosData = await videosResponse.json();

    const playlistMeta = {
      title: playlistData.items[0].snippet.title,
      description: playlistData.items[0].snippet.description,
      thumbnailUrl: playlistData.items[0].snippet.thumbnails.high?.url || playlistData.items[0].snippet.thumbnails.default.url,
      videoCount: videosData.items?.length || 0,
      videos: videosData.items?.slice(0, 3).map((item: any) => ({
        title: item.snippet.title,
        videoId: item.snippet.resourceId.videoId,
        thumbnailUrl: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default.url,
        publishedAt: new Date(item.snippet.publishedAt)
      })) || []
    };

    res.json({ playlistMeta });
  } catch (error) {
    console.error('Fetch playlist error:', error);
    res.status(500).json({ error: 'Failed to fetch playlist metadata' });
  }
});

export default router;
