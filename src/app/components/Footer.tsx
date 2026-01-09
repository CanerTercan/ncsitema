import { Shield, Twitter, Linkedin, Github } from 'lucide-react';
import logo from '/assets/logo.png'

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-cyan-500/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logoImage} alt="CyberEvents" className="h-10" />
            </div>
            <p className="text-slate-400 text-sm">
              Your premier destination for cyber security events, conferences, and workshops worldwide.
            </p>
          </div>

          {/* Events */}
          <div>
            <h3 className="text-white mb-4">Events</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Upcoming Events
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Past Events
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Submit Event
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-cyan-500/20 mt-8 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; 2026 CyberEvents. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
