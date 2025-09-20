import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, Heart, Shield, ExternalLink } from 'lucide-react';
import SEO from '../components/Common/SEO';

const Disclaimer: React.FC = () => {
  return (
    <>
      <SEO
        title="Disclaimer - Pragya Trust"
        description="Important disclaimers regarding the educational and spiritual content provided by Pragya Trust."
        url="https://pragyatrust.com/disclaimer"
      />
      
      <div className="pt-8 pb-20">
        {/* Breadcrumb */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-ochre-500">Home</Link>
              <span>/</span>
              <span className="text-navy-500 font-medium">Disclaimer</span>
            </div>
          </div>
        </section>

        {/* Header */}
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
              <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 text-white rounded-xl mr-6">
                <AlertTriangle size={32} />
              </div>
              <div>
                <h1 className="text-h1 font-heading font-bold text-navy-500 mb-2">
                  Expanded Disclaimer
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-4xl mx-auto container-padding">
            <div className="space-y-8">
              {/* General Disclaimer */}
              <div className="card p-8">
                <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
                  General Disclaimer
                </h2>
                <p className="text-body text-gray-900 leading-relaxed">
                  The information provided on Pragya Trust (pragyatrust.com) is for educational, cultural, and informational purposes only.
                </p>
              </div>

              {/* Spiritual & Educational Content */}
              <div className="card p-8">
                <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
                  Spiritual & Educational Content
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-ochre-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-body text-gray-900">Teachings, practices, and interpretations shared here are based on traditional sources and the Trust's understanding.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-ochre-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-body text-gray-900">They are meant for reflection and learning, not as binding instructions.</span>
                  </li>
                </ul>
              </div>

              {/* Health & Wellness Disclaimer */}
              <div className="card p-8">
                <div className="flex items-center mb-6">
                  <Heart className="text-ochre-500 mr-3" size={24} />
                  <h2 className="text-h2 font-heading font-bold text-navy-500">
                    Health & Wellness Disclaimer
                  </h2>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-ochre-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-body text-gray-900">Practices like meditation, breathwork, or chanting may support well-being but are not a substitute for medical or psychological treatment.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-ochre-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-body text-gray-900">If you have any health conditions, please consult a qualified medical professional before undertaking new practices.</span>
                  </li>
                </ul>
              </div>

              {/* No Guarantee of Results */}
              <div className="card p-8">
                <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
                  No Guarantee of Results
                </h2>
                <p className="text-body text-gray-900 leading-relaxed">
                  Spiritual growth is personal and varies by individual. We do not promise or guarantee specific outcomes.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div className="card p-8">
                <div className="flex items-center mb-6">
                  <Shield className="text-ochre-500 mr-3" size={24} />
                  <h2 className="text-h2 font-heading font-bold text-navy-500">
                    Limitation of Liability
                  </h2>
                </div>
                <p className="text-body text-gray-900 leading-relaxed">
                  Pragya Trust is not liable for any direct, indirect, or incidental harm caused by reliance on the content or practices described.
                </p>
              </div>

              {/* Third-Party Links & References */}
              <div className="card p-8">
                <div className="flex items-center mb-6">
                  <ExternalLink className="text-ochre-500 mr-3" size={24} />
                  <h2 className="text-h2 font-heading font-bold text-navy-500">
                    Third-Party Links & References
                  </h2>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-ochre-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-body text-gray-900">Our site may reference or link to external websites, organizations, or scriptures. We do not endorse or control their content.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-ochre-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-body text-gray-900">Users are encouraged to verify and use discretion when accessing third-party resources.</span>
                  </li>
                </ul>
              </div>

              {/* Use at Own Risk */}
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-8 rounded-xl">
                <h3 className="text-h3 font-heading font-bold text-navy-500 mb-4">
                  Use at Own Risk
                </h3>
                <p className="text-body text-gray-900 leading-relaxed">
                  By engaging with our content, you acknowledge that you are doing so voluntarily and at your own discretion.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Disclaimer;