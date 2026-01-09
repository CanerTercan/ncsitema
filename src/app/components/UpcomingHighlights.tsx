import { Clock, MapPin, Users, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const highlights = [
  {
    id: 1,
    title: 'Global Cyber Security Summit',
    date: 'January 31, 2026',
    time: '9:00 AM - 6:00 PM EST',
    location: 'Virtual',
    attendees: 1200,
    type: 'Free Webinar',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwc2VjdXJpdHl8ZW58MXx8fHwxNzY3NzkzNjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    daysUntil: 22,
  },
  {
    id: 2,
    title: 'Cloud Security Workshop',
    date: 'February 15, 2026',
    time: '1:00 PM EST',
    location: 'Virtual',
    attendees: 500,
    type: 'Workshop',
    image: 'https://images.unsplash.com/photo-1666615435088-4865bf5ed3fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njc4ODIxNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    daysUntil: 37,
  },
];

export function UpcomingHighlights() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl text-white mb-2">
              Coming Up Next
            </h2>
            <p className="text-slate-400">Don't miss these upcoming events</p>
          </div>
          <button className="hidden sm:flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
            View All
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {highlights.map((event) => (
            <div
              key={event.id}
              className="bg-slate-800 border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-all group"
            >
              <div className="md:flex">
                {/* Image */}
                <div className="md:w-1/3 relative h-48 md:h-auto">
                  <ImageWithFallback
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-cyan-500 text-slate-900 px-3 py-1 rounded-full text-sm">
                    {event.daysUntil} days
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-2/3 p-6">
                  <div className="inline-block bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-xs mb-3">
                    {event.type}
                  </div>
                  <h3 className="text-xl text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-slate-300 text-sm">
                      <Clock className="w-4 h-4 text-cyan-400" />
                      {event.date} at {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 text-sm">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-slate-300 text-sm">
                      <Users className="w-4 h-4 text-cyan-400" />
                      {event.attendees} registered
                    </div>
                  </div>

                  <button className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2">
                    Register Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}