import React from 'react';
import { Button } from './ui/button';
import { Phone, Calculator, Shield, Award } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative bg-gradient-to-br from-cr-navy via-cr-navy to-blue-900 py-16 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cr-orange rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400 rounded-full translate-y-32 -translate-x-32"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white">
            <div className="mb-6">
              <div className="inline-flex items-center bg-cr-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
                <Award className="w-4 h-4 mr-2" />
                20 lat zaufania na rynku
              </div>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-8">
              Bezpieczne rozwiązania energetyczne dla 
              <span className="text-cr-orange"> Twojego domu i firmy</span>
            </h1>
            
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed">
              Centrum Realizacji - Twój partner w oszczędzaniu energii. 
              Sprawdzone rozwiązania fotowoltaiczne i pompy ciepła z gwarancją jakości.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-2">
                  <div className="w-12 h-12 bg-cr-orange rounded-full flex items-center justify-center mr-3">
                    <Calculator className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cr-orange">70%</div>
                    <div className="text-blue-200 text-sm">oszczędności</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-2">
                  <div className="w-12 h-12 bg-cr-orange rounded-full flex items-center justify-center mr-3">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cr-orange">25 lat</div>
                    <div className="text-blue-200 text-sm">gwarancji</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-2">
                  <div className="w-12 h-12 bg-cr-orange rounded-full flex items-center justify-center mr-3">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-cr-orange">5000+</div>
                    <div className="text-blue-200 text-sm">realizacji</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-cr-orange hover:bg-orange-600 text-white font-bold px-8 py-4 text-lg shadow-xl"
                onClick={scrollToContact}
              >
                <Phone className="w-5 h-5 mr-2" />
                Bezpłatna wycena
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-cr-navy px-8 py-4 text-lg font-semibold"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Kalkulator oszczędności
              </Button>
            </div>

            <p className="text-blue-200 text-sm mt-6">
              📞 Doradztwo i wycena całkowicie bezpłatne • ⚡ Montaż w 1 dzień • 💰 Finansowanie 0%
            </p>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              {/* Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-cr-orange/20 to-yellow-400/20 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-cr-orange rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold">Fotowoltaika dla domu</p>
                  <p className="text-sm opacity-80">Nowoczesne panele słoneczne</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-cr-orange mb-1">15 lat</div>
                  <div className="text-white text-sm">zwrot inwestycji</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-cr-orange mb-1">0 zł</div>
                  <div className="text-white text-sm">wkład własny</div>
                </div>
              </div>
            </div>

            {/* Floating Trust Badges */}
            <div className="absolute -top-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
              ✓ Certyfikowane produkty
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-cr-navy px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
              🏆 Firma roku 2023
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
