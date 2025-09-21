// src/pages/Login.tsx
import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', otp: '' });
  const [step, setStep] = useState<'signup' | 'otp' | 'signin'>('signin');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [user, setUser] = useState<{ name: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSignup = async () => {
    setIsLoading(true);
    setError('');
    try {
      const res = await fetch('/api/auth/signup-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formData.name, email: formData.email, password: formData.password }),
      });
      const data = await res.json();
      if (res.ok) setStep('otp');
      else setError(data.msg || 'Signup failed');
    } catch {
      setError('Network error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    setIsLoading(true);
    setError('');
    try {
      const res = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, otp: formData.otp, name: formData.name, password: formData.password }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        setUser(data.user);
        setStep('signin');
      } else setError(data.msg || 'OTP verification failed');
    } catch {
      setError('Network error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignin = async () => {
    setIsLoading(true);
    setError('');
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
      });
      const data = await res.json();
      if (res.ok) {
        if (data.requiresOTP) setStep('otp');
        else {
          localStorage.setItem('token', data.token);
          localStorage.setItem('user', JSON.stringify(data.user));
          setUser(data.user);
        }
      } else setError(data.msg || 'Login failed');
    } catch {
      setError('Network error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'signup') handleSignup();
    else if (step === 'otp') handleVerifyOTP();
    else handleSignin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
        <Link to="/" className="inline-flex items-center text-ochre-500 hover:text-ochre-600 font-medium mb-4">
          <ArrowLeft size={20} className="mr-2" /> Back to Home
        </Link>

        <h1 className="text-3xl font-bold text-center">{step === 'signup' ? 'Sign Up' : step === 'otp' ? 'Enter OTP' : 'Sign In'}</h1>

        {error && <div className="p-3 bg-red-100 text-red-700 rounded">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 'signup' && (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ochre-500 outline-none"
              required
            />
          )}

          {(step === 'signup' || step === 'signin') && (
            <>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-ochre-500 outline-none"
                  required
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full pl-10 pr-10 py-3 border rounded-lg focus:ring-2 focus:ring-ochre-500 outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </>
          )}

          {step === 'otp' && (
            <input
              type="text"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              placeholder="Enter OTP"
              maxLength={6}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ochre-500 outline-none text-center text-xl tracking-widest"
              required
            />
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-ochre-500 text-white rounded-lg font-medium hover:bg-ochre-600 disabled:opacity-50"
          >
            {isLoading ? 'Loading...' : step === 'signup' ? 'Send OTP' : step === 'otp' ? 'Verify OTP' : 'Sign In'}
          </button>
        </form>

        {step !== 'signup' && step !== 'otp' && (
          <p className="text-center text-gray-600">
            Don't have an account?{' '}
            <button onClick={() => setStep('signup')} className="text-ochre-500 font-medium">
              Sign Up
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
