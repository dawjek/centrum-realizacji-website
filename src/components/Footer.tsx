import React from 'react';
import { MapPin, Phone, Mail, Clock, Zap, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const quickLinks = [
    { label: "Fotowoltaika dla domu", href: "#" },
    { label: "Pompy ciepła", href: "#" },
    { label: "Energia dla domu", href: "#" },
    { label: "Bank energii", href: "#" },
    { label: "Fotowoltaika dla firmy", href: "#" },
    { label: "Energia dla firmy", href: "#" }
  ];

  const companyLinks = [
    { label: "O nas", href: "#o-nas" },
    { label: "Nasze realizacje", href: "#referencje" },
    { label: "Kontakt", href: "#kontakt" },
    { label: "Kariera", href: "#" },
    { label: "Biura regionalne", href: "#" },
    { label: "Centrum prasowe", href: "#" }
  ];

  const legalLinks = [
    { label: "Polityka prywatności", href: "#" },
    { label: "Regulamin świadczenia usług", href: "#" },
    { label: "Warunki ogólne", href: "#" },
    { label: "GDPR", href: "#" },
    { label: "Polityka cookies", href: "#" },
    { label: "Ochrona danych", href: "#" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-cr-navy via-cr-navy to-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              {/* Logo */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-cr-orange rounded-xl flex items-center justify-center shadow-lg">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">CENTRUM</h3>
                  <p className="text-cr-orange text-sm font-semibold -mt-1">REALIZACJI</p>
                </div>
              </div>
              
              <p className="text-blue-100 leading-relaxed mb-6">
                Od 20 lat jesteśmy liderem w dziedzinie rozwiązań energetycznych. 
                Pomagamy polskim rodzinom i firmom osiągać niezależność energetyczną.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-cr-orange mr-3 mt-1 flex-shrink-0" />
                <div className="text-blue-100">
                  <p className="font-semibold text-white">Siedziba główna:</p>
                  <p>ul. Energetyczna 25<br />00-950 Warszawa</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-cr-orange mr-3 mt-1 flex-shrink-0" />
                <div className="text-blue-100">
                  <p className="font-semibold text-white">Telefon:</p>
                  <p className="text-cr-orange font-bold">+48 800 100 200</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-cr-orange mr-3 mt-1 flex-shrink-0" />
                <div className="text-blue-100">
                  <p className="font-semibold text-white">Email:</p>
                  <p>biuro@centrum-realizacji.pl</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-cr-orange mr-3 mt-1 flex-shrink-0" />
                <div className="text-blue-100">
                  <p className="font-semibold text-white">Godziny pracy:</p>
                  <p>Pon-Pt: 8:00-18:00<br />Sob: 9:00-15:00</p>
                  <p className="text-cr-orange font-semibold">Awarie 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Nasze usługi</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-blue-100 hover:text-cr-orange transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-cr-orange rounded-full mr-3 group-hover:bg-white transition-colors duration-200"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Firma</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => link.href.startsWith('#') ? scrollToSection(link.href.substring(1)) : null}
                    className="text-blue-100 hover:text-cr-orange transition-colors duration-200 flex items-center group text-left"
                  >
                    <span className="w-2 h-2 bg-cr-orange rounded-full mr-3 group-hover:bg-white transition-colors duration-200"></span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">Newsletter</h4>
            
            {/* Newsletter */}
            <div className="mb-8">
              <p className="text-blue-100 mb-4">
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Twój email"
                  className="flex-1 px-4 py-3 rounded-l-xl bg-white/10 border border-cr-orange text-white placeholder-blue-200 focus:outline-none focus:bg-white/20"
                />
                <button className="px-6 py-3 bg-cr-orange hover:bg-orange-600 text-white font-semibold rounded-r-xl transition-colors duration-200">
                  Zapisz
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-blue-100 mb-4">Śledź nas:</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-cr-orange transition-colors duration-200 group"
                    >
                      <IconComponent className="w-6 h-6 text-blue-200 group-hover:text-white" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Details */}
      <div className="border-t border-blue-700">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
            <div>
              <h5 className="font-bold text-white mb-3">Dane rejestrowe:</h5>
              <div className="text-blue-200 space-y-1">
                <p>Centrum Realizacji Sp. z o.o.</p>
                <p>NIP: 521-234-56-78</p>
                <p>REGON: 145678923</p>
                <p>KRS: 0000567890</p>
              </div>
            </div>
            
            <div>
              <h5 className="font-bold text-white mb-3">Kapitał zakładowy:</h5>
              <div className="text-blue-200 space-y-1">
                <p>500.000,00 PLN</p>
                <p>Wpłacony w całości</p>
                <p>Sąd Rejonowy dla Warszawy</p>
                <p>XII Wydział Gospodarczy KRS</p>
              </div>
            </div>
            
            <div>
              <h5 className="font-bold text-white mb-3">Certyfikaty i uprawnienia:</h5>
              <div className="text-blue-200 space-y-1">
                <p>ISO 9001:2015</p>
                <p>ISO 14001:2015</p>
                <p>Uprawnienia energetyczne</p>
                <p>Certyfikat instalatora</p>
              </div>
            </div>
            
            <div>
              <h5 className="font-bold text-white mb-3">Ubezpieczenia:</h5>
              <div className="text-blue-200 space-y-1">
                <p>OC działalności gospodarczej</p>
                <p>Ubezpieczenie montażu</p>
                <p>Gwarancja ubezpieczeniowa</p>
                <p>Suma ubezpieczenia: 2 mln PLN</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-200 text-sm mb-4 md:mb-0">
              © 2024 Centrum Realizacji. Wszystkie prawa zastrzeżone.
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-blue-200 hover:text-cr-orange transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-blue-800 text-center text-xs text-blue-300">
            <p>
              Centrum Realizacji jest członkiem Polskiej Izby Gospodarczej Energii Odnawialnej oraz 
              Stowarzyszenia Branży Fotowoltaicznej Polska PV. Nasza działalność jest objęta 
              nadzorem Urzędu Regulacji Energetyki.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
