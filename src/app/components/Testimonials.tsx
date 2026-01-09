import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    id: 1,
    name: 'Michael Chen',
    title: 'Senior Security Engineer',
    company: 'TechCorp',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
    rating: 5,
    content: 'The best cyber security events I\'ve attended. The speakers are top-notch and the networking opportunities are invaluable.',
  },
  {
    id: 2,
    name: 'Jessica Martinez',
    title: 'CISO',
    company: 'SecureNet Inc',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop',
    rating: 5,
    content: 'CyberEvents consistently delivers high-quality content and brings together the brightest minds in security. Highly recommended!',
  },
  {
    id: 3,
    name: 'David Kim',
    title: 'Penetration Tester',
    company: 'RedTeam Labs',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop',
    rating: 5,
    content: 'I\'ve learned more practical skills from these events than from any online course. The hands-on workshops are exceptional.',
  },
];

export function Testimonials() {
  return (
    <section className="bg-slate-900/50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-white mb-4">
            What Attendees Say
          </h2>
          <p className="text-slate-400 text-lg">
            Trusted by thousands of security professionals worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-slate-800 border border-cyan-500/20 rounded-lg p-6 relative"
            >
              <Quote className="w-10 h-10 text-cyan-500/20 absolute top-4 right-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-300 mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-700">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">
                    {testimonial.title}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
