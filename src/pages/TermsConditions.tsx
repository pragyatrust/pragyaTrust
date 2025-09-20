import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Copyright, ExternalLink, Scale } from 'lucide-react';
import SEO from '../components/Common/SEO';

const TermsConditions: React.FC = () => {
  return (
    <>
      <SEO
        title="Terms & Conditions - Pragya Trust"
        description="Terms and conditions governing the use of Pragya Trust website and services."
        url="https://pragyatrust.com/terms-conditions"
      />
      
      <div className="pt-8 pb-20">
        {/* Breadcrumb */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto container-padding">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-ochre-500">Home</Link>
              <span>/</span>
              <span className="text-navy-500 font-medium">Terms & Conditions</span>
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
              <div className="inline-flex items-center justify-center w-16 h-16 bg-navy-500 text-white rounded-xl mr-6">
                <FileText size={32} />
              </div>
              <div>
                <h1 className="text-h1 font-heading font-bold text-navy-500 mb-2">
                  Terms & Conditions
                </h1>
                <p className="text-gray-600">
                  Effective Date: 20/8/2025
                </p>
              </div>
            </div>
            
            <p className="text-body text-gray-900 leading-relaxed">
              These Terms & Conditions ("Terms") govern your use of pragyatrust.com. By using this website, you agree to abide by these Terms.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-4xl mx-auto container-padding">
            <div className="space-y-8">
              {/* Use of Website */}
              <div className="card p-8">
                <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
                  1. Use of Website
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-ochre-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-body text-gray-900">Content is provided for personal, non-commercial use only.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-ochre-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-body text-gray-900">You agree not to misuse the site or interfere with its proper functioning.</span>
                  </li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div className="card p-8">
                <div className="flex items-center mb-6">
                  <Copyright className="text-ochre-500 mr-3" size={24} />
                  <h2 className="text-h2 font-heading font-bold text-navy-500">
                    2. Intellectual Property
                  </h2>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-ochre-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-body text-gray-900">All content, text, images, and media are the property of Pragya Trust, unless otherwise stated.</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-ochre-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-body text-gray-900">You may not reproduce, distribute, or republish content without prior written consent.</span>
                  </li>
                </ul>
              </div>

              {/* Accuracy of Information */}
              <div className="card p-8">
                <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
                  3. Accuracy of Information
                </h2>
                <p className="text-body text-gray-900 leading-relaxed">
                  While we strive for accuracy, we cannot guarantee that all information on the site is free from error or omission.
                </p>
              </div>

              {/* Liability */}
              <div className="card p-8">
                <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
                  4. Liability
                </h2>
                <p className="text-body text-gray-900 leading-relaxed">
                  Pragya Trust shall not be responsible for any damages arising from your use of the website or reliance on its content.
                </p>
              </div>

              {/* External Links */}
              <div className="card p-8">
                <div className="flex items-center mb-6">
                  <ExternalLink className="text-ochre-500 mr-3" size={24} />
                  <h2 className="text-h2 font-heading font-bold text-navy-500">
                    5. External Links
                  </h2>
                </div>
                <p className="text-body text-gray-900 leading-relaxed">
                  Our website may include links to third-party sites. We are not responsible for their content, security, or practices.
                </p>
              </div>

              {/* Changes to Terms */}
              <div className="card p-8">
                <h2 className="text-h2 font-heading font-bold text-navy-500 mb-6">
                  6. Changes to Terms
                </h2>
                <p className="text-body text-gray-900 leading-relaxed">
                  We reserve the right to update these Terms at any time. Continued use of the site constitutes acceptance of updated Terms.
                </p>
              </div>

              {/* Governing Law */}
              <div className="card p-8">
                <div className="flex items-center mb-6">
                  <Scale className="text-ochre-500 mr-3" size={24} />
                  <h2 className="text-h2 font-heading font-bold text-navy-500">
                    7. Governing Law
                  </h2>
                </div>
                <p className="text-body text-gray-900 leading-relaxed">
                  These Terms shall be governed by the laws of India.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsConditions;