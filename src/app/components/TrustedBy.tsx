import { Building2 } from 'lucide-react';

const companies = [
  'Microsoft',
  'Google',
  'Amazon',
  'Cisco',
  'IBM',
  'Oracle',
  'Cloudflare',
  'CrowdStrike',
  'Palo Alto Networks',
  'Fortinet',
  'Check Point',
  'Splunk',
];

export function TrustedBy() {
  return (
    <section className="py-16 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl text-white mb-4">
            Trusted by Leading Organizations
          </h2>
          <p className="text-slate-400">
            Join security professionals from the world's top companies
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {companies.map((company) => (
            <div
              key={company}
              className="flex items-center justify-center p-6 bg-slate-800/50 border border-cyan-500/10 rounded-lg hover:border-cyan-500/30 transition-all"
            >
              <div className="text-center">
                <Building2 className="w-8 h-8 text-cyan-400/50 mx-auto mb-2" />
                <span className="text-slate-400 text-sm">{company}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
