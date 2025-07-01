import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { Phone, Mail, MapPin, Clock, Send, Calculator, Home, Building2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
    consent1: false,
    consent2: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Dziękujemy za zapytanie! Nasz specjalista skontaktuje się z Tobą w ciągu 24 godzin.');
    console.log('Form submitted:', formData);
  };

  return (
    <section id="kontakt" className="py-16 lg:py-24 bg-gradient-to-br from-cr-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-cr-navy mb-6">
            Skontaktuj się z 
            <span className="text-cr-orange"> ekspertami</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Otrzymaj bezpłatną wycenę i profesjonalne doradztwo. Nasi specjaliści pomogą Ci wybrać 
            najlepsze rozwiązanie dla Twojego domu lub firmy.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-cr-navy mb-8">Otrzymaj bezpłatną wycenę</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-cr-navy font-semibold mb-2 block">
                      Imię *
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="border-2 border-gray-200 focus:border-cr-orange rounded-xl h-12"
                      placeholder="Twoje imię"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-cr-navy font-semibold mb-2 block">
                      Nazwisko *
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="border-2 border-gray-200 focus:border-cr-orange rounded-xl h-12"
                      placeholder="Twoje nazwisko"
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email" className="text-cr-navy font-semibold mb-2 block">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-2 border-gray-200 focus:border-cr-orange rounded-xl h-12"
                      placeholder="twoj@email.pl"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-cr-navy font-semibold mb-2 block">
                      Telefon *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-2 border-gray-200 focus:border-cr-orange rounded-xl h-12"
                      placeholder="+48 123 456 789"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <Label htmlFor="projectType" className="text-cr-navy font-semibold mb-2 block">
                    Rodzaj projektu *
                  </Label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full border-2 border-gray-200 focus:border-cr-orange rounded-xl h-12 px-4 bg-white text-gray-700"
                  >
                    <option value="">Wybierz rodzaj projektu</option>
                    <option value="fotowoltaika-dom">Fotowoltaika dla domu</option>
                    <option value="pompa-ciepla">Pompa ciepła</option>
                    <option value="energia-dom">Energia dla domu</option>
                    <option value="bank-energii-dom">Bank energii - dom</option>
                    <option value="fotowoltaika-firma">Fotowoltaika dla firmy</option>
                    <option value="energia-firma">Energia dla firmy</option>
                    <option value="gaz-firma">Gaz dla firmy</option>
                    <option value="kompleksowe-firma">Kompleksowa obsługa firmy</option>
                    <option value="inne">Inne / doradztwo</option>
                  </select>
                </div>

                {/* Message Field */}
                <div>
                  <Label htmlFor="message" className="text-cr-navy font-semibold mb-2 block">
                    Dodatkowe informacje
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-2 border-gray-200 focus:border-cr-orange rounded-xl min-h-[120px]"
                    placeholder="Opisz swoje potrzeby, parametry budynku, obecne zużycie energii..."
                  />
                </div>

                {/* Consent Checkboxes */}
                <div className="space-y-4 pt-6 border-t border-gray-200">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="consent1"
                      checked={formData.consent1}
                      onCheckedChange={(checked) => handleCheckboxChange('consent1', checked as boolean)}
                      className="mt-1"
                    />
                    <Label htmlFor="consent1" className="text-sm text-gray-700 leading-relaxed">
                      Wyrażam zgodę na przetwarzanie moich danych osobowych przez Centrum Realizacji 
                      w celu przygotowania oferty zgodnie z polityką prywatności. *
                    </Label>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="consent2"
                      checked={formData.consent2}
                      onCheckedChange={(checked) => handleCheckboxChange('consent2', checked as boolean)}
                      className="mt-1"
                    />
                    <Label htmlFor="consent2" className="text-sm text-gray-700 leading-relaxed">
                      Wyrażam zgodę na otrzymywanie informacji marketingowych dotyczących rozwiązań energetycznych.
                    </Label>
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-cr-orange hover:bg-orange-600 text-white font-bold py-4 rounded-xl text-lg"
                  disabled={!formData.consent1}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Wyślij zapytanie - bezpłatnie
                </Button>

                <p className="text-center text-sm text-gray-500">
                  📞 Oddzwaniamy w ciągu 24 godzin • 📋 Wycena całkowicie bezpłatna
                </p>
              </form>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-cr-navy mb-6">Kontakt bezpośredni</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-cr-orange rounded-xl p-3 mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-cr-navy">Telefon</h4>
                    <p className="text-lg font-semibold text-cr-orange">+48 800 100 200</p>
                    <p className="text-sm text-gray-600">Pon-Pt: 8:00-18:00, Sob: 9:00-15:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cr-navy rounded-xl p-3 mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-cr-navy">Email</h4>
                    <p className="text-cr-orange">biuro@centrum-realizacji.pl</p>
                    <p className="text-sm text-gray-600">Odpowiadamy w 24h</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-600 rounded-xl p-3 mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-cr-navy">Siedziba główna</h4>
                    <p className="text-gray-700">ul. Energetyczna 25<br />00-950 Warszawa</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-600 rounded-xl p-3 mr-4">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-cr-navy">Godziny pracy</h4>
                    <p className="text-gray-700">
                      Pon-Pt: 8:00-18:00<br />
                      Sob: 9:00-15:00<br />
                      <span className="text-cr-orange font-semibold">Awarie 24/7</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Services */}
            <div className="bg-gradient-to-br from-cr-orange to-yellow-500 rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Popularne usługi</h3>
              <div className="space-y-3">
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-xl p-3">
                  <Home className="w-5 h-5 mr-3" />
                  <span className="text-sm font-semibold">Fotowoltaika dla domu</span>
                </div>
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-xl p-3">
                  <Building2 className="w-5 h-5 mr-3" />
                  <span className="text-sm font-semibold">Energia dla firmy</span>
                </div>
                <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-xl p-3">
                  <Calculator className="w-5 h-5 mr-3" />
                  <span className="text-sm font-semibold">Pompy ciepła</span>
                </div>
              </div>
            </div>

            {/* Guarantees */}
            <div className="bg-cr-navy rounded-3xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Nasze gwarancje</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-cr-orange rounded-full mr-3"></div>
                  <span>Bezpłatna wycena i doradztwo</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-cr-orange rounded-full mr-3"></div>
                  <span>25 lat gwarancji na panele</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-cr-orange rounded-full mr-3"></div>
                  <span>Wsparcie techniczne 24/7</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-cr-orange rounded-full mr-3"></div>
                  <span>Zwrot inwestycji w 6-8 lat</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-cr-orange rounded-full mr-3"></div>
                  <span>Finansowanie bez wkładu własnego</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
