import { GraduationCap, Network, Award, TrendingUp, Users, Lightbulb } from 'lucide-react';

const benefits = [
  {
    icon: GraduationCap,
    title: 'Learn from Experts',
    description: 'Gain insights from industry leaders and practitioners with real-world experience.',
  },
  {
    icon: Network,
    title: 'Network & Connect',
    description: 'Build valuable relationships with peers, mentors, and potential employers.',
  },
  {
    icon: Award,
    title: 'Earn Certifications',
    description: 'Get continuing education credits and professional certifications.',
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Discover new opportunities and advance your security career.',
  },
  {
    icon: Lightbulb,
    title: 'Latest Trends',
    description: 'Stay ahead with cutting-edge research and emerging technologies.',
  },
  {
    icon: Users,
    title: 'Community Access',
    description: 'Join a global community of security professionals and enthusiasts.',
  },
];

export function WhyAttend() {
  return (
    <section className="py-16 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl text-white mb-4">
            Why Attend Our Events?
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Join thousands of security professionals who have advanced their careers through our events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-slate-800 border border-cyan-500/20 rounded-lg p-6 hover:border-cyan-500/50 transition-all group"
            >
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl text-white mb-3">{benefit.title}</h3>
              <p className="text-slate-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
