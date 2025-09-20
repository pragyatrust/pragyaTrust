const API_URL = import.meta.env.VITE_API_URL;

// Courses
export const fetchCourses = () =>
  fetch(`${API_URL}/api/courses`).then(res => res.json());

// Resources
export const getResources = () =>
  fetch(`${API_URL}/api/resources`).then(res => res.json());

// Auth
export const registerUser = (userData: any) =>
  fetch(`${API_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  }).then(res => res.json());

export const loginUser = (credentials: any) =>
  fetch(`${API_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  }).then(res => res.json());

export const verifyEmail = (token: any) =>
  fetch(`${API_URL}/api/auth/verify-email/${token}`).then(res => res.json());

export const forgotPassword = (email: any) =>
  fetch(`${API_URL}/api/auth/forgot-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  }).then(res => res.json());

export const resetPassword = (token: any, newPassword: any) =>
  fetch(`${API_URL}/api/auth/reset-password/${token}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password: newPassword }),
  }).then(res => res.json());

// Contact
export const sendMessage = (messageData: any) =>
  fetch(`${API_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(messageData),
  }).then(res => res.json());
