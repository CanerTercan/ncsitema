import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EventFilters } from './components/EventFilters';
import { EventCard } from './components/EventCard';
import { Footer } from './components/Footer';
import { Speakers } from './components/Speakers';
import { About } from './components/About';
import { Partners } from './components/Partners';
import { Contact } from './components/Contact';
import { UpcomingHighlights } from './components/UpcomingHighlights';
import { EventCategories } from './components/EventCategories';
import { WhyAttend } from './components/WhyAttend';
import { Testimonials } from './components/Testimonials';
import { TrustedBy } from './components/TrustedBy';
import { Newsletter } from './components/Newsletter';

const events = [
  {
    id: 1,
    title: 'CyberShield Global Summit 2026',
    date: 'August 3-8, 2026',
    time: '9:00 AM - 6:00 PM',
    location: 'Las Vegas, NV, USA',
    attendees: 15000,
    category: 'Conference',
    imageUrl: 'https://images.unsplash.com/photo-1666615435088-4865bf5ed3fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njc4ODIxNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'The premier international cyber security summit featuring cutting-edge research, advanced threat analysis, and hands-on security workshops.',
    isFeatured: true,
  },
  {
    id: 2,
    title: 'SecureWorld Tech Conference',
    date: 'August 8-11, 2026',
    time: '10:00 AM - 8:00 PM',
    location: 'Las Vegas, NV, USA',
    attendees: 30000,
    category: 'Conference',
    imageUrl: 'https://images.unsplash.com/photo-1560439514-0fc9d2cd5e1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWNrZXIlMjBjb25mZXJlbmNlfGVufDF8fHx8MTc2NzkwMjk5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'The world\'s largest gathering of security professionals, ethical hackers, and technology innovators exploring the future of cyber defense.',
    isFeatured: true,
  },
  {
    id: 3,
    title: 'InfoSec Innovation Summit 2026',
    date: 'April 20-24, 2026',
    time: '8:00 AM - 7:00 PM',
    location: 'San Francisco, CA, USA',
    attendees: 45000,
    category: 'Conference',
    imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwc2VjdXJpdHl8ZW58MXx8fHwxNzY3NzkzNjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Leading cybersecurity conference showcasing breakthrough innovations, emerging trends, and strategic networking opportunities.',
    isFeatured: true,
  },
  {
    id: 4,
    title: 'Cloud Security Workshop',
    date: 'February 15, 2026',
    time: '1:00 PM - 5:00 PM',
    location: 'Virtual / Online',
    attendees: 500,
    category: 'Workshop',
    imageUrl: 'https://images.unsplash.com/photo-1666615435088-4865bf5ed3fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njc4ODIxNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Hands-on workshop covering Cloudflare security features, Zero Trust architecture, and best practices for securing cloud infrastructure.',
  },
  {
    id: 5,
    title: 'Penetration Testing Bootcamp',
    date: 'March 5-7, 2026',
    time: '9:00 AM - 6:00 PM',
    location: 'London, UK',
    attendees: 150,
    category: 'Training',
    imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwc2VjdXJpdHl8ZW58MXx8fHwxNzY3NzkzNjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Intensive 3-day training on penetration testing methodologies, tools, and techniques for ethical hacking.',
  },
  {
    id: 6,
    title: 'Web Application Security Webinar',
    date: 'January 25, 2026',
    time: '2:00 PM - 3:30 PM',
    location: 'Virtual / Online',
    attendees: 1200,
    category: 'Webinar',
    imageUrl: 'https://images.unsplash.com/photo-1560439514-0fc9d2cd5e1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWNrZXIlMjBjb25mZXJlbmNlfGVufDF8fHx8MTc2NzkwMjk5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Learn about the latest web application vulnerabilities and how to protect against OWASP Top 10 threats.',
  },
  {
    id: 7,
    title: 'Cyber Security Meetup',
    date: 'January 18, 2026',
    time: '6:00 PM - 9:00 PM',
    location: 'New York, NY, USA',
    attendees: 80,
    category: 'Meetup',
    imageUrl: 'https://images.unsplash.com/photo-1666615435088-4865bf5ed3fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njc4ODIxNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Monthly meetup for security professionals to network, share knowledge, and discuss emerging threats.',
  },
  {
    id: 8,
    title: 'Incident Response Training',
    date: 'February 22-23, 2026',
    time: '9:00 AM - 5:00 PM',
    location: 'Austin, TX, USA',
    attendees: 200,
    category: 'Training',
    imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwc2VjdXJpdHl8ZW58MXx8fHwxNzY3NzkzNjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Comprehensive training on incident response procedures, forensics, and breach management.',
  },
  {
    id: 9,
    title: 'Zero Trust Security Workshop',
    date: 'March 12, 2026',
    time: '10:00 AM - 4:00 PM',
    location: 'Virtual / Online',
    attendees: 350,
    category: 'Workshop',
    imageUrl: 'https://images.unsplash.com/photo-1560439514-0fc9d2cd5e1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWNrZXIlMjBjb25mZXJlbmNlfGVufDF8fHx8MTc2NzkwMjk5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Explore Zero Trust architecture principles and implementation strategies for modern organizations.',
  },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('All Events');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = events.filter((event) => {
    const matchesCategory = selectedCategory === 'All Events' || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredEvents = filteredEvents.filter(event => event.isFeatured);
  const regularEvents = filteredEvents.filter(event => !event.isFeatured);

  const renderPage = () => {
    switch (currentPage) {
      case 'speakers':
        return <Speakers />;
      case 'about':
        return <About />;
      case 'partners':
        return <Partners />;
      case 'contact':
        return <Contact />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            
            {/* Upcoming Highlights */}
            <UpcomingHighlights />
            
            {/* Event Categories */}
            <EventCategories />
            
            {/* Why Attend */}
            <WhyAttend />
            
            {/* Events Section */}
            <section id="events" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              {/* Filters */}
              <EventFilters
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
              />

              {/* Featured Events */}
              {featuredEvents.length > 0 && (
                <>
                  <h2 className="text-3xl text-white mb-8">Featured Events</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {featuredEvents.map((event) => (
                      <EventCard key={event.id} {...event} />
                    ))}
                  </div>
                </>
              )}

              {/* All Events */}
              {regularEvents.length > 0 && (
                <>
                  <h2 className="text-3xl text-white mb-8">
                    {featuredEvents.length > 0 ? 'More Events' : 'All Events'}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {regularEvents.map((event) => (
                      <EventCard key={event.id} {...event} />
                    ))}
                  </div>
                </>
              )}

              {/* No Results */}
              {filteredEvents.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-slate-400 text-lg">No events found matching your criteria.</p>
                </div>
              )}
            </section>
            
            {/* Testimonials */}
            <Testimonials />
            
            {/* Trusted By */}
            <TrustedBy />
            
            {/* Newsletter */}
            <Newsletter />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}