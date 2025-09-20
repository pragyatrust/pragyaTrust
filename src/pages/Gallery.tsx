import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Image, Camera, Users, Heart } from 'lucide-react';
import SEO from '../components/Common/SEO';

const Gallery: React.FC = () => {
  return (
    <>
      <SEO
        title="Gallery - Pragya Trust"
        description="Explore our photo gallery showcasing moments from courses, events, and spiritual gatherings at Pragya Trust."
        url="https://pragyatrust.com/gallery"
      />
      
      <div className="pt-8 pb-20">
        {/* Breadcrumb */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-ochre-500">Home</Link>
              <span>/</span>
              <span className="text-navy-500 font-medium">Gallery</span>
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
                <Image size={32} />
              </div>
              <div>
                <h1 className="text-h1 font-heading font-bold text-navy-500 mb-2">
                  Gallery
                </h1>
                <p className="text-xl text-gray-600">
                  Moments from Our Spiritual Journey
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
                <Camera size={48} />
              </div>
              
              <h2 className="text-h2 font-heading font-bold text-navy-500 mb-4">
                Content Coming Soon
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                We're curating a beautiful collection of photos from our courses, events, 
                and spiritual gatherings. Check back soon to see moments from our community.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center p-4">
                  <div className="w-12 h-12 bg-ochre-100 text-ochre-500 rounded-xl flex items-center justify-center mb-3">
                    <Users size={24} />
                  </div>
                  <h4 className="font-semibold text-navy-500 mb-2">Course Sessions</h4>
                  <p className="text-sm text-gray-600 text-center">
                    Photos from our Vedanta courses and study sessions
                  </p>
                </div>
                
                <div className="flex flex-col items-center p-4">
                  <div className="w-12 h-12 bg-ochre-100 text-ochre-500 rounded-xl flex items-center justify-center mb-3">
                    <Heart size={24} />
                  </div>
                  <h4 className="font-semibold text-navy-500 mb-2">Community Events</h4>
                  <p className="text-sm text-gray-600 text-center">
                    Moments from satsangs and spiritual gatherings
                  </p>
                </div>
                
                <div className="flex flex-col items-center p-4">
                  <div className="w-12 h-12 bg-ochre-100 text-ochre-500 rounded-xl flex items-center justify-center mb-3">
                    <Image size={24} />
                  </div>
                  <h4 className="font-semibold text-navy-500 mb-2">Sacred Spaces</h4>
                  <p className="text-sm text-gray-600 text-center">
                    Beautiful images of our learning environments
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center"
                >
                  Share Your Photos
                  <ArrowLeft className="ml-2 rotate-180" size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Categories Preview */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto container-padding">
            <h3 className="text-h3 font-heading font-bold text-navy-500 text-center mb-8">
              What to Expect
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Study Sessions', desc: 'Learning moments' },
                { title: 'Meditation', desc: 'Peaceful practices' },
                { title: 'Community', desc: 'Together in wisdom' },
                { title: 'Sacred Texts', desc: 'Ancient wisdom' }
              ].map((category, index) => (
                <div key={index} className="bg-gray-100 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-gray-200 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <Image size={24} className="text-gray-400" />
                  </div>
                  <h4 className="font-semibold text-navy-500 mb-2">{category.title}</h4>
                  <p className="text-sm text-gray-600">{category.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Gallery;