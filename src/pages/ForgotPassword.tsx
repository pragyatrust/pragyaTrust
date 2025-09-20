import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import SEO from '../components/Common/SEO';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
      } else {
        setError(data.error || 'Failed to send reset email');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (success) {
    return (
      <>
        <SEO
          title="Reset Email Sent - Pragya Trust"
          description="Password reset instructions have been sent to your email address."
          url="https://pragyatrust.com/forgot-password"
        />
        
        <div className="pt-8 pb-20">
          <section className="section-padding bg-gray-50 min-h-screen flex items-center">
            <div className="max-w-md mx-auto container-padding w-full">
              <div className="card p-8 text-center">
                <div className="w-16 h-16 bg-ochre-500 text-white rounded-xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} />
                </div>
                
                <h1 className="text-h2 font-heading font-bold text-navy-500 mb-4">
                  Check Your Email
                </h1>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  If an account exists with <strong>{email}</strong>, you'll receive password reset instructions shortly.
                </p>
                
                <div className="space-y-3">
                  <Link
                    to="/login"
                    className="w-full btn-primary block text-center"
                  >
                    Back to Sign In
                  </Link>
                  
                  <button
                    onClick={() => setSuccess(false)}
                    className="w-full btn-outline block text-center"
                  >
                    Try Different Email
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Forgot Password - Pragya Trust"
        description="Reset your Pragya Trust account password. Enter your email to receive reset instructions."
        url="https://pragyatrust.com/forgot-password"
      />
      
      <div className="pt-8 pb-20">
        <section className="section-padding bg-gray-50 min-h-screen flex items-center">
          <div className="max-w-md mx-auto container-padding w-full">
            <div className="card p-8">
              <Link
                to="/login"
                className="inline-flex items-center text-ochre-500 hover:text-ochre-600 mb-6 font-medium"
              >
                <ArrowLeft className="mr-2" size={20} />
                Back to Sign In
              </Link>

              <div className="text-center mb-8">
                <h1 className="text-h2 font-heading font-bold text-navy-500 mb-2">
                  Forgot Password?
                </h1>
                <p className="text-gray-600">
                  Enter your email and we'll send you reset instructions
                </p>
              </div>

              {error && (
                <div className="bg-red-50 text-red-800 border border-red-200 p-4 rounded-xl mb-6">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ochre-500 focus:border-transparent outline-none transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-primary text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isLoading ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  ) : (
                    'Send Reset Instructions'
                  )}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-gray-600 text-sm">
                  Remember your password?{' '}
                  <Link
                    to="/login"
                    className="text-ochre-500 hover:text-ochre-600 font-medium"
                  >
                    Sign in here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ForgotPassword;