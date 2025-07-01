import React from 'react';
import { Star, Quote, Home, Building2, Award, ThumbsUp } from 'lucide-react';

export const ReferencesSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Dzięki Centrum Realizacji nasze rachunki za prąd spadły o 80%. Inwestycja w fotowoltaikę to najlepsza decyzja, jaką podjęliśmy w ostatnich latach. Profesjonalny montaż i pełne wsparcie.",
      author: "Maria i Janusz Kowalscy",
      location: "Warszawa",
      project: "Instalacja fotowoltaiczna 6,5 kW",
      rating: 5,
      savings: "80%",
      type: "dom"
    },
    {
      quote: "Od 3 lat współpracujemy z Centrum Realizacji w zakresie dostaw energii dla naszej firmy. Oszczędności są znaczące, a obsługa klienta na najwyższym poziomie. Polecamy każdemu przedsiębiorcy.",
      author: "Tomasz Nowak",
      location: "Kraków", 
      project: "Energia + fotowoltaika 50 kW",
      rating: 5,
      savings: "45%",
      type: "firma"
    },
    {
      quote: "Pompa ciepła działająca od 2 lat bez żadnych problemów. Ciepło w domu przez cały rok, a rachunki za ogrzewanie zmniejszyły się o połowę. Montaż szybki i profesjonalny, wszystko zgodnie z terminem.",
      author: "Anna Wiśniewska",
      location: "Gdańsk",
      project: "Pompa ciepła 12 kW + fotowoltaika",
      rating: 5,
      savings: "65%",
      type: "dom"
    },
    {
      quote: "Jako firma produkcyjna potrzebowaliśmy niezawodnego dostawcy energii. Centrum Realizacji nie tylko dostarczyło konkurencyjne ceny, ale też zaproponowało rozwiązania oszczędnościowe. Bardzo profesjonalne podejście.",
      author: "Michał Zieliński",
      location: "Wrocław",
      project: "Kompleksowa obsługa energetyczna",
      rating: 5,
      savings: "35%",
      type: "firma"
    }
  ];

  const clientLogos = [
    { name: "Kowalski Sp. z o.o.", industry: "Produkcja", size: "Średnia" },
    { name: "GreenTech", industry: "Technologie", size: "Duża" },
    { name: "FarmaMed", industry: "Farmaceutyka", size: "Duża" },
    { name: "AutoParts Pro", industry: "Motoryzacja", size: "Średnia" },
    { name: "BuildExpert", industry: "Budownictwo", size: "Duża" },
    { name: "RetailMax", industry: "Handel", size: "Średnia" },
    { name: "EcoHome", industry: "Mieszkalnictwo", size: "Mała" },
    { name: "TechCorp", industry: "IT", size: "Duża" },
    { name: "AgriPol", industry: "Rolnictwo", size: "Średnia" },
    { name: "HealthCare+", industry: "Medycyna", size: "Duża" }
  ];

  const caseStudies = [
    {
      title: "Dom rodzinny w Warszawie",
      description: "Kompleksowa instalacja fotowoltaiczna + pompa ciepła",
      investment: "85 000 zł",
      savings: "2 800 zł/rok",
      payback: "8 lat",
      icon: Home,
      details: ["Panele 6,5 kW", "Pompa ciepła 10 kW", "Magazyn energii 10 kWh"]
    },
    {
      title: "Zakład produkcyjny Kraków",
      description: "Instalacja fotowoltaiczna + optymalizacja energii",
      investment: "450 000 zł",
      savings: "95 000 zł/rok",
      payback: "5 lat",
      icon: Building2,
      details: ["Panele 150 kW", "System monitoringu", "Optymalizacja taryf"]
    },
    {
      title: "Centrum handlowe Gdańsk",
      description: "Kompleksowa modernizacja energetyczna",
      investment: "1 200 000 zł",
      savings: "240 000 zł/rok",
      payback: "5 lat",
      icon: Building2,
      details: ["Panele 300 kW", "Magazyny energii", "Smart grid"]
    }
  ];

  const getCompanyColor = (industry: string) => {
    const colors = {
      "Produkcja": "bg-blue-500",
      "Technologie": "bg-green-500", 
      "Farmaceutyka": "bg-purple-500",
      "Motoryzacja": "bg-red-500",
      "Budownictwo": "bg-yellow-500",
      "Handel": "bg-indigo-500",
      "Mieszkalnictwo": "bg-pink-500",
      "IT": "bg-orange-500",
      "Rolnictwo": "bg-teal-500",
      "Medycyna": "bg-cyan-500"
    };
    return colors[industry as keyof typeof colors] || "bg-gray-500";
  };

  return (
    <section id="referencje" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-cr-navy mb-6">
            Nasze 
            <span className="text-cr-orange"> referencje</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Poznaj opinie naszych klientów i dowiedz się, dlaczego od 20 lat jesteśmy 
            jednym z najchętniej wybieranych partnerów w dziedzinie energetyki.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-cr-navy mb-12">
            Co mówią o nas <span className="text-cr-orange">klienci</span>
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                      testimonial.type === 'dom' ? 'bg-green-100' : 'bg-blue-100'
                    }`}>
                      {testimonial.type === 'dom' ? 
                        <Home className="w-6 h-6 text-green-600" /> : 
                        <Building2 className="w-6 h-6 text-blue-600" />
                      }
                    </div>
                    <div>
                      <div className="font-bold text-cr-navy">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.location}</div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cr-orange">{testimonial.savings}</div>
                    <div className="text-sm text-gray-600">oszczędności</div>
                  </div>
                </div>

                {/* Quote */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-cr-orange mb-3" />
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Rating and Project */}
                <div className="flex items-center justify-between">
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.project}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-cr-navy mb-12">
            Zaufali nam <span className="text-cr-orange">klienci</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {clientLogos.map((client, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 text-center group hover:scale-105"
              >
                <div className={`${getCompanyColor(client.industry)} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-bold text-lg">
                    {client.name.substring(0, 2).toUpperCase()}
                  </span>
                </div>
                
                <h4 className="font-semibold text-cr-navy text-sm mb-1">
                  {client.name}
                </h4>
                
                <div className="text-xs text-gray-600">
                  {client.industry}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-cr-navy mb-12">
            Przykłady <span className="text-cr-orange">realizacji</span>
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => {
              const IconComponent = study.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-cr-orange rounded-2xl flex items-center justify-center mr-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-cr-navy">{study.title}</h4>
                      <p className="text-gray-600 text-sm">{study.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold text-cr-navy">{study.investment}</div>
                      <div className="text-xs text-gray-600">inwestycja</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{study.savings}</div>
                      <div className="text-xs text-gray-600">oszczędności/rok</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-cr-orange">{study.payback}</div>
                      <div className="text-xs text-gray-600">zwrot</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {study.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-cr-orange rounded-full mr-3"></div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust Section */}
        <div className="bg-gradient-to-r from-cr-navy to-blue-800 rounded-3xl p-8 lg:p-16 text-center">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Award className="w-8 h-8 text-cr-orange mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-blue-200 text-sm">zadowolonych klientów</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <ThumbsUp className="w-8 h-8 text-cr-orange mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">5000+</div>
              <div className="text-blue-200 text-sm">realizacji</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Star className="w-8 h-8 text-cr-orange mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">4.9/5</div>
              <div className="text-blue-200 text-sm">średnia ocena</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <Home className="w-8 h-8 text-cr-orange mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">300+</div>
              <div className="text-blue-200 text-sm">miejscowości</div>
            </div>
          </div>
          
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Dołącz do grona zadowolonych klientów
          </h3>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Każdego dnia pomagamy kolejnym rodzinom i firmom osiągnąć niezależność energetyczną. 
            Twoja kolej na oszczędności!
          </p>
        </div>
      </div>
    </section>
  );
};
