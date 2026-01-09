import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoImage from 'figma:asset/bc17f70308f44433dbbf4c31d48c11983e6b4495.png';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-slate-900 border-b border-cyan-500/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            <img src={logoImage} alt="CyberEvents" className="h-10" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavClick('home')}
              className={`transition-colors ${
                currentPage === 'home' ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-400'
              }`}
            >
              Events
            </button>
            <button
              onClick={() => handleNavClick('speakers')}
              className={`transition-colors ${
                currentPage === 'speakers' ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-400'
              }`}
            >
              Speakers
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`transition-colors ${
                currentPage === 'about' ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-400'
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('partners')}
              className={`transition-colors ${
                currentPage === 'partners' ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-400'
              }`}
            >
              Sponsorship
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className={`transition-colors ${
                currentPage === 'contact' ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-400'
              }`}
            >
              Contact
            </button>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-6 py-2 rounded-lg transition-colors">
              Submit Event
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-cyan-500/20">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleNavClick('home')}
                className={`text-left transition-colors ${
                  currentPage === 'home' ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-400'
                }`}
              >
                Events
              </button>
              <button
                onClick={() => handleNavClick('speakers')}
                className={`text-left transition-colors ${
                  currentPage === 'speakers' ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-400'
                }`}
              >
                Speakers
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className={`text-left transition-colors ${
                  currentPage === 'about' ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-400'
                }`}
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('partners')}
                className={`text-left transition-colors ${
                  currentPage === 'partners' ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-400'
                }`}
              >
                Sponsorship
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className={`text-left transition-colors ${
                  currentPage === 'contact' ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-400'
                }`}
              >
                Contact
              </button>
              <button className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 px-6 py-2 rounded-lg transition-colors">
                Submit Event
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}