import React from 'react';
import { Button } from './ui/button';
import { 
  Home, Building2, Sun, Battery, Thermometer, Zap, 
  Fuel, Settings, FileText, Wrench, TrendingDown, ArrowRight, Award 
} from 'lucide-react';

export const BusinessLinesSection: React.FC = () => {
  const homeServices = [
    {
      icon: Zap,
      title: "Sprzedaż energii dla domu",
      description: "Competitive energy tariffs dla gospodarstw domowych. Stabilne ceny i pewność dostaw energii elektrycznej z gwarancją najniższych kosztów na rynku.",
      benefits: ["Niższe rachunki", "Stałe ceny", "Bez ukrytych opłat", "Prosty proces zmiany"],
      color: "from-blue-500 to-cyan-500",
      image: "/images/services/sprzedaz-energii-dom.jpg"
    },
    {
      icon: Sun,
      title: "Fotowoltaika dla domu",
      description: "Kompletne instalacje fotowoltaiczne dla domów jednorodzinnych. Projektowanie, montaż i serwis paneli słonecznych z 25-letnią gwarancją.",
      benefits: ["Oszczędności do 70%", "Dotacje i ulgi", "Montaż w 1 dzień", "25 lat gwarancji"],
      color: "from-cr-orange to-yellow-500",
      image: "/images/services/fotowoltaika-dom.jpg"
    },
    {
      icon: Battery,
      title: "Bank energii",
      description: "Magazyny energii dla domów - uniezależnij się od sieci energetycznej. Przechowuj wyprodukowaną energię i używaj jej kiedy potrzebujesz.",
      benefits: ["Niezależność energetyczna", "Zasilanie awaryjne", "Optymalizacja kosztów", "Zwrot w 8 lat"],
      color: "from-green-500 to-emerald-500",
      image: "/images/services/bank-energii-dom.jpg"
    },
    {
      icon: Thermometer,
      title: "Pompa ciepła",
      description: "Ekologiczne systemy grzewcze dla domów. Pompy ciepła powietrze-woda i gruntowe z programem Czyste Powietrze do 30 tys. zł dotacji.",
      benefits: ["Dotacje do 30 tys. zł", "Oszczędności 60%", "Ekologia", "Cichą praca"],
      color: "from-purple-500 to-indigo-500",
      image: "/images/services/pompa-ciepla-dom.jpg"
    }
  ];

  const businessServices = [
    {
      icon: Building2,
      title: "Energia dla firmy",
      description: "Profesjonalne tarify energetyczne dla przedsiębiorstw. Konkurencyjne ceny energii elektrycznej z możliwością negocjacji warunków.",
      benefits: ["Taryfy biznesowe", "Elastyczne umowy", "Dedykowany opiekun"]
    },
    {
      icon: Fuel,
      title: "Gaz dla firmy",
      description: "Dostawy gazu ziemnego dla firm wszystkich rozmiarów. Stabilne ceny i niezawodne dostawy z pełnym wsparciem technicznym.",
      benefits: ["Konkurencyjne ceny", "Pewność dostaw", "Wsparcie 24/7"]
    },
    {
      icon: Sun,
      title: "Fotowoltaika dla firmy",
      description: "Wielkoskalowe instalacje fotowoltaiczne dla przedsiębiorstw. Obniż koszty energii o 70% i wspieraj zrównoważony rozwój.",
      benefits: ["ROI w 6-8 lat", "Ulgi podatkowe", "CSR"]
    },
    {
      icon: Battery,
      title: "Bank energii",
      description: "Przemysłowe magazyny energii dla firm. Zarządzanie szczytami zapotrzebowania i optymalizacja kosztów energii.",
      benefits: ["Zarządzanie szczytami", "Backup zasilania", "Oszczędności"]
    },
    {
      icon: Settings,
      title: "Modernizacja układu pomiarowego",
      description: "Kompleksowa modernizacja systemów pomiarowych energii. Inteligentne liczniki i systemy monitoringu zużycia.",
      benefits: ["Dokładny pomiar", "Monitoring online", "Optymalizacja"]
    },
    {
      icon: TrendingDown,
      title: "Optymalizacja kosztów dystrybucji",
      description: "Analiza i optymalizacja kosztów przesyłu energii. Negocjacje z operatorami sieci i wybór najkorzystniejszych taryf.",
      benefits: ["Niższe koszty przesyłu", "Analiza taryf", "Negocjacje"]
    },
    {
      icon: Wrench,
      title: "Serwis infrastruktury energetycznej",
      description: "Kompleksowy serwis i utrzymanie infrastruktury energetycznej. Przeglądy, konserwacje i awaryjne naprawy 24/7.",
      benefits: ["Serwis 24/7", "Przeglądy okresowe", "Gwarancja jakości"]
    },
    {
      icon: FileText,
      title: "Opracowanie dokumentacji projektowej",
      description: "Profesjonalne projektowanie instalacji energetycznych. Dokumentacja techniczna, pozwolenia i nadzór nad realizacją.",
      benefits: ["Profesjonalne projekty", "Pozwolenia", "Nadzór realizacji"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="linie-biznesowe" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-cr-navy mb-6">
            Nasze 
            <span className="text-cr-orange"> linie biznesowe</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Od ponad 20 lat oferujemy kompleksowe rozwiązania energetyczne dla domów i firm. 
            Zaufały nam tysiące klientów w całej Polsce.
          </p>
        </div>

        {/* DLA DOMU Section */}
        <div className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <div className="bg-cr-orange text-white px-8 py-4 rounded-full">
              <div className="flex items-center space-x-3">
                <Home className="w-6 h-6" />
                <h3 className="text-2xl font-bold">DLA DOMU</h3>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {homeServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  {/* Header with gradient or image */}
                  {service.image ? (
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-xl font-bold">{service.title}</h4>
                      </div>
                    </div>
                  ) : (
                    <div className={`bg-gradient-to-br ${service.color} p-6 text-white`}>
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-xl font-bold">{service.title}</h4>
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-cr-orange rounded-full mr-3"></div>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      className="w-full bg-cr-orange hover:bg-orange-600 text-white"
                      onClick={scrollToContact}
                    >
                      Zapytaj o ofertę
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* DLA FIRMY Section */}
        <div>
          <div className="flex items-center justify-center mb-12">
            <div className="bg-cr-navy text-white px-8 py-4 rounded-full">
              <div className="flex items-center space-x-3">
                <Building2 className="w-6 h-6" />
                <h3 className="text-2xl font-bold">DLA FIRMY</h3>
              </div>
            </div>
          </div>

          {/* Business Investment Showcase Video */}
          <div className="mb-16 bg-gradient-to-r from-cr-navy to-blue-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0 items-center">
              {/* Video */}
              <div className="relative h-80 lg:h-96">
                <video 
                  className="w-full h-full object-cover" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  controls={false}
                  poster="/images/services/inwestycja-biznesowa-poster.jpg"
                  preload="auto"
                  webkit-playsinline="true"
                >
                  <source src="/images/services/inwestycja-biznesowa.mp4" type="video/mp4" />
                  <p>Twoja przeglądarka nie obsługuje odtwarzania wideo. 
                     <a href="/images/services/inwestycja-biznesowa.mp4" target="_blank">
                       Kliknij tutaj aby obejrzeć film
                     </a>
                  </p>
                </video>
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              {/* Content */}
              <div className="p-8 lg:p-12 text-white">
                <div className="inline-flex items-center bg-cr-orange text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Award className="w-4 h-4 mr-2" />
                  Realizacja 2023
                </div>
                
                <h4 className="text-3xl lg:text-4xl font-bold mb-6">
                  Kompleksowa inwestycja energetyczna
                </h4>
                
                <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                  Nowoczesny budynek komercyjny z instalacją fotowoltaiczną 500 kW 
                  i systemem magazynowania energii. Pełna niezależność energetyczna dla biznesu.
                </p>
                
                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cr-orange">500 kW</div>
                    <div className="text-sm text-blue-200">Moc instalacji PV</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cr-orange">80%</div>
                    <div className="text-sm text-blue-200">Oszczędności roczne</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cr-orange">7 lat</div>
                    <div className="text-sm text-blue-200">Zwrot inwestycji</div>
                  </div>
                </div>
                
                <Button 
                  className="bg-cr-orange hover:bg-orange-600 text-white px-8 py-3 text-lg"
                  onClick={scrollToContact}
                >
                  Zobacz więcej realizacji
                </Button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-6 border-l-4 border-cr-navy"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-cr-navy rounded-xl flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-cr-navy">{service.title}</h4>
                  </div>

                  <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-1 mb-4">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-cr-orange rounded-full mr-2"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="outline"
                    size="sm"
                    className="w-full border-cr-navy text-cr-navy hover:bg-cr-navy hover:text-white"
                    onClick={scrollToContact}
                  >
                    Więcej informacji
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 bg-gradient-to-r from-cr-navy to-blue-800 rounded-3xl p-8 lg:p-16 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Gotowy na oszczędności?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Skontaktuj się z naszymi ekspertami i poznaj dokładne możliwości oszczędności 
            dla Twojego domu lub firmy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-cr-orange hover:bg-orange-600 text-white font-bold px-8 py-4"
              onClick={scrollToContact}
            >
              <Home className="w-5 h-5 mr-2" />
              Oferta dla domu
            </Button>
            
            <Button 
              size="lg" 
              className="bg-cr-orange hover:bg-orange-600 text-white font-bold px-8 py-4"
              onClick={scrollToContact}
            >
              <Building2 className="w-5 h-5 mr-2" />
              Oferta dla firmy
            </Button>
          </div>
          
          <p className="text-blue-200 text-sm mt-6">
            📞 Bezpłatne doradztwo • 📋 Wycena w 24h • ⚡ Szybka realizacja
          </p>
        </div>
      </div>
    </section>
  );
};
