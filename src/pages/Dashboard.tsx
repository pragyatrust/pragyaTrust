import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Phone, Calendar, Settings, LogOut, Shield } from 'lucide-react';
import SEO from '../components/Common/SEO';

interface UserData {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
  isEmailVerified: boolean;
  otpEnabled: boolean;
  lastLogin: string;
  createdAt: string;
}

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        window.location.href = '/login';
        return;
      }

      const response = await fetch('/api/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/login';
      }
    } catch (error) {
      setError('Failed to load user data');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token');
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/';
    }
  };

  const toggleOTP = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/auth/otp/toggle', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ enable: !user?.otpEnabled })
      });

      if (response.ok) {
        const data = await response.json();
        setUser(prev => prev ? { ...prev, otpEnabled: !prev.otpEnabled } : null);
        alert(data.message);
      }
    } catch (error) {
      alert('Failed to toggle OTP');
    }
  };

  if (loading) {
    return (
      <div className="pt-8 pb-20">
        <section className="section-padding bg-gray-50 min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-ochre-500"></div>
        </section>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="pt-8 pb-20">
        <section className="section-padding bg-gray-50 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-600 mb-4">{error || 'User not found'}</p>
            <Link to="/login" className="btn-primary">
              Sign In
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Dashboard - Pragya Trust"
        description="Manage your Pragya Trust account, view your courses, and access your spiritual learning journey."
        url="https://pragyatrust.com/dashboard"
      />
      
      <div className="pt-8 pb-20">
        <section className="section-padding bg-gray-50 min-h-screen">
          <div className="max-w-4xl mx-auto container-padding">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-h1 font-heading font-bold text-navy-500 mb-2">
                  Welcome back, {user.name}!
                </h1>
                <p className="text-gray-600">
                  Manage your account and continue your spiritual journey
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-600 hover:text-ochre-500 transition-colors duration-200"
              >
                <LogOut className="mr-2" size={20} />
                Sign Out
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Profile Card */}
              <div className="lg:col-span-1">
                <div className="card p-6">
                  <div className="text-center mb-6">
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-20 h-20 rounded-full mx-auto mb-4"
                      />
                    ) : (
                      <div className="w-20 h-20 bg-ochre-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <User size={32} />
                      </div>
                    )}
                    <h2 className="text-h3 font-heading font-semibold text-navy-500 mb-1">
                      {user.name}
                    </h2>
                    <p className="text-gray-600 text-sm">{user.email}</p>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                      user.isEmailVerified 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {user.isEmailVerified ? 'Verified' : 'Unverified'}
                    </span>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center text-gray-600">
                      <Mail className="mr-2" size={16} />
                      <span>{user.email}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="mr-2" size={16} />
                      <span>Joined {new Date(user.createdAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Shield className="mr-2" size={16} />
                      <span>Role: {user.role}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Account Settings */}
                <div className="card p-6">
                  <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-6 flex items-center">
                    <Settings className="mr-2" size={20} />
                    Account Settings
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <h4 className="font-semibold text-navy-500">Two-Factor Authentication</h4>
                        <p className="text-sm text-gray-600">
                          Add an extra layer of security with OTP verification
                        </p>
                      </div>
                      <button
                        onClick={toggleOTP}
                        className={`px-4 py-2 rounded-xl font-medium transition-colors duration-200 ${
                          user.otpEnabled
                            ? 'bg-ochre-500 text-white hover:bg-ochre-600'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {user.otpEnabled ? 'Enabled' : 'Enable'}
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <h4 className="font-semibold text-navy-500">Email Verification</h4>
                        <p className="text-sm text-gray-600">
                          {user.isEmailVerified ? 'Your email is verified' : 'Please verify your email'}
                        </p>
                      </div>
                      {!user.isEmailVerified && (
                        <button className="px-4 py-2 bg-ochre-500 text-white rounded-xl hover:bg-ochre-600 transition-colors duration-200">
                          Resend
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="card p-6">
                  <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-6">
                    Quick Actions
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      to="/courses"
                      className="p-4 bg-ochre-50 rounded-xl hover:bg-ochre-100 transition-colors duration-200 group"
                    >
                      <h4 className="font-semibold text-navy-500 group-hover:text-ochre-600">
                        Browse Courses
                      </h4>
                      <p className="text-sm text-gray-600">
                        Explore our spiritual learning courses
                      </p>
                    </Link>

                    <Link
                      to="/resources"
                      className="p-4 bg-ochre-50 rounded-xl hover:bg-ochre-100 transition-colors duration-200 group"
                    >
                      <h4 className="font-semibold text-navy-500 group-hover:text-ochre-600">
                        Resources
                      </h4>
                      <p className="text-sm text-gray-600">
                        Access sacred texts and materials
                      </p>
                    </Link>

                    <Link
                      to="/meditation"
                      className="p-4 bg-ochre-50 rounded-xl hover:bg-ochre-100 transition-colors duration-200 group"
                    >
                      <h4 className="font-semibold text-navy-500 group-hover:text-ochre-600">
                        Meditation
                      </h4>
                      <p className="text-sm text-gray-600">
                        Explore transformative practices
                      </p>
                    </Link>

                    <Link
                      to="/contact"
                      className="p-4 bg-ochre-50 rounded-xl hover:bg-ochre-100 transition-colors duration-200 group"
                    >
                      <h4 className="font-semibold text-navy-500 group-hover:text-ochre-600">
                        Get Support
                      </h4>
                      <p className="text-sm text-gray-600">
                        Contact us for guidance
                      </p>
                    </Link>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="card p-6">
                  <h3 className="text-h3 font-heading font-semibold text-navy-500 mb-6">
                    Account Activity
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="text-sm text-gray-600">Last login</span>
                      <span className="text-sm font-medium text-navy-500">
                        {user.lastLogin ? new Date(user.lastLogin).toLocaleString() : 'Never'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <span className="text-sm text-gray-600">Account created</span>
                      <span className="text-sm font-medium text-navy-500">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;