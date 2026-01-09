import { Calendar, Globe, Users } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <div className="relative bg-slate-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1666615435088-4865bf5ed3fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njc4ODIxNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Cyber Security"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Discover Cyber Security
            <span className="block text-cyan-400 mt-2">Events Worldwide</span>
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Connect with industry experts, learn cutting-edge security practices, and stay ahead of emerging threats.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-2">
              <Calendar className="w-8 h-8 text-cyan-400" />
              <div className="text-3xl text-white">250+</div>
              <div className="text-slate-400">Events</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Globe className="w-8 h-8 text-cyan-400" />
              <div className="text-3xl text-white">45</div>
              <div className="text-slate-400">Countries</div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Users className="w-8 h-8 text-cyan-400" />
              <div className="text-3xl text-white">50K+</div>
              <div className="text-slate-400">Attendees</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
