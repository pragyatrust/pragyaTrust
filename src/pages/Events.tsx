import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';
import SEO from '../components/Common/SEO';

const Events: React.FC = () => {
  return (
    <>
      <SEO
        title="Events - Pragya Trust"
        description="Stay updated with upcoming events, workshops, and spiritual gatherings at Pragya Trust."
        url="https://pragyatrust.com/events"
      />
      
      <div className="pt-8 pb-20">
        {/* Breadcrumb */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-ochre-500">Home</Link>
              <span>/</span>
              <span className="text-navy-500 font-medium">Events</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto container-padding">
            <Link
              to="/"
              className="inline-flex items-center text-ochre-500 hover:text-ochre-600 mb-6 font-medium"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Home
            </Link>
            
            <div className="flex items-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-ochre-500 text-white rounded-xl mr-6">
                <Calendar size={32} />
              </div>
              <div>
                <h1 className="text-h1 font-heading font-bold text-navy-500 mb-2">
                  Events
                </h1>
                <p className="text-xl text-gray-600">
                  Workshops, Retreats & Spiritual Gatherings
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-4xl mx-auto container-padding">
            <div className="card p-12 text-center">
              <div className="w-24 h-24 bg-ochre-100 text-ochre-500 rounded-xl flex items-center justify-center mx-auto mb-8">
                <Calendar size={48} />
              </div>
              
              <h2 className="text-h2 font-heading font-bold text-navy-500 mb-4">
                Content Coming Soon
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                We're preparing an exciting lineup of events, workshops, and spiritual gatherings. 
                Stay tuned for updates on upcoming programs and retreats.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center text-gray-500">
                  <Clock className="mr-2" size={20} />
                  <span>Updates coming soon</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <MapPin className="mr-2" size={20} />
                  <span>Varanasi & Online</span>
                </div>
              </div>
              
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center"
                >
                  Get Notified
                  <ArrowLeft className="ml-2 rotate-180" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto container-padding text-center">
            <h3 className="text-h3 font-heading font-bold text-navy-500 mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-600 mb-6">
              Be the first to know about our upcoming events and programs.
            </p>
            <Link
              to="/contact"
              className="btn-outline inline-flex items-center"
            >
              Subscribe to Updates
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Events;