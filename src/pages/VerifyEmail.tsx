import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle, XCircle, ArrowLeft } from 'lucide-react';
import SEO from '../components/Common/SEO';

const VerifyEmail: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const token = searchParams.get('token');
    
    if (!token) {
      setStatus('error');
      setMessage('Invalid verification link');
      return;
    }

    verifyEmail(token);
  }, [searchParams]);

  const verifyEmail = async (token: string) => {
    try {
      const response = await fetch('/api/auth/verify-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'Email verified successfully!');
      } else {
        setStatus('error');
        setMessage(data.error || 'Email verification failed');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  };

  return (
    <>
      <SEO
        title="Email Verification - Pragya Trust"
        description="Verify your email address to complete your Pragya Trust account setup."
        url="https://pragyatrust.com/verify-email"
      />
      
      <div className="pt-8 pb-20">
        <section className="section-padding bg-gray-50 min-h-screen flex items-center">
          <div className="max-w-md mx-auto container-padding w-full">
            <div className="card p-8 text-center">
              <Link
                to="/"
                className="inline-flex items-center text-ochre-500 hover:text-ochre-600 mb-6 font-medium"
              >
                <ArrowLeft className="mr-2" size={20} />
                Back to Home
              </Link>

              {status === 'loading' && (
                <>
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ochre-500 mx-auto mb-6"></div>
                  <h1 className="text-h2 font-heading font-bold text-navy-500 mb-4">
                    Verifying Your Email
                  </h1>
                  <p className="text-gray-600">
                    Please wait while we verify your email address...
                  </p>
                </>
              )}

              {status === 'success' && (
                <>
                  <div className="w-16 h-16 bg-green-500 text-white rounded-xl flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} />
                  </div>
                  <h1 className="text-h2 font-heading font-bold text-navy-500 mb-4">
                    Email Verified!
                  </h1>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {message}
                  </p>
                  <div className="space-y-3">
                    <Link
                      to="/login"
                      className="w-full btn-primary block text-center"
                    >
                      Sign In Now
                    </Link>
                    <Link
                      to="/"
                      className="w-full btn-outline block text-center"
                    >
                      Back to Home
                    </Link>
                  </div>
                </>
              )}

              {status === 'error' && (
                <>
                  <div className="w-16 h-16 bg-red-500 text-white rounded-xl flex items-center justify-center mx-auto mb-6">
                    <XCircle size={32} />
                  </div>
                  <h1 className="text-h2 font-heading font-bold text-navy-500 mb-4">
                    Verification Failed
                  </h1>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {message}
                  </p>
                  <div className="space-y-3">
                    <Link
                      to="/register"
                      className="w-full btn-primary block text-center"
                    >
                      Try Again
                    </Link>
                    <Link
                      to="/login"
                      className="w-full btn-outline block text-center"
                    >
                      Sign In
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default VerifyEmail;