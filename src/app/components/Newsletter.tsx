import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-cyan-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Subscribe to our newsletter and never miss an event. Get weekly updates on upcoming conferences, exclusive offers, and industry insights.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 bg-slate-900 border border-cyan-500/20 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
              />
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-8 py-4 rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Send className="w-5 h-5" />
                Subscribe
              </button>
            </form>

            <p className="text-slate-500 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
