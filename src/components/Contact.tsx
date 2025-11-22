'use client';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xjkzajjg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        alert(t('contact.thankYou'));
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        alert('Failed to send message. Please try again or email me directly.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fadeIn text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('contact.lets')} <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">{t('contact.connect')}</span>
          </h2>
          <p className="text-xl text-gray-600 mb-16">
            {t('contact.subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <a href="mailto:wangruiyang1210@gmail.com" className="bg-purple-50 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="text-4xl mb-4">📧</div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('contact.email')}</h4>
              <p className="text-sm text-gray-600">wangruiyang1210@gmail.com</p>
            </a>
            <a href="https://github.com/Ruiyang1210W" target="_blank" rel="noopener noreferrer" className="bg-purple-50 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="text-4xl mb-4">💻</div>
              <h4 className="font-semibold text-gray-900 mb-2">GitHub</h4>
              <p className="text-sm text-gray-600">@Ruiyang1210W</p>
            </a>
            <a href="https://www.linkedin.com/in/ruiyang-wang-7a610823a/" target="_blank" rel="noopener noreferrer" className="bg-purple-50 rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="text-4xl mb-4">💼</div>
              <h4 className="font-semibold text-gray-900 mb-2">LinkedIn</h4>
              <p className="text-sm text-gray-600">ruiyang-wang</p>
            </a>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
            <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  name="name"
                  placeholder={t('contact.yourName')}
                  value={formData.name}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t('contact.yourEmail')}
                  value={formData.email}
                  onChange={handleChange}
                  className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500"
                  required
                />
              </div>
              <textarea
                name="message"
                rows={5}
                placeholder={t('contact.yourMessage')}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-purple-500 mb-6"
                required
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors disabled:bg-purple-400 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : t('contact.sendMessage')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
