import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import SEO from '../components/Common/SEO';

const ComingSoon: React.FC = () => {
  return (
    <>
      <SEO
        title="Coming Soon - Pragya Trust"
        description="This content is coming soon. Stay tuned for updates."
        url="https://pragyatrust.com/coming-soon"
      />
      
      <div className="pt-8 pb-20">
        <section className="section-padding bg-gray-50">
          <div className="max-w-4xl mx-auto container-padding">
            <div className="card p-12 text-center">
              <div className="w-24 h-24 bg-ochre-100 text-ochre-500 rounded-xl flex items-center justify-center mx-auto mb-8">
                <Clock size={48} />
              </div>
              
              <h1 className="text-h1 font-heading font-bold text-navy-500 mb-4">
                Coming Soon
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                We're working on bringing you this content. Please check back soon for updates.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/courses"
                  className="btn-outline inline-flex items-center"
                >
                  <ArrowLeft className="mr-2" size={20} />
                  Back to Courses
                </Link>
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center"
                >
                  Get Notified
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComingSoon;