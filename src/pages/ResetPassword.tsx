import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Lock, Eye, EyeOff, ArrowLeft, CheckCircle } from 'lucide-react';
import SEO from '../components/Common/SEO';

const ResetPassword: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [token, setToken] = useState('');

  useEffect(() => {
    const resetToken = searchParams.get('token');
    if (!resetToken) {
      setError('Invalid or missing reset token');
    } else {
      setToken(resetToken);
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    // Validate password strength
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
          password: formData.password
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
      } else {
        setError(data.error || 'Password reset failed');
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
          title="Password Reset Successful - Pragya Trust"
          description="Your password has been reset successfully. You can now sign in with your new password."
          url="https://pragyatrust.com/reset-password"
        />
        
        <div className="pt-8 pb-20">
          <section className="section-padding bg-gray-50 min-h-screen flex items-center">
            <div className="max-w-md mx-auto container-padding w-full">
              <div className="card p-8 text-center">
                <div className="w-16 h-16 bg-ochre-500 text-white rounded-xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} />
                </div>
                
                <h1 className="text-h2 font-heading font-bold text-navy-500 mb-4">
                  Password Reset Successful!
                </h1>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Your password has been updated successfully. You can now sign in with your new password.
                </p>
                
                <Link
                  to="/login"
                  className="w-full btn-primary block text-center"
                >
                  Sign In Now
                </Link>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }

  if (!token) {
    return (
      <>
        <SEO
          title="Invalid Reset Link - Pragya Trust"
          description="The password reset link is invalid or has expired."
          url="https://pragyatrust.com/reset-password"
        />
        
        <div className="pt-8 pb-20">
          <section className="section-padding bg-gray-50 min-h-screen flex items-center">
            <div className="max-w-md mx-auto container-padding w-full">
              <div className="card p-8 text-center">
                <h1 className="text-h2 font-heading font-bold text-navy-500 mb-4">
                  Invalid Reset Link
                </h1>
                
                <p className="text-gray-600 mb-6">
                  This password reset link is invalid or has expired. Please request a new one.
                </p>
                
                <div className="space-y-3">
                  <Link
                    to="/forgot-password"
                    className="w-full btn-primary block text-center"
                  >
                    Request New Reset Link
                  </Link>
                  
                  <Link
                    to="/login"
                    className="w-full btn-outline block text-center"
                  >
                    Back to Sign In
                  </Link>
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
        title="Reset Password - Pragya Trust"
        description="Create a new password for your Pragya Trust account."
        url="https://pragyatrust.com/reset-password"
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
                  Reset Your Password
                </h1>
                <p className="text-gray-600">
                  Enter your new password below
                </p>
              </div>

              {error && (
                <div className="bg-red-50 text-red-800 border border-red-200 p-4 rounded-xl mb-6">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
                    New Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ochre-500 focus:border-transparent outline-none transition-all duration-200"
                      placeholder="Enter new password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    Must be at least 6 characters long
                  </p>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700 mb-2">
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-ochre-500 focus:border-transparent outline-none transition-all duration-200"
                      placeholder="Confirm new password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
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
                    'Reset Password'
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ResetPassword;