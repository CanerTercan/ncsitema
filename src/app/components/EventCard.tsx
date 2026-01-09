import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: number;
  category: string;
  imageUrl: string;
  description: string;
  isFeatured?: boolean;
}

export function EventCard({
  title,
  date,
  time,
  location,
  attendees,
  category,
  imageUrl,
  description,
  isFeatured = false,
}: EventCardProps) {
  return (
    <div className={`bg-slate-800 rounded-lg overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 transition-all ${isFeatured ? 'ring-2 ring-cyan-500' : ''}`}>
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        {isFeatured && (
          <div className="absolute top-3 right-3 bg-cyan-500 text-slate-900 px-3 py-1 rounded-full text-sm">
            Featured
          </div>
        )}
        <div className="absolute top-3 left-3 bg-slate-900/90 text-cyan-400 px-3 py-1 rounded-full text-sm">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl text-white mb-3">
          {title}
        </h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Event Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-slate-300 text-sm">
            <Calendar className="w-4 h-4 text-cyan-400" />
            {date}
          </div>
          <div className="flex items-center gap-2 text-slate-300 text-sm">
            <Clock className="w-4 h-4 text-cyan-400" />
            {time}
          </div>
          <div className="flex items-center gap-2 text-slate-300 text-sm">
            <MapPin className="w-4 h-4 text-cyan-400" />
            {location}
          </div>
          <div className="flex items-center gap-2 text-slate-300 text-sm">
            <Users className="w-4 h-4 text-cyan-400" />
            {attendees} attending
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 py-2 rounded-lg transition-colors">
          Register Now
        </button>
      </div>
    </div>
  );
}
