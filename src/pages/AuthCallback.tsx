import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SEO from '../components/Common/SEO';

const AuthCallback: React.FC = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('token');
    const error = searchParams.get('error');

    if (token) {
      // Store the token and redirect to dashboard
      localStorage.setItem('token', token);
      
      // Fetch user data
      fetch('/api/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data.user) {
          localStorage.setItem('user', JSON.stringify(data.user));
          window.location.href = '/dashboard';
        } else {
          window.location.href = '/login?error=auth_failed';
        }
      })
      .catch(() => {
        window.location.href = '/login?error=auth_failed';
      });
    } else if (error) {
      window.location.href = `/login?error=${error}`;
    } else {
      window.location.href = '/login';
    }
  }, [searchParams]);

  return (
    <>
      <SEO
        title="Authenticating - Pragya Trust"
        description="Completing your authentication..."
        url="https://pragyatrust.com/auth/callback"
      />
      
      <div className="pt-8 pb-20">
        <section className="section-padding bg-gray-50 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ochre-500 mx-auto mb-4"></div>
            <h1 className="text-h2 font-heading font-bold text-navy-500 mb-2">
              Completing Authentication
            </h1>
            <p className="text-gray-600">
              Please wait while we sign you in...
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AuthCallback;