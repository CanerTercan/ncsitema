import { Shield, Target, Users, Globe, Award, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <div className="min-h-screen bg-slate-950 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl text-white mb-4">
            About CyberEvents
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Connecting the global cyber security community through world-class events
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl text-white mb-4">Our Mission</h2>
            <p className="text-slate-300 mb-4">
              CyberEvents is dedicated to bringing together the world's leading cyber security professionals, researchers, and enthusiasts through premium conferences, workshops, and networking events.
            </p>
            <p className="text-slate-300 mb-4">
              We believe in fostering a collaborative environment where knowledge sharing and innovation drive the future of cyber security. Our events provide a platform for cutting-edge research, practical skill development, and meaningful connections.
            </p>
            <p className="text-slate-300">
              Since our founding, we've facilitated over 250 events across 45 countries, reaching more than 50,000 security professionals worldwide.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1666615435088-4865bf5ed3fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njc4ODIxNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Cyber Security"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 border border-cyan-500/20 rounded-lg p-6 text-center">
              <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl text-white mb-3">Security First</h3>
              <p className="text-slate-400">
                We prioritize the safety and privacy of our attendees, speakers, and partners in everything we do.
              </p>
            </div>
            <div className="bg-slate-800 border border-cyan-500/20 rounded-lg p-6 text-center">
              <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl text-white mb-3">Community Driven</h3>
              <p className="text-slate-400">
                Our events are shaped by the needs and interests of the global security community.
              </p>
            </div>
            <div className="bg-slate-800 border border-cyan-500/20 rounded-lg p-6 text-center">
              <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl text-white mb-3">Excellence</h3>
              <p className="text-slate-400">
                We maintain the highest standards for content quality, speaker expertise, and event experience.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-12 mb-20">
          <h2 className="text-3xl text-white text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <TrendingUp className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-4xl text-white mb-2">250+</div>
              <div className="text-slate-400">Events Hosted</div>
            </div>
            <div className="text-center">
              <Globe className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-4xl text-white mb-2">45</div>
              <div className="text-slate-400">Countries</div>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-4xl text-white mb-2">50K+</div>
              <div className="text-slate-400">Attendees</div>
            </div>
            <div className="text-center">
              <Target className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-4xl text-white mb-2">500+</div>
              <div className="text-slate-400">Expert Speakers</div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl text-white mb-6">Join Our Team</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals who share our vision of advancing cyber security education and community building.
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-8 py-3 rounded-lg transition-colors">
            View Open Positions
          </button>
        </div>
      </div>
    </div>
  );
}
