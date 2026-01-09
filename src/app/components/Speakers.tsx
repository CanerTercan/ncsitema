import { Linkedin, Twitter, Award, Briefcase } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const speakers = [
  {
    id: 1,
    name: 'Dr. Sarah Chen',
    title: 'Chief Security Officer',
    company: 'CloudTech Systems',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    expertise: ['Cloud Security', 'Zero Trust', 'Threat Intelligence'],
    bio: 'Leading expert in cloud security with over 15 years of experience protecting enterprise infrastructure.',
    twitter: '@sarahchen',
    linkedin: 'sarah-chen',
  },
  {
    id: 2,
    name: 'Marcus Williams',
    title: 'Penetration Testing Lead',
    company: 'SecureOps Inc',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    expertise: ['Ethical Hacking', 'Red Teaming', 'OSINT'],
    bio: 'Renowned penetration tester and security researcher specializing in advanced persistent threats.',
    twitter: '@marcusw',
    linkedin: 'marcus-williams',
  },
  {
    id: 3,
    name: 'Aisha Patel',
    title: 'Director of Incident Response',
    company: 'CyberDefense Global',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    expertise: ['Incident Response', 'Digital Forensics', 'Malware Analysis'],
    bio: 'Expert in cybersecurity incident response and digital forensics with numerous certifications.',
    twitter: '@aishapatel',
    linkedin: 'aisha-patel',
  },
  {
    id: 4,
    name: 'James Rodriguez',
    title: 'Security Architect',
    company: 'Enterprise Shield',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
    expertise: ['Network Security', 'Architecture Design', 'Compliance'],
    bio: 'Award-winning security architect designing resilient systems for Fortune 500 companies.',
    twitter: '@jrodriguez',
    linkedin: 'james-rodriguez',
  },
  {
    id: 5,
    name: 'Dr. Emily Zhang',
    title: 'Cryptography Researcher',
    company: 'MIT Cyber Lab',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop',
    expertise: ['Cryptography', 'Blockchain Security', 'Quantum Computing'],
    bio: 'Leading researcher in post-quantum cryptography and blockchain security protocols.',
    twitter: '@emilyzhang',
    linkedin: 'emily-zhang',
  },
  {
    id: 6,
    name: 'Alex Thompson',
    title: 'Application Security Lead',
    company: 'DevSecOps Labs',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    expertise: ['AppSec', 'DevSecOps', 'Secure SDLC'],
    bio: 'Passionate about integrating security into the development lifecycle and building secure applications.',
    twitter: '@alexthompson',
    linkedin: 'alex-thompson',
  },
];

export function Speakers() {
  return (
    <div className="min-h-screen bg-slate-950 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl text-white mb-4">
            Featured Speakers
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Learn from industry-leading experts and pioneers in cyber security
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="bg-slate-800 rounded-lg border border-cyan-500/20 overflow-hidden hover:border-cyan-500/50 transition-all"
            >
              {/* Speaker Image */}
              <div className="relative h-64 bg-slate-700">
                <ImageWithFallback
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Speaker Info */}
              <div className="p-6">
                <h3 className="text-xl text-white mb-1">
                  {speaker.name}
                </h3>
                <div className="flex items-center gap-2 text-cyan-400 text-sm mb-1">
                  <Briefcase className="w-4 h-4" />
                  {speaker.title}
                </div>
                <p className="text-slate-400 text-sm mb-4">{speaker.company}</p>

                <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                  {speaker.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {speaker.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-slate-700 text-cyan-400 text-xs rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex gap-3 pt-4 border-t border-slate-700">
                  <a
                    href={`https://twitter.com/${speaker.twitter}`}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://linkedin.com/in/${speaker.linkedin}`}
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-slate-800 border border-cyan-500/20 rounded-lg p-8">
          <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
          <h2 className="text-2xl text-white mb-4">Want to Speak at Our Events?</h2>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            We're always looking for passionate security professionals to share their knowledge and expertise with our community.
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-8 py-3 rounded-lg transition-colors">
            Apply to Speak
          </button>
        </div>
      </div>
    </div>
  );
}
