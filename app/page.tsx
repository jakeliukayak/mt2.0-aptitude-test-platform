'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { addParticipant } from '@/lib/supabaseTestManager';

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate all fields are filled
    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setError('Please fill in all fields');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Save participant info to Supabase
      const participantId = await addParticipant(
        formData.name,
        formData.phone,
        formData.email
      );

      if (!participantId) {
        setError('Failed to save participant information. Please try again.');
        setIsSubmitting(false);
        return;
      }

      // Store participant ID in localStorage
      localStorage.setItem('participantId', participantId);
      localStorage.setItem('participantName', formData.name);

      // Navigate to test page
      router.push('/test');
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('An unexpected error occurred. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 md:p-6">
      <div className="w-full max-w-2xl">
        <div className="card">
          {/* Header with Logo */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-8">
            <Image
              src="/logo.svg"
              alt="MT2.0 Logo"
              width={80}
              height={80}
              className="w-16 h-16 md:w-20 md:h-20"
              unoptimized
            />
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-medium mb-2">MT2.0 Aptitude Test</h1>
              <p className="text-base md:text-lg text-gray-600">
                A comprehensive aptitude test platform covering Numerical, Verbal, Inductive, and Deductive Reasoning.
              </p>
            </div>
          </div>

          {/* Information Form */}
          <div className="mb-6">
            <h2 className="text-xl font-medium mb-4 text-center">Before You Begin</h2>
            <p className="text-gray-600 text-center mb-6">
              Please provide your information to start the test. The test includes 8 questions and takes approximately 8 minutes to complete.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="form-label">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="form-label">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="form-label">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              {error && (
                <div className="text-red-500 text-sm text-center bg-red-50 p-3 rounded-lg">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full text-lg py-3 mt-4"
              >
                {isSubmitting ? 'Starting...' : 'Start Test'}
              </button>
            </form>
          </div>

          {/* Footer */}
          <div className="footer">
            <h3 className="text-lg font-medium mb-3">Stay in Touch</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
              <a
                href="https://www.instagram.com/mt2.0careercoach"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Follow us for more career tips 🤓
              </a>
            </div>
            <p className="text-xs text-gray-500 mt-4">© 2025 MT2.0. All rights reserved.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
