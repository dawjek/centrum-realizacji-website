import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Zap, Phone } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-cr-white shadow-lg border-b-2 border-cr-orange">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cr-orange to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-cr-navy">CENTRUM</h1>
                <p className="text-sm font-semibold text-cr-orange -mt-1">REALIZACJI</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('linie-biznesowe')}
              className="text-cr-navy hover:text-cr-orange font-semibold transition-colors duration-200 relative group"
            >
              Linie biznesowe
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cr-orange transition-all duration-200 group-hover:w-full"></span>
            </button>
            
            <button 
              onClick={() => scrollToSection('o-nas')}
              className="text-cr-navy hover:text-cr-orange font-semibold transition-colors duration-200 relative group"
            >
              O nas
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cr-orange transition-all duration-200 group-hover:w-full"></span>
            </button>
            
            <button 
              onClick={() => scrollToSection('referencje')}
              className="text-cr-navy hover:text-cr-orange font-semibold transition-colors duration-200 relative group"
            >
              Referencje
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cr-orange transition-all duration-200 group-hover:w-full"></span>
            </button>
            
            <button 
              onClick={() => scrollToSection('kontakt')}
              className="text-cr-navy hover:text-cr-orange font-semibold transition-colors duration-200 relative group"
            >
              Kontakt
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cr-orange transition-all duration-200 group-hover:w-full"></span>
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              className="bg-cr-orange hover:bg-orange-600 text-white font-semibold px-6 py-2 shadow-lg"
              onClick={() => scrollToSection('kontakt')}
            >
              <Phone className="w-4 h-4 mr-2" />
              Zadzwoń już dziś
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-cr-navy hover:text-cr-orange"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-cr-white py-4">
            <div className="space-y-4">
              <button 
                onClick={() => scrollToSection('linie-biznesowe')}
                className="block w-full text-left px-4 py-3 text-cr-navy hover:text-cr-orange hover:bg-gray-50 font-semibold transition-colors duration-200"
              >
                Linie biznesowe
              </button>
              
              <button 
                onClick={() => scrollToSection('o-nas')}
                className="block w-full text-left px-4 py-3 text-cr-navy hover:text-cr-orange hover:bg-gray-50 font-semibold transition-colors duration-200"
              >
                O nas
              </button>
              
              <button 
                onClick={() => scrollToSection('referencje')}
                className="block w-full text-left px-4 py-3 text-cr-navy hover:text-cr-orange hover:bg-gray-50 font-semibold transition-colors duration-200"
              >
                Referencje
              </button>
              
              <button 
                onClick={() => scrollToSection('kontakt')}
                className="block w-full text-left px-4 py-3 text-cr-navy hover:text-cr-orange hover:bg-gray-50 font-semibold transition-colors duration-200"
              >
                Kontakt
              </button>
              
              <div className="px-4 pt-4 border-t border-gray-200">
                <Button 
                  className="w-full bg-cr-orange hover:bg-orange-600 text-white font-semibold py-3"
                  onClick={() => scrollToSection('kontakt')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Zadzwoń już dziś
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
