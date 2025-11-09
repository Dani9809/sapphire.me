
import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(formData.name && formData.email && formData.message) {
      setStatus('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('Please fill out all fields.');
    }
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-accent">Get In Touch</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">Let's build something great together.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <p className="mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision. Feel free to reach out.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                  <FaEnvelope className="w-6 h-6 text-accent mr-4"/>
                  <a href="mailto:rowenap.morales090382@gmail.com" className="text-light-text dark:text-dark-text hover:text-accent">
                      rowenap.morales090382@gmail.com
                  </a>
              </div>
              <div className="flex items-center">
                  <FaPhoneAlt className="w-6 h-6 text-accent mr-4"/>
                  <span className="text-light-text dark:text-dark-text">
                      +63 945 862 0398
                  </span>
              </div>
              <div className="flex items-center">
                  <FaMapMarkerAlt className="w-6 h-6 text-accent mr-4"/>
                  <span className="text-light-text dark:text-dark-text">
                      Bunao, Dumaguete City, Philippines
                  </span>
              </div>
            </div>
          </div>
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 focus:ring-accent focus:border-accent" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 focus:ring-accent focus:border-accent" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 focus:ring-accent focus:border-accent" required></textarea>
              </div>
              <button type="submit" className="w-full bg-accent text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-400 transition-colors duration-300">
                Send Message
              </button>
              {status && <p className="text-center mt-4">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
