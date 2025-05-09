
import { CircleUser, Users, ChefHat } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TargetSection = () => {
  return (
    <section id="target" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-bold text-mealmate-black mb-4">Target di riferimento</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            MealMate è pensato per diverse categorie di persone che condividono l'interesse 
            per il cibo, la sostenibilità e l'organizzazione.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="animate-fade-in">
            <h3 className="font-bold text-mealmate-black mb-6">Fascia di età dei nostri utenti</h3>
            <div className="bg-mealmate-card-bg rounded-lg p-6 shadow-lg">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="relative pt-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-mealmate-green">
                          13-29 Anni
                        </span>
                      </div>
                      <div>
                        <span className="text-xs font-semibold inline-block text-mealmate-green">
                          25%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-mealmate-light-green">
                      <div style={{ width: "25%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-mealmate-green"></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-mealmate-green">
                          30-60 Anni
                        </span>
                      </div>
                      <div>
                        <span className="text-xs font-semibold inline-block text-mealmate-green">
                          65%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-mealmate-light-green">
                      <div style={{ width: "65%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-mealmate-green"></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block text-mealmate-green">
                          61+ Anni
                        </span>
                      </div>
                      <div>
                        <span className="text-xs font-semibold inline-block text-mealmate-green">
                          10%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-mealmate-light-green">
                      <div style={{ width: "10%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-mealmate-green"></div>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="relative h-52 w-52 mx-auto">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-32 w-32 rounded-full bg-gray-200"></div>
                    </div>
                    
                    <div className="absolute inset-0">
                      <svg width="100%" height="100%" viewBox="0 0 120 120">
                        <circle cx="60" cy="60" r="54" fill="none" stroke="#e4e4e7" strokeWidth="12" />
                        <circle 
                          cx="60" 
                          cy="60" 
                          r="54" 
                          fill="none" 
                          stroke="#17C964" 
                          strokeWidth="12" 
                          strokeDasharray="339.3" 
                          strokeDashoffset={339.3 * 0.35} 
                          transform="rotate(-90 60 60)" 
                        />
                        <circle 
                          cx="60" 
                          cy="60" 
                          r="54" 
                          fill="none" 
                          stroke="#10b981" 
                          strokeWidth="12" 
                          strokeDasharray="339.3" 
                          strokeDashoffset={339.3 * 0.9} 
                          transform="rotate(-90 60 60)" 
                        />
                      </svg>
                    </div>
                    
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-4xl font-bold text-mealmate-black">65%</span>
                      <span className="text-sm text-gray-500">30-60 Anni</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <h3 className="font-bold text-mealmate-black mb-2">Clientela target</h3>
            
            <TargetGroupCard 
              icon={<CircleUser size={48} className="text-mealmate-green" />}
              title="Persone eco-sensibili"
              description="Ci rivolgiamo principalmente a voi che avete il nostro pianeta nel cuore. Grazie al nostro sistema di gestione delle scadenze non sprecherete più cibo e denaro, riducendo l'impatto ambientale."
              delay="100"
              iconBg="bg-mealmate-light-green"
            />
            
            <TargetGroupCard 
              icon={<ChefHat size={48} className="text-mealmate-green" />}
              title="Persone che amano cucinare"
              description="Se sei in cerca di una nuova passione, o ami già cucinare, MealMate potrebbe portarti sulla strada giusta, offrendoti una vasta gamma di ricette pronte a soddisfare i tuoi bisogni e quelli di chi ami di più."
              delay="200"
              iconBg="bg-mealmate-light-green"
            />
            
            <TargetGroupCard 
              icon={<Users size={48} className="text-mealmate-green" />}
              title="Persone organizzate"
              description="Ci rivolgiamo in particolare a chi ha bisogno di tenere sotto controllo la dispensa, con MealMate sarà un gioco da ragazzi grazie al sistema user-friendly di gestione degli ingredienti."
              delay="300"
              iconBg="bg-mealmate-light-green"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
            <h3 className="font-bold text-mealmate-black mb-6">Interesse nell'utilizzo</h3>
            <div className="bg-mealmate-card-bg rounded-lg p-6 shadow-lg">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative h-52 w-52">
                  <svg viewBox="0 0 36 36" className="h-52 w-52">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#e4e4e7"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#17C964"
                      strokeWidth="3"
                      strokeDasharray="100, 100"
                      strokeDashoffset="40"
                    />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="text-4xl font-bold text-mealmate-black">60%</div>
                    <div className="text-sm text-gray-600">Favorevoli</div>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-gray-700 mb-4">
                    Il 60% degli utenti intervistati si è dichiarato propenso a scaricare 
                    la nostra applicazione, dimostrando un forte interesse per una soluzione 
                    che aiuti nella gestione dei pasti e nella riduzione degli sprechi alimentari.
                  </p>
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-mealmate-green">Utilizzerebbero</span>
                    <span className="text-gray-500">Non utilizzerebbero</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "500ms" }}>
            <h3 className="font-bold text-mealmate-black mb-6">Clientela interessata</h3>
            <div className="bg-mealmate-card-bg rounded-lg p-6 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <img 
                  src="/lovable-uploads/ae7023f2-d3c8-47c1-b774-f5a9c7862389.png" 
                  alt="Target Audience MealMate"
                  className="col-span-1 md:col-span-3 w-full rounded-lg shadow-md"
                />
              </div>
              <div>
                <p className="text-gray-700 mb-4">
                  La nostra app attira in particolare tre categorie di utenti:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-mealmate-green mr-2"></span>
                    <span className="text-gray-700">Food Sustainability Seekers - 35%</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-mealmate-green mr-2"></span>
                    <span className="text-gray-700">Healthy Lifestyle Followers - 25%</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-mealmate-green mr-2"></span>
                    <span className="text-gray-700">Cooking Enthusiasts - 30%</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-gray-400 mr-2"></span>
                    <span className="text-gray-700">Others - 10%</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TargetGroupCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
  iconBg: string;
}

const TargetGroupCard = ({ icon, title, description, delay, iconBg }: TargetGroupCardProps) => {
  return (
    <Card className="bg-white shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
      <CardContent className="p-6">
        <div className="flex gap-4 items-start">
          <div className={`p-3 rounded-full ${iconBg}`}>
            {icon}
          </div>
          <div>
            <h4 className="text-lg font-semibold text-mealmate-black mb-2">{title}</h4>
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TargetSection;
