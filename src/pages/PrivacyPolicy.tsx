import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, Mail } from 'lucide-react';
import SEO from '../components/Common/SEO';

const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Policy - Pragya Trust"
        description="Learn how Pragya Trust collects, uses, and protects your personal information when you use our website."
        url="https://pragyatrust.com/privacy-policy"
      />
      
      <div className="pt-8 pb-20">
        {/* Breadcrumb */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-ochre-500">Home</Link>
              <span>/</span>
              <span className="text-navy-500 font-medium">Privacy Policy</span>
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
              <div className="inline-flex items-center justify-center w-16 h-16 bg-ochre-500 text-white rounded-xl mr-6">
                <Shield size={32} />
              </div>
              <div>
                <h1 className="text-h1 font-heading font-bold text-navy-500 mb-2">
                  Privacy Policy
                </h1>
                <p className="text-gray-600">
                  Effective Date: 20/8/2025
                </p>
              </div>
            </div>
            
            <p className="text-body text-gray-900 leading-relaxed">
              Pragya Trust ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our website pragyatrust.com.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-4xl mx-auto container-padding">
            <div className="space-y-8">
              {/* Information We Collect */}
              <div className="card p-8">
                <div className="flex items-center mb-6">
                  <Eye className="text-ochre-500 mr-3" size={24} />
                  <h2 className="text-h2 font-heading font-bold text-navy-500">
                    1. Information We Collect
                  </h2>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-ochre-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-body text-gray-900">Personal information you provide (such as name, email, or contact details).</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-ochre-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-body text-gray-900">Non-personal data like browser type, IP address, and pages visited.</span>
                  </li>
                </ul>
              </div>

              {/* How We Use Information */}
              <div className="card p-8">
                <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
                  2. How We Use Information
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-ochre-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-body text-gray-900">To provide and improve our services.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-ochre-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-body text-gray-900">To communicate updates, newsletters, or event details.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-ochre-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-body text-gray-900">To ensure the security and proper functioning of the website.</span>
                  </li>
                </ul>
              </div>

              {/* Cookies */}
              <div className="card p-8">
                <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
                  3. Cookies
                </h2>
                <p className="text-body text-gray-900 leading-relaxed">
                  We may use cookies to improve your browsing experience. You can disable cookies in your browser settings.
                </p>
              </div>

              {/* Third-Party Services */}
              <div className="card p-8">
                <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
                  4. Third-Party Services
                </h2>
                <p className="text-body text-gray-900 leading-relaxed">
                  We may link to or integrate third-party services (e.g., YouTube, payment gateways). Their privacy practices are separate from ours.
                </p>
              </div>

              {/* Data Security */}
              <div className="card p-8">
                <div className="flex items-center mb-6">
                  <Lock className="text-ochre-500 mr-3" size={24} />
                  <h2 className="text-h2 font-heading font-bold text-navy-500">
                    5. Data Security
                  </h2>
                </div>
                <p className="text-body text-gray-900 leading-relaxed">
                  We take reasonable measures to protect your data, but no method is 100% secure.
                </p>
              </div>

              {/* Your Rights */}
              <div className="card p-8">
                <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
                  6. Your Rights
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-ochre-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-body text-gray-900">You can request access, correction, or deletion of your personal data.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-ochre-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-body text-gray-900">You can unsubscribe from emails anytime.</span>
                  </li>
                </ul>
              </div>

              {/* Contact Us */}
              <div className="card p-8">
                <div className="flex items-center mb-6">
                  <Mail className="text-ochre-500 mr-3" size={24} />
                  <h2 className="text-h2 font-heading font-bold text-navy-500">
                    7. Contact Us
                  </h2>
                </div>
                <p className="text-body text-gray-900 leading-relaxed">
                  For questions, email: <a href="mailto:pragyatrust108@gmail.com" className="text-ochre-500 hover:text-ochre-600 font-medium">pragyatrust108@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;