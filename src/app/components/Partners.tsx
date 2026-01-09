import { Building2, Handshake, Star, Zap, Crown, Award } from 'lucide-react';

const sponsorTiers = [
  {
    name: 'Platinum',
    icon: Crown,
    color: 'from-slate-200 to-slate-400',
    price: '$50,000',
    benefits: [
      'Premier booth location (20x20)',
      'Keynote speaking opportunity',
      'Logo on all event materials',
      'Full-page ad in event program',
      '20 complimentary passes',
      'Exclusive VIP dinner access',
      'Social media promotion',
      'Post-event attendee list',
    ],
  },
  {
    name: 'Gold',
    icon: Award,
    color: 'from-yellow-400 to-yellow-600',
    price: '$25,000',
    benefits: [
      'Premium booth location (10x10)',
      'Workshop speaking slot',
      'Logo on event website',
      'Half-page ad in event program',
      '10 complimentary passes',
      'VIP reception access',
      'Social media mention',
      'Lead retrieval system',
    ],
  },
  {
    name: 'Silver',
    icon: Star,
    color: 'from-slate-400 to-slate-600',
    price: '$10,000',
    benefits: [
      'Standard booth (8x8)',
      'Logo on event website',
      'Quarter-page ad in program',
      '5 complimentary passes',
      'Exhibition hall access',
      'Social media mention',
      'Networking opportunities',
    ],
  },
];

const partners = [
  { name: 'Cloudflare', category: 'Infrastructure Partner' },
  { name: 'CrowdStrike', category: 'Security Partner' },
  { name: 'Palo Alto Networks', category: 'Technology Partner' },
  { name: 'Microsoft', category: 'Platinum Sponsor' },
  { name: 'Google Cloud', category: 'Gold Sponsor' },
  { name: 'AWS', category: 'Platinum Sponsor' },
  { name: 'Cisco', category: 'Technology Partner' },
  { name: 'Fortinet', category: 'Gold Sponsor' },
];

export function Partners() {
  return (
    <div className="min-h-screen bg-slate-950 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl text-white mb-4">
            Partners & Sponsorship
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Join leading organizations in supporting the cyber security community
          </p>
        </div>

        {/* Why Sponsor */}
        <div className="bg-slate-800 border border-cyan-500/20 rounded-lg p-8 mb-16">
          <h2 className="text-3xl text-white text-center mb-12">Why Sponsor Our Events?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Building2 className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl text-white mb-3">Brand Visibility</h3>
              <p className="text-slate-400">
                Reach thousands of security professionals and decision-makers across the globe.
              </p>
            </div>
            <div className="text-center">
              <Handshake className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl text-white mb-3">Network & Connect</h3>
              <p className="text-slate-400">
                Build relationships with industry leaders, potential clients, and top talent.
              </p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl text-white mb-3">Thought Leadership</h3>
              <p className="text-slate-400">
                Position your organization as an industry leader and innovator.
              </p>
            </div>
          </div>
        </div>

        {/* Sponsorship Tiers */}
        <div className="mb-16">
          <h2 className="text-3xl text-white text-center mb-12">Sponsorship Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsorTiers.map((tier) => (
              <div
                key={tier.name}
                className="bg-slate-800 border border-cyan-500/20 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-all"
              >
                <div className={`bg-gradient-to-r ${tier.color} p-6 text-center`}>
                  <tier.icon className="w-12 h-12 text-slate-900 mx-auto mb-2" />
                  <h3 className="text-2xl text-slate-900 mb-2">{tier.name}</h3>
                  <p className="text-3xl text-slate-900">{tier.price}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-300 text-sm">
                        <span className="text-cyan-400 mt-1">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full mt-6 bg-cyan-500 hover:bg-cyan-600 text-slate-900 py-3 rounded-lg transition-colors">
                    Select Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Partners */}
        <div className="mb-16">
          <h2 className="text-3xl text-white text-center mb-12">Our Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-slate-800 border border-cyan-500/20 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-all"
              >
                <div className="w-16 h-16 bg-slate-700 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-white mb-1">{partner.name}</h3>
                <p className="text-cyan-400 text-sm">{partner.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Packages */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-8 text-center">
          <h2 className="text-3xl text-white mb-4">Need a Custom Package?</h2>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            We offer flexible sponsorship options tailored to your organization's goals and budget. Contact us to discuss a custom partnership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-8 py-3 rounded-lg transition-colors">
              Contact Sales
            </button>
            <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-3 rounded-lg transition-colors">
              Download Prospectus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
