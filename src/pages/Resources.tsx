import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Headphones, Video, ExternalLink, Youtube, ArrowRight } from 'lucide-react';
import SEO from '../components/Common/SEO';

const Resources: React.FC = () => {
  const vedanticTexts = [
    {
      id: 'viveka-chudamani',
      title: 'Viveka Chudamani',
      subtitle: 'The Crest Jewel of Discrimination',
      overview: 'One of the most celebrated texts of Vedanta by Adi Shankaracharya, guiding seekers to discriminate between the eternal and ephemeral.'
    },
    {
      id: 'sanskrit-class',
      title: 'Sanskrit Class',
      subtitle: 'Language of the Scriptures',
      overview: 'Learn the sacred language of Indian scriptures to access unfiltered wisdom and deepen your connection with tradition.'
    },
    {
      id: 'tattva-bodh',
      title: 'Tattva Bodh',
      subtitle: 'Knowledge of the Truth',
      overview: 'A perfect entry point for beginners, systematically laying out the basic categories of Vedantic knowledge.'
    },
    {
      id: 'sadhana-panchakam',
      title: 'Sadhana Panchakam',
      subtitle: 'Forty Verses on Practice',
      overview: 'Practical daily-life guidance for spiritual growth with 40 concise instructions for living aligned with Vedanta.'
    },
    {
      id: 'drig-drishya-vivek',
      title: 'Drig-Drishya Vivek',
      subtitle: 'The Seer and the Seen',
      overview: 'A systematic inquiry into consciousness through the relationship between the observer and the observed.'
    },
    {
      id: 'darshan-sarvasvam',
      title: 'Darshan Sarvasvam',
      subtitle: 'The Essence of Philosophies',
      overview: 'Comprehensive summary of major Indian philosophical schools and the unique perspective of Vedanta.'
    },
    {
      id: 'siddhanta-lesha-sangraha',
      title: 'Siddhanta Lesha Sangraha',
      subtitle: 'Compendium of Doctrines',
      overview: 'Advanced exploration of Vedantic commentaries and subtle differences among Advaita Vedanta teachers.'
    }
  ];

  return (
    <>
      <SEO
        title="Resources - Pragya Trust"
        description="Access our comprehensive library of spiritual resources including sacred texts, Vedantic materials, and recorded lectures."
        url="https://pragyatrust.com/resources"
      />
      
      <div className="pt-8 pb-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto container-padding text-center">
            <h1 className="text-h1 font-heading font-bold text-navy-500 mb-6">
              <span className="text-ochre-500">Resources</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Access our comprehensive library of spiritual resources, study materials, 
              and recorded sessions to support your journey of consciousness exploration.
            </p>
          </div>
        </section>

        {/* Sacred Book Section - Smaller */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="card p-6 mb-12">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-ochre-500 text-white rounded-xl flex items-center justify-center flex-shrink-0">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h2 className="text-h3 font-heading font-bold text-navy-500 mb-2">
                    Sacred Book by Aditya Ji
                  </h2>
                  <p className="text-ochre-500 font-medium text-sm mb-3">
                    A compilation of three powerful Stotras from the Bhāgavata tradition
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    This sacred book contains Bhagavat-Nārāyaṇa Kavach, Gajendra Mokṣa Stotra, 
                    and Chāturśloki Bhagavat with comprehensive introductions and practice guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vedantic Texts & Links */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="text-center mb-12">
              <h2 className="text-h2 font-heading font-bold text-navy-500 mb-4">
                Vedantic Texts & Links
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore detailed studies of classical Vedantic texts and philosophical works.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vedanticTexts.map((text) => (
                <div key={text.id} className="card p-6">
                  <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-2">{text.title}</h3>
                  <p className="text-ochre-500 font-medium mb-4 text-sm">{text.subtitle}</p>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    {text.overview}
                  </p>
                  
                  <Link
                    to={`/resources/vedantic-texts/${text.id}`}
                    className="inline-flex items-center text-ochre-500 hover:text-ochre-600 font-medium transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRight className="ml-1" size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lectures & Talks */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="card p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-navy-500 text-white rounded-xl flex items-center justify-center">
                  <Video size={24} />
                </div>
                <h2 className="text-h2 font-heading font-bold text-navy-500">Lectures & Talks</h2>
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Audio and video archives of lectures and talks on various aspects of consciousness and spiritual development.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Video className="text-ochre-500 mr-3" size={24} />
                    <h3 className="text-h3 font-heading font-semibold text-ochre-500">Video Lectures</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Recorded video sessions on Vedanta, consciousness studies, and spiritual practice.</p>
                  <a
                    href="https://www.youtube.com/playlist?list=PLcCCF9CS73I1jATuEZhuYPM1yYVsCzTNi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-ochre-500 text-white px-4 py-2 rounded-xl hover:bg-ochre-600 transition-colors duration-200 font-medium inline-flex items-center"
                  >
                    <Youtube className="mr-2" size={16} />
                    Watch Lectures
                  </a>
                </div>
                
                <div className="p-6 bg-gray-50 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Headphones className="text-ochre-500 mr-3" size={24} />
                    <h3 className="text-h3 font-heading font-semibold text-ochre-500">Audio Archives</h3>
                  </div>
                  <p className="text-gray-600 mb-4">Audio recordings of talks, Q&A sessions, and guided meditations.</p>
                  <button className="btn-outline">Listen Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Podcasts & Blog */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Podcasts */}
              <div className="card p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-ochre-500 text-white rounded-xl flex items-center justify-center">
                    <Headphones size={24} />
                  </div>
                  <h2 className="text-h2 font-heading font-bold text-navy-500">Aaspasha Yoga</h2>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Listen to our Aaspasha Yoga podcast episodes covering various aspects of consciousness, 
                  spirituality, and practical wisdom for modern life.
                </p>
                
                <a
                  href="https://www.youtube.com/playlist?list=PLcCCF9CS73I0-Q2EDTRDlsVENeqNce8P"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-ochre-500 text-white py-3 px-6 rounded-xl hover:bg-ochre-600 transition-colors duration-200 font-medium flex items-center justify-center"
                >
                  <Youtube className="mr-2" size={20} />
                  Listen to Episodes
                </a>
              </div>

              {/* Blog */}
              <div className="card p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-ochre-500 text-white rounded-xl flex items-center justify-center">
                    <BookOpen size={24} />
                  </div>
                  <h2 className="text-h2 font-heading font-bold text-navy-500">Blog Articles</h2>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Read and contribute to our community blog with in-depth articles exploring traditional wisdom, 
                  contemporary applications, and practical guidance for spiritual development.
                </p>
                
                <Link
                  to="/blog"
                  className="w-full bg-ochre-500 text-white py-3 px-6 rounded-xl hover:bg-ochre-600 transition-colors duration-200 font-medium flex items-center justify-center"
                >
                  <BookOpen className="mr-2" size={20} />
                  Visit Blog
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Resources;