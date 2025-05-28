
import { BarChart2, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

const MarketSection = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="market" className="section-padding bg-mealmate-light-green relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div 
          className="text-center mb-12"
          style={{ transform: `translateY(${scrollY * 0.02}px)` }}
        >
          <h2 className="font-bold text-mealmate-black mb-4">Analisi di mercato</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            La nostra startup primeggia sul mercato perché ricca di funzionalità assenti nei nostri competitor.
          </p>
        </div>

        <div 
          className="grid md:grid-cols-2 gap-8"
          style={{ transform: `translateY(${scrollY * -0.04}px)` }}
        >
          <div style={{ transform: `translateY(${scrollY * 0.03}px)` }}>
            <h3 className="font-bold text-mealmate-black mb-6 flex items-center">
              <BarChart2 className="mr-2 h-6 w-6 text-mealmate-green" />
              Il mondo secondo la FAO
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <StatCard
                value="1200 MLD"
                label="Euro annui, persi con lo spreco alimentare"
                colorClass="bg-gradient-to-br from-mealmate-green to-mealmate-dark-green"
                delay="0"
                scrollY={scrollY}
                parallaxSpeed={0.01}
              />
              <StatCard
                value="3.3 Gton"
                label="di CO2 prodotta annualmente per lo spreco alimentare"
                colorClass="bg-gradient-to-br from-mealmate-green to-mealmate-dark-green"
                delay="100"
                scrollY={scrollY}
                parallaxSpeed={-0.02}
              />
              <StatCard
                value="600 MLD"
                label="Buttati a causa delle famiglie ogni anno"
                colorClass="bg-gradient-to-br from-mealmate-green to-mealmate-dark-green"
                delay="200"
                scrollY={scrollY}
                parallaxSpeed={0.025}
              />
              <StatCard
                value="52%"
                label="Spreco generato dalle famiglie rispetto a quello totale"
                colorClass="bg-gradient-to-br from-mealmate-green to-mealmate-dark-green"
                delay="300"
                scrollY={scrollY}
                parallaxSpeed={-0.015}
              />
            </div>
          </div>

          <div style={{ transform: `translateY(${scrollY * -0.02}px)` }}>
            <h3 className="font-bold text-mealmate-black mb-6 flex items-center">
              <TrendingUp className="mr-2 h-6 w-6 text-mealmate-green" />
              La nostra app nel mercato
            </h3>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in h-full">
              <CardContent className="p-6">
                <p className="text-gray-700">
                  La nostra app si ritaglia una fetta di mercato tutta sua, 
                  in quanto riesce a combinare ecosostenibilità, gestione di ricette 
                  e dispense, automatizzata.
                </p>
                
                <div className="mt-6">
                  <h4 className="font-semibold text-mealmate-green mb-2">Funzionalità uniche:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-mealmate-green text-white flex items-center justify-center mr-2">✓</div>
                      <span>Tracking scadenze</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-mealmate-green text-white flex items-center justify-center mr-2">✓</div>
                      <span>Fatica minima</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-mealmate-green text-white flex items-center justify-center mr-2">✓</div>
                      <span>Dispensa autogestita</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-6 w-6 rounded-full bg-mealmate-green text-white flex items-center justify-center mr-2">✓</div>
                      <span>Piatti originali</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  value: string;
  label: string;
  colorClass: string;
  delay: string;
  scrollY: number;
  parallaxSpeed: number;
}

const StatCard = ({ value, label, colorClass, delay, scrollY, parallaxSpeed }: StatCardProps) => {
  return (
    <div 
      className={`rounded-lg p-4 text-white shadow-lg animate-fade-in ${colorClass}`} 
      style={{ 
        animationDelay: `${delay}ms`,
        transform: `translateY(${scrollY * parallaxSpeed}px)`
      }}
    >
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-sm opacity-90">{label}</div>
    </div>
  );
};

export default MarketSection;
