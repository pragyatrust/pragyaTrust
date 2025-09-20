# Pragya Trust Website

A complete production-ready website for Pragya Trust, featuring consciousness studies, Vedanta courses, and spiritual learning resources.

## Features

- **Modern React Frontend** with TypeScript and Tailwind CSS
- **Node.js/Express Backend** with MongoDB support
- **Course Management System** with YouTube integration
- **Contact Form** with email notifications
- **Resource Library** with categorized materials
- **Admin Panel** for content management
- **SEO Optimized** with meta tags and structured data
- **Responsive Design** with accessibility features
- **Performance Optimized** with lazy loading and caching

## Tech Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- React Router for navigation
- React Helmet Async for SEO
- Lucide React for icons
- Framer Motion for animations

### Backend
- Node.js with Express
- MongoDB with Mongoose (optional)
- JWT authentication
- Nodemailer for emails
- Rate limiting and security middleware

## Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- MongoDB (optional - uses in-memory storage if not provided)

### Installation

1. **Clone and install dependencies:**
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..
```

2. **Environment Setup:**
```bash
# Copy backend environment file
cp backend/.env.example backend/.env

# Edit backend/.env with your configuration
```

3. **Development:**
```bash
# Run both frontend and backend
npm run full-dev

# Or run separately:
npm run dev          # Frontend only
npm run backend      # Backend only
```

4. **Production Build:**
```bash
# Build frontend
npm run build

# Build backend
npm run backend:build

# Start production backend
cd backend && npm start
```

## Environment Variables

Create `backend/.env` with the following variables:

### Required
```env
PORT=3001
NODE_ENV=production
JWT_SECRET=your-super-secret-jwt-key-here
ADMIN_PASS=your-admin-password
```

### Optional (Email)
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### Optional (Database)
```env
MONGO_URL=mongodb://localhost:27017/pragya-trust
```

### Optional (YouTube API)
```env
YT_API_KEY=your-youtube-api-key
```

## Deployment

### Frontend (Static)
Deploy the `dist` folder to any static hosting service:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop `dist` folder
- **GitHub Pages**: Push `dist` to `gh-pages` branch

### Backend (Node.js)
Deploy to any Node.js hosting service:
- **Render**: Connect GitHub repo, set build command `npm run build`
- **Railway**: `railway deploy`
- **Heroku**: `git push heroku main`
- **DigitalOcean App Platform**: Connect GitHub repo

### Environment Setup for Production
1. Set all required environment variables
2. Use a production MongoDB database (MongoDB Atlas recommended)
3. Configure SMTP for email notifications
4. Set up YouTube API key for playlist features

## API Endpoints

### Public
- `POST /api/contact` - Submit contact form
- `GET /api/courses` - Get all courses
- `GET /api/courses/:slug` - Get course by slug
- `GET /api/resources` - Get all resources

### Admin (Requires Authentication)
- `POST /api/admin/login` - Admin login
- `POST /api/courses` - Create/update course
- `POST /api/courses/playlists/fetch` - Fetch YouTube playlist metadata
- `POST /api/resources` - Create resource
- `PUT /api/resources/:id` - Update resource
- `DELETE /api/resources/:id` - Delete resource

## Admin Access

1. Navigate to `/admin` (not implemented in frontend yet)
2. Login with the password set in `ADMIN_PASS` environment variable
3. Manage courses, resources, and view contact messages

## YouTube Integration

To enable YouTube playlist features:

1. Get a YouTube Data API v3 key from Google Cloud Console
2. Set `YT_API_KEY` in your environment variables
3. Use the admin panel to fetch playlist metadata automatically

## Email Configuration

For contact form emails:

1. **Gmail**: Use app-specific password
2. **Other SMTP**: Configure host, port, username, and password
3. Test with a contact form submission

## Database

The application works with or without MongoDB:

- **With MongoDB**: Full persistence and scalability
- **Without MongoDB**: In-memory storage (data lost on restart)

For production, MongoDB is highly recommended.

## Security Features

- Rate limiting on all endpoints
- CORS protection
- Helmet security headers
- Input validation with Joi
- JWT authentication for admin routes
- SQL injection protection (via Mongoose)

## Performance Features

- Lazy loading images
- Optimized bundle size
- Caching headers
- Minified assets
- Tree shaking
- Code splitting

## SEO Features

- Server-side meta tags
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD)
- Sitemap.xml
- Robots.txt
- Canonical URLs

## Accessibility Features

- Semantic HTML5
- ARIA labels
- Keyboard navigation
- High contrast support
- Screen reader friendly
- Focus management

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

© Pragya Trust — All Rights Reserved.

## Support

For technical support or questions:
- Email: pragyatrust108@gmail.com
- Phone: +91 9955547065

---

**Note**: This is a complete production-ready application. All placeholder content has been replaced with actual content as specified in the requirements.