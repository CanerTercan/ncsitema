import { Presentation, Users, Video, GraduationCap, Coffee, Globe } from 'lucide-react';

const categories = [
  {
    name: 'Conferences',
    icon: Presentation,
    description: 'Multi-day events featuring keynotes, sessions, and exhibitions',
    count: '50+',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    name: 'Workshops',
    icon: Users,
    description: 'Hands-on training sessions with industry experts',
    count: '100+',
    color: 'from-blue-500 to-purple-500',
  },
  {
    name: 'Webinars',
    icon: Video,
    description: 'Online sessions accessible from anywhere in the world',
    count: '75+',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Training',
    icon: GraduationCap,
    description: 'Professional certification and skill development programs',
    count: '60+',
    color: 'from-pink-500 to-red-500',
  },
  {
    name: 'Meetups',
    icon: Coffee,
    description: 'Local networking events for security professionals',
    count: '120+',
    color: 'from-red-500 to-orange-500',
  },
  {
    name: 'Virtual Events',
    icon: Globe,
    description: 'Fully online conferences and community gatherings',
    count: '90+',
    color: 'from-orange-500 to-yellow-500',
  },
];

export function EventCategories() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-white mb-4">
            Explore Event Types
          </h2>
          <p className="text-slate-400 text-lg">
            Find the perfect format for your learning and networking goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-slate-800 border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/50 transition-all group cursor-pointer"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl text-white mb-2">{category.name}</h3>
              <p className="text-slate-400 text-sm mb-4">{category.description}</p>
              <div className="text-cyan-400">{category.count} events</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
