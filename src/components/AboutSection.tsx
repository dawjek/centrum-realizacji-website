import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Award, Users, MapPin, Clock, Shield, Star, TrendingUp } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const yearlyData = [
    { year: '2020', projects: 420, savings: 850 },
    { year: '2021', projects: 680, savings: 1200 },
    { year: '2022', projects: 920, savings: 1650 },
    { year: '2023', projects: 1240, savings: 2100 },
    { year: '2024', projects: 1580, savings: 2800 },
  ];

  const achievements = [
    {
      icon: Award,
      number: "20+",
      label: "lat doświadczenia",
      color: "text-cr-orange",
      bgColor: "bg-orange-50"
    },
    {
      icon: Users,
      number: "5000+",
      label: "zadowolonych klientów",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: MapPin,
      number: "300+",
      label: "miejscowości w Polsce",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "wsparcie techniczne",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Shield,
      number: "100%",
      label: "gwarancja jakości",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "ocena klientów",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    }
  ];

  const values = [
    {
      title: "Bezpieczeństwo",
      description: "Wszystkie nasze rozwiązania są certyfikowane i spełniają najwyższe standardy bezpieczeństwa. Twoja rodzina i Twój dom są w dobrych rękach.",
      icon: Shield
    },
    {
      title: "Doświadczenie",
      description: "20 lat na rynku energetycznym oznacza tysiące zadowolonych klientów i setki pomyślnie zrealizowanych projektów w całej Polsce.",
      icon: Award
    },
    {
      title: "Profesjonalizm",
      description: "Nasz zespół to wykwalifikowani specjaliści z wieloletnim doświadczeniem w branży energetycznej i odnawialnych źródłach energii.",
      icon: Users
    }
  ];

  return (
    <section id="o-nas" className="py-16 lg:py-24 bg-cr-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-cr-navy mb-6">
            Dlaczego 
            <span className="text-cr-orange"> nam zaufać?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Od ponad 20 lat pomagamy polskim rodzinom i firmom obniżać koszty energii. 
            Nasze doświadczenie to Twoje bezpieczeństwo i gwarancja oszczędności.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-3xl font-bold text-cr-navy mb-6">Nasza historia</h3>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong className="text-cr-orange">Centrum Realizacji</strong> powstało w 2004 roku z misją 
                demokratyzacji dostępu do nowoczesnych rozwiązań energetycznych. Zaczynaliśmy jako mała firma 
                rodzinna, a dziś jesteśmy jednym z liderów rynku energii odnawialnej w Polsce.
              </p>
              
              <p>
                Przez te wszystkie lata nasze wartości pozostały niezmienne: <strong className="text-cr-navy">
                bezpieczeństwo, jakość i uczciwość</strong> w każdym projekcie. Rozumiemy, że inwestycja w 
                rozwiązania energetyczne to ważna decyzja dla każdej rodziny i firmy.
              </p>
              
              <p>
                Dlatego oferujemy nie tylko najnowocześniejsze technologie, ale przede wszystkim 
                <strong className="text-cr-orange"> pełne wsparcie i gwarancję spokoju</strong> na lata. 
                Nasze doświadczenie to Twoja pewność, że inwestycja się zwróci.
              </p>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-cr-orange/10 to-yellow-50 rounded-2xl border-l-4 border-cr-orange">
              <h4 className="font-bold text-cr-navy mb-2 text-xl">Nasza misja</h4>
              <p className="text-gray-700 leading-relaxed">
                Pomagamy polskim rodzinom i przedsiębiorstwom osiągać niezależność energetyczną poprzez 
                dostarczanie najwyższej jakości rozwiązań z pełnym wsparciem technicznym i finansowym.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-cr-navy mb-6">Wzrost liczby realizacji</h3>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={yearlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value, name) => [
                      value, 
                      name === 'projects' ? 'Projekty' : 'Oszczędności (tys. zł)'
                    ]}
                  />
                  <Bar dataKey="projects" fill="#ed740a" name="projects" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-6 p-6 bg-cr-navy rounded-2xl text-white">
              <h4 className="font-bold text-lg mb-3 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-cr-orange" />
                Łączne oszczędności naszych klientów
              </h4>
              <div className="text-3xl font-bold text-cr-orange mb-2">12,6 mln zł</div>
              <p className="text-blue-200 text-sm">
                Tyle zaoszczędzili nasi klienci na rachunkach za energię w ciągu ostatnich 5 lat
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-20">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div 
                key={index} 
                className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-16 h-16 ${achievement.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <IconComponent className={`w-8 h-8 ${achievement.color}`} />
                </div>
                <div className={`text-3xl font-bold ${achievement.color} mb-2`}>
                  {achievement.number}
                </div>
                <div className="text-gray-600 text-sm font-medium">
                  {achievement.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-cr-navy mb-12">
            Nasze <span className="text-cr-orange">wartości</span>
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-cr-orange rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className="text-2xl font-bold text-cr-navy mb-4">
                    {value.title}
                  </h4>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Trust Section */}
        <div className="bg-gradient-to-r from-cr-navy to-blue-800 rounded-3xl p-8 lg:p-16 text-center">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Zaufały nam tysiące polskich rodzin
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Każdego dnia pomagamy kolejnym klientom obniżać rachunki za energię i budować 
            niezależność energetyczną. Dołącz do grona zadowolonych klientów.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl font-bold text-cr-orange mb-2">98%</div>
              <div className="text-white">klientów poleca nas</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl font-bold text-cr-orange mb-2">15 lat</div>
              <div className="text-white">średni zwrot inwestycji</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl font-bold text-cr-orange mb-2">0 zł</div>
              <div className="text-white">koszt doradztwa</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
