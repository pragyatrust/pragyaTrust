import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/Common/SEO';

const About: React.FC = () => {
  const approaches = [
    {
      title: 'Sahajawastha',
      description: 'Cultivating a state of natural awareness.',
      link: '/courses/other/sahajawastha'
    },
    {
      title: 'Dhyan dharana',
      description: 'Meditation and concentration practices.',
      link: '/courses/other/dhyan-dharana'
    },
    {
      title: 'Yog Pranayam',
      description: 'Breath control techniques.',
      link: '/courses/other/yog-pranayam'
    },
    {
      title: 'Jap',
      description: 'Recitation of mantras or sacred sounds repetitively.',
      link: '/courses/other/jap-practice'
    },
    {
      title: 'Swadhyay n Path',
      description: 'Study and reflection on spiritual texts.',
      link: '/courses/other/swadhyay'
    },
    {
      title: 'Yatra',
      description: 'Pilgrimage or spiritual journey.',
      link: '/courses/other/teerth-yatra'
    }
  ];

  const pillars = [
    {
      title: 'Study',
      subtitle: 'śravaṇa-manana-nididhyāsana',
      description: 'Systematic listening, reflection, and meditative contemplation of traditional teachings.'
    },
    {
      title: 'Practice',
      subtitle: 'Daily Disciplines',
      description: 'Consistent application of the six steps in daily life for inner transformation.'
    },
    {
      title: 'Community',
      subtitle: 'Satsang & Support',
      description: 'Q&A sessions, group discussions, and supportive peer learning environment.'
    }
  ];

  return (
    <>
      <SEO
        title="About Us - Pragya Trust"
        description="Learn about Pragya Trust's mission, founder Aditya Ji, and our systematic approach to consciousness studies within Sanatan Hindu Dharma."
        url="https://pragyatrust.com/about"
      />
      
      <div className="pt-8 pb-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto container-padding text-center">
            <h1 className="text-h1 font-heading font-bold text-navy-500 mb-6">
              About <span className="text-ochre-500">Pragya Trust</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Exploring consciousness and its practical application within the framework of Sanatan Hindu Dharma
            </p>
          </div>
        </section>

        {/* Founder Section */}
        <section className="section-padding bg-white">
          <div className="max-w-6xl mx-auto container-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="order-2 lg:order-1">
                <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">Our Founder & Guide</h2>
                <div className="prose max-w-none">
                  <p className="text-body text-gray-900 leading-relaxed mb-6">
                    Aditya Ji was Introduced to Vedanta at a very young age, he has been studying and 
                    Practicing Vedanta for the last 20 years. Besides studying it traditionally at 
                    Varanasi for years, He has learned and practiced the deeper tenets of Vedanta 
                    being with scholarly, renunciates and serious practitioners from Various parts of India.
                  </p>
                  
                  <p className="text-body text-gray-900 leading-relaxed mb-6">
                    He has done several Retreats in Solitude in the Himalayas in a deeper practice 
                    of Meditation and Japa
                  </p>
                  
                  <p className="text-body text-gray-900 leading-relaxed">
                    He currently lives in Varanasi where he gives teachings.
                  </p>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <img
                    src="https://images.groovetech.io/BusCTFIixWvguLq2v_uzU77Zok2wXHK57rURS-WVkAU/rs:fit:0:0:0/g:no:0:0/c:0:0/aHR0cHM6Ly9hc3NldHMuZ3Jvb3ZlYXBwcy5jb20vaW1hZ2VzLzVmMjkyZTJmM2RlOTcwMDAzNzFhMjI0Yy8xNzA5MzE0NzMwX0lNRzIwMTgwMTAxV0EwMDYwLmpwZw.webp"
                    alt="Aditya Ji - Founder of Pragya Trust"
                    className="w-full max-w-sm mx-auto rounded-xl shadow-soft-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="text-center mb-16">
              <h2 className="text-h2 font-heading font-bold text-navy-500 mb-4">
                Our Approach — Six Steps
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach to spiritual exploration, encapsulated in six fundamental practices.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {approaches.map((approach, index) => (
                <div key={index} className="card p-8 text-center">
                  <div className="w-12 h-12 bg-ochre-500 text-white rounded-xl flex items-center justify-center mx-auto mb-6 font-heading font-bold text-xl">
                    {index + 1}
                  </div>
                  <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-4">{approach.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{approach.description}</p>
                  <div className="mt-6">
                    <Link
                      to={approach.link}
                      className="inline-flex items-center text-ochre-500 hover:text-ochre-600 font-medium transition-colors duration-200"
                    >
                      Learn More
                      <ArrowRight className="ml-1" size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="text-center mb-16">
              <h2 className="text-h2 font-heading font-bold text-navy-500 mb-4">
                What We Do
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our work is built on three foundational pillars that support comprehensive spiritual development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {pillars.map((pillar, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-navy-500 text-white rounded-xl flex items-center justify-center mx-auto mb-6 font-heading font-bold text-2xl">
                    {index + 1}
                  </div>
                  <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-2">{pillar.title}</h3>
                  <p className="text-ochre-500 font-medium mb-4">{pillar.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;