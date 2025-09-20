import express from 'express';
import Joi from 'joi';
import { Resource } from '../models/Resource.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// In-memory storage fallback
let inMemoryResources: any[] = [
  {
    _id: '1',
    title: 'Sacred Book by Aditya Ji',
    url: '/resources/sacred-book.pdf',
    type: 'pdf',
    category: 'books',
    order: 1,
    createdAt: new Date()
  },
  {
    _id: '2',
    title: 'Bhagavad Gītā',
    url: 'https://example.com/bhagavad-gita',
    type: 'article',
    category: 'vedantic-texts',
    order: 2,
    createdAt: new Date()
  }
];

const resourceSchema = Joi.object({
  title: Joi.string().trim().required(),
  url: Joi.string().uri().required(),
  type: Joi.string().valid('pdf', 'video', 'article', 'audio').required(),
  category: Joi.string().trim().optional(),
  summaryHtml: Joi.string().optional(),
  order: Joi.number().integer().min(0).optional()
});

// Get all resources
router.get('/', async (req, res) => {
  try {
    let resources;
    if (process.env.MONGO_URL) {
      resources = await Resource.find().sort({ order: 1, createdAt: -1 });
    } else {
      resources = inMemoryResources.sort((a, b) => (a.order || 0) - (b.order || 0));
    }
    res.json(resources);
  } catch (error) {
    console.error('Get resources error:', error);
    res.status(500).json({ error: 'Failed to fetch resources' });
  }
});

// Create resource (admin only)
router.post('/', authenticateToken, async (req, res) => {
  try {
    const { error, value } = resourceSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    let resource;
    if (process.env.MONGO_URL) {
      resource = new Resource(value);
      await resource.save();
    } else {
      resource = { _id: Date.now().toString(), ...value, createdAt: new Date() };
      inMemoryResources.push(resource);
    }

    res.json(resource);
  } catch (error) {
    console.error('Create resource error:', error);
    res.status(500).json({ error: 'Failed to create resource' });
  }
});

// Update resource (admin only)
router.put('/:id', authenticateToken, async (req, res) => {
  try {
    const { error, value } = resourceSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { id } = req.params;
    let resource;

    if (process.env.MONGO_URL) {
      resource = await Resource.findByIdAndUpdate(id, value, { new: true });
    } else {
      const index = inMemoryResources.findIndex(r => r._id === id);
      if (index >= 0) {
        inMemoryResources[index] = { ...inMemoryResources[index], ...value };
        resource = inMemoryResources[index];
      }
    }

    if (!resource) {
      return res.status(404).json({ error: 'Resource not found' });
    }

    res.json(resource);
  } catch (error) {
    console.error('Update resource error:', error);
    res.status(500).json({ error: 'Failed to update resource' });
  }
});

// Delete resource (admin only)
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;

    if (process.env.MONGO_URL) {
      await Resource.findByIdAndDelete(id);
    } else {
      const index = inMemoryResources.findIndex(r => r._id === id);
      if (index >= 0) {
        inMemoryResources.splice(index, 1);
      }
    }

    res.json({ message: 'Resource deleted successfully' });
  } catch (error) {
    console.error('Delete resource error:', error);
    res.status(500).json({ error: 'Failed to delete resource' });
  }
});

export default router;
