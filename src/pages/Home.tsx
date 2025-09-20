import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Heart, Users } from 'lucide-react';
import SEO from '../components/Common/SEO';

const Home: React.FC = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  // All available courses
  const allCourses = [
    {
      title: 'Dṛg-Dṛśya-Viveka',
      description: 'The Discrimination between the Seer and the Seen - A profound text of Advaita Vedānta for direct Self-inquiry.',
      type: 'upcoming',
      slug: 'drg-drsya-viveka'
    },
    {
      title: 'Darśana Sarvasvam',
      description: 'A Study of Four Types of Non-Duality - Systematic investigation of fundamental reality through four non-dual perspectives.',
      type: 'upcoming',
      slug: 'darsana-sarvasvam'
    },
    {
      title: 'Siddhānta Leśha Saṅgraha',
      description: 'Collection of Doctrinal Glosses - A concise compilation of key doctrinal points within classical Advaita Vedānta.',
      type: 'upcoming',
      slug: 'siddhanta-lesha-sangraha'
    },
    {
      title: 'Viveka Chudamani',
      description: 'The Crest Jewel of Discrimination - A seminal Advaita Vedānta text on the path to Self-realization.',
      type: 'previous',
      slug: 'viveka-chudamani'
    },
    {
      title: 'Sādhana Pañcakam',
      description: 'Five Verses on Spiritual Practice - A concise manual of spiritual practice with transformative instructions.',
      type: 'previous',
      slug: 'sadhana-panchakam'
    },
    {
      title: 'Tattvabodha',
      description: 'Knowledge of Reality - A foundational Vedānta text introducing essential principles of Advaita Vedānta.',
      type: 'previous',
      slug: 'tattvabodha'
    },
    {
      title: 'Sanskrit Class',
      description: 'शतश्लोकेन पण्डितः - Mastering Sanskrit through 100 verses with practical parsing methods.',
      type: 'previous',
      slug: 'sanskrit-class'
    }
  ];

  // Function to get 3 random courses
  const getRandomCourses = () => {
    const shuffled = [...allCourses].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  // Get random courses on component mount
  const [featuredCourses] = useState(() => getRandomCourses());

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      });

      if (response.ok) {
        alert('Thank you for your message! We will get back to you soon.');
        setContactForm({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('There was an error sending your message. Please try again or contact us directly.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <SEO />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1051449/pexels-photo-1051449.jpeg?auto=compress&cs=tinysrgb&w=1600&h=700&fit=crop"
            alt="Spiritual consciousness and meditation"
            className="w-full h-full object-cover opacity-10"
            loading="eager"
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto container-padding text-center">
          <h1 className="text-4xl md:text-6xl lg:text-h1 font-heading font-bold text-navy-500 mb-6 leading-tight">
            Consciousness is Expressing itself
            <span className="block text-ochre-500 font-bold">
              as the Universe
            </span>
            <span className="block text-navy-500 text-3xl md:text-4xl lg:text-5xl font-bold mt-4">
              To Experience Itself
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto font-light">
            Let noble thoughts come to us from all sides.
          </p>
          
          <Link
            to="/courses"
            className="btn-primary inline-flex items-center text-lg"
          >
            Explore Courses
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="prose prose-lg max-w-none">
            <p className="text-body text-gray-900 leading-relaxed mb-6">
              Every element—matter, energy, and event—finds its origin in this consciousness. 
              Awareness acts as a sustaining force for the universe. To undergo transformation, 
              find support, and nurture oneself, there's no better way than connecting with 
              Universal consciousness.
            </p>
            
            <p className="text-body text-gray-900 leading-relaxed mb-6">
              Come along with us on a journey to discover a special place where everything 
              is linked by consciousness. This means that every part of our existence is 
              connected to a universal awareness. We also happily welcome and embrace good 
              thoughts from all around. At Pragya Trust, we bring together these important 
              ideas to create a friendly space for exploration and connection. It's a place 
              where the vastness of consciousness mixes with the meeting of good ideas, 
              making a feeling of shared wisdom and collective growth.
            </p>
            
            <p className="text-body text-gray-900 leading-relaxed">
              Join us in exploring Upanishadic Wisdom, Traditional Learning, Sanskrit, and 
              Meditation Learning, along with Tantra, Yoga, and other transformational practices. 
              Whether you're starting out or already well into your exploration, Pragya Trust 
              welcomes you to become a part of this shared journey.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-ochre-500 text-white rounded-xl mb-6 group-hover:bg-ochre-600 transition-colors duration-300">
                <BookOpen size={32} />
              </div>
              <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-4">Varied Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Texts, study, and meaningful discussion that deepen understanding 
                and foster intellectual growth.
              </p>
              <div className="mt-4">
                <Link
                  to="/courses"
                  className="text-ochre-500 hover:text-ochre-600 font-medium text-sm"
                >
                  Explore Courses →
                </Link>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-ochre-500 text-white rounded-xl mb-6 group-hover:bg-ochre-600 transition-colors duration-300">
                <Heart size={32} />
              </div>
              <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-4">Transformative Practice</h3>
              <p className="text-gray-600 leading-relaxed">
                Meditation, japa, and disciplined living that guide inner transformation 
                and spiritual development.
              </p>
              <div className="mt-4">
                <Link
                  to="/meditation"
                  className="text-ochre-500 hover:text-ochre-600 font-medium text-sm"
                >
                  Explore Practices →
                </Link>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-ochre-500 text-white rounded-xl mb-6 group-hover:bg-ochre-600 transition-colors duration-300">
                <Users size={32} />
              </div>
              <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-4">Community</h3>
              <p className="text-gray-600 leading-relaxed">
                Shared exploration, satsang, and support in a compassionate environment 
                where wisdom is cultivated together.
              </p>
              <div className="mt-4">
                <Link
                  to="/contact"
                  className="text-ochre-500 hover:text-ochre-600 font-medium text-sm"
                >
                  Join Community →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Teaser */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-heading font-bold text-navy-500 mb-4">Featured Courses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our transformative courses in Vedanta, consciousness studies, and spiritual practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <div key={course.slug} className="card p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    course.type === 'upcoming' 
                      ? 'bg-ochre-100 text-ochre-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {course.type === 'upcoming' ? 'Upcoming' : 'Previous'}
                  </span>
                </div>
                
                <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-3">{course.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{course.description}</p>
                
                <Link
                  to={`/courses/${course.slug}`}
                  className="inline-flex items-center text-ochre-500 hover:text-ochre-600 font-medium transition-colors duration-200"
                >
                  Learn More
                  <ArrowRight className="ml-1" size={16} />
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/courses"
              className="btn-primary inline-flex items-center"
            >
              View All Courses
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Teaser */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-heading font-bold text-navy-500 mb-4">Stay Connected</h2>
            <p className="text-xl text-gray-600">
              Join our community and be the first to know about upcoming courses and events.
            </p>
          </div>
          
          <form onSubmit={handleContactSubmit} className="max-w-lg mx-auto">
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={contactForm.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ochre-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={contactForm.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ochre-500 focus:border-transparent outline-none transition-all duration-200"
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={4}
                  value={contactForm.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ochre-500 focus:border-transparent outline-none transition-all duration-200 resize-vertical"
                />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary inline-flex items-center"
                >
                  Be in Touch
                  <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
          
          <div className="text-center mt-8">
            <Link
              to="/contact"
              className="text-ochre-500 hover:text-ochre-600 font-medium"
            >
              or visit our full contact page →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;