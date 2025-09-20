import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flower2, Volume2, Heart, Eye, Sun, Pause } from 'lucide-react';
import SEO from '../components/Common/SEO';

const Meditation: React.FC = () => {
  const practices = [
    {
      id: 'kriya',
      title: 'Kriya',
      subtitle: 'Action with Awareness',
      icon: Flower2,
      description: 'Every breath, every movement, every gesture can become sacred when done consciously. Unlike mechanical activity, kriya transforms ordinary actions into spiritual practice.',
      color: 'bg-ochre-500'
    },
    {
      id: 'jap',
      title: 'Jap',
      subtitle: 'Sacred Repetition',
      icon: Volume2,
      description: 'The repetition of a sacred mantra. It is not about sound alone, but about entering the vibration of Truth through that sound.',
      color: 'bg-ochre-500'
    },
    {
      id: 'samvedana',
      title: 'Samvedana',
      subtitle: 'Sensitivity & Compassion',
      icon: Heart,
      description: 'The flowering of the heart that feels deeply and responds with love. It is the awakened sensitivity to all beings.',
      color: 'bg-ochre-500'
    },
    {
      id: 'sakshi',
      title: 'Sakshi',
      subtitle: 'Dhyan Vicharon ke Prati',
      icon: Eye,
      description: 'The art of witnessing thoughts without becoming entangled. You are not the mind, you are the seer of the mind.',
      color: 'bg-ochre-500'
    },
    {
      id: 'ahangrah-upasana',
      title: 'Ahangrah Upasana',
      subtitle: 'Worship of the Self',
      icon: Sun,
      description: 'Worship of the Self as divine. Instead of seeking God outside, one begins to revere the "I" within as the very presence of Brahman.',
      color: 'bg-ochre-500'
    },
    {
      id: 'chup-sadhana',
      title: 'Chup Sadhana',
      subtitle: 'Non-Doing',
      icon: Pause,
      description: 'Silence and non-doing. Resting in the natural state, beyond effort and techniques. In silence, the Self shines without obstruction.',
      color: 'bg-ochre-500'
    }
  ];

  return (
    <>
      <SEO
        title="Meditation Practices - Pragya Trust"
        description="Explore transformative meditation practices including Kriya, Jap, Samvedana, Sakshi, Ahangrah Upasana, and Chup Sadhana for spiritual development."
        url="https://pragyatrust.com/meditation"
      />
      
      <div className="pt-8 pb-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto container-padding text-center">
            <h1 className="text-h1 font-heading font-bold text-navy-500 mb-6">
              Transformative <span className="text-ochre-500">Practices</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Meditation, japa, and disciplined living that guide inner transformation 
              and spiritual development through time-tested practices.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto container-padding">
            <div className="prose max-w-none text-center">
              <p className="text-body text-gray-900 leading-relaxed mb-6">
                These six practices form the foundation of transformative spiritual development. 
                Each practice offers a unique pathway to inner awakening, from conscious action 
                to silent stillness. Together, they create a comprehensive approach to 
                self-realization and spiritual growth.
              </p>
            </div>
          </div>
        </section>

        {/* Practices Grid */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {practices.map((practice) => {
                const IconComponent = practice.icon;
                return (
                  <div key={practice.id} className="card p-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${practice.color} text-white rounded-xl mb-6`}>
                      <IconComponent size={32} />
                    </div>
                    
                    <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-2">
                      {practice.title}
                    </h3>
                    <p className="text-ochre-500 font-medium mb-4 text-sm">
                      {practice.subtitle}
                    </p>
                    
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                      {practice.description}
                    </p>
                    
                    <Link
                      to={`/meditation/${practice.id}`}
                      className="inline-flex items-center text-ochre-500 hover:text-ochre-600 font-medium transition-colors duration-200"
                    >
                      View More
                      <ArrowRight className="ml-1" size={16} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="section-padding bg-white">
          <div className="max-w-4xl mx-auto container-padding text-center">
            <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
              Begin Your Practice
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Each practice is a doorway to deeper understanding. Start with what resonates 
              with you and allow your journey to unfold naturally.
            </p>
            <Link
              to="/contact"
              className="btn-primary inline-flex items-center"
            >
              Get Guidance
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Meditation;