import { Mail, Phone, MapPin, Send, MessageSquare, Calendar } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-800 border border-cyan-500/20 rounded-lg p-8">
            <h2 className="text-2xl text-white mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-slate-400 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-cyan-500/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-slate-400 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-cyan-500/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm text-slate-400 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-cyan-500/20 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="event">Event Registration</option>
                  <option value="sponsorship">Sponsorship</option>
                  <option value="speaking">Speaking Opportunity</option>
                  <option value="partnership">Partnership</option>
                  <option value="support">Technical Support</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-slate-400 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-900 border border-cyan-500/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-slate-800 border border-cyan-500/20 rounded-lg p-8">
              <h2 className="text-2xl text-white mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-500/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Email</h3>
                    <p className="text-slate-400">info@cyberevents.com</p>
                    <p className="text-slate-400">support@cyberevents.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-cyan-500/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Phone</h3>
                    <p className="text-slate-400">+1 (555) 123-4567</p>
                    <p className="text-slate-400 text-sm">Mon-Fri 9AM-6PM PST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-cyan-500/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white mb-1">Office</h3>
                    <p className="text-slate-400">123 Security Boulevard</p>
                    <p className="text-slate-400">San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-slate-800 border border-cyan-500/20 rounded-lg p-8">
              <h2 className="text-2xl text-white mb-6">Quick Links</h2>
              <div className="space-y-4">
                <a
                  href="#"
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Calendar className="w-5 h-5 text-cyan-400" />
                  Schedule a Demo
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                  Join our Community
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-5 h-5 text-cyan-400" />
                  Subscribe to Newsletter
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-8">
              <h2 className="text-2xl text-white mb-6">Business Hours</h2>
              <div className="space-y-2 text-slate-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-cyan-400">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-cyan-400">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-slate-500">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
