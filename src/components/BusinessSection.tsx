
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleUser, Users, TrendingUp } from "lucide-react";

const BusinessSection = () => {
  return (
    <section id="business" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-bold text-mealmate-black mb-4">Modello di Business</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            MealMate opera su un modello di business duplice, servendo sia consumatori finali 
            che partner commerciali.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
            <CardHeader>
              <div className="mb-4">
                <CircleUser className="h-12 w-12 text-mealmate-green" />
              </div>
              <CardTitle className="text-xl font-bold text-mealmate-black">B2C</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                MealMate nasce inizialmente come applicazione B2C, con abbonamento premium 
                per funzionalità aggiuntive.
              </p>
              
              <div className="bg-mealmate-light-green rounded-lg p-4">
                <h4 className="font-medium text-mealmate-green mb-2">Vantaggi per gli utenti:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-mealmate-green text-white flex items-center justify-center mr-2 mt-0.5 text-xs">✓</div>
                    <span>Accesso gratuito alle funzionalità base</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-mealmate-green text-white flex items-center justify-center mr-2 mt-0.5 text-xs">✓</div>
                    <span>Abbonamento premium per funzionalità avanzate</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-mealmate-green text-white flex items-center justify-center mr-2 mt-0.5 text-xs">✓</div>
                    <span>Risparmio di tempo nella gestione della dispensa</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-mealmate-green text-white flex items-center justify-center mr-2 mt-0.5 text-xs">✓</div>
                    <span>Riduzione degli sprechi alimentari</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: "100ms" }}>
            <CardHeader>
              <div className="mb-4">
                <Users className="h-12 w-12 text-mealmate-green" />
              </div>
              <CardTitle className="text-xl font-bold text-mealmate-black">B2B</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                Ci siamo resi conto della possibilità di coinvolgere altri business nella nostra 
                azienda. Sfruttando l'affiliate marketing, gli sponsor e le partnership con 
                supermercati e cuochi abbiamo reso MealMate anche B2B.
              </p>
              
              <div className="bg-mealmate-light-green rounded-lg p-4">
                <h4 className="font-medium text-mealmate-green mb-2">Opportunità per i partner:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-mealmate-green text-white flex items-center justify-center mr-2 mt-0.5 text-xs">✓</div>
                    <span>Visibilità nelle ricette suggerite</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-mealmate-green text-white flex items-center justify-center mr-2 mt-0.5 text-xs">✓</div>
                    <span>Pubblicità mirata a un pubblico interessato</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-mealmate-green text-white flex items-center justify-center mr-2 mt-0.5 text-xs">✓</div>
                    <span>Accesso ai dati aggregati sui comportamenti di consumo</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-mealmate-black mb-6 flex items-center">
              <TrendingUp className="mr-2 h-6 w-6 text-mealmate-green" />
              Proiezione finanziaria
            </h3>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: "200ms" }}>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-6">
                  MealMate si prepara a una crescita sostenibile e diversificata. Le nostre 
                  entrate si baseranno su tre canali principali: abbonamenti premium, 
                  crowdfunding e collaborazioni strategiche.
                </p>
                
                <div className="relative h-64 w-full mb-6">
                  <div className="absolute bottom-0 left-0 w-full h-full flex items-end">
                    <div className="h-20 bg-mealmate-green/20 w-1/4 flex items-center justify-center">
                      <span className="font-medium text-xs rotate-270">2025</span>
                    </div>
                    <div className="h-28 bg-mealmate-green/40 w-1/4 flex items-center justify-center">
                      <span className="font-medium text-xs rotate-270">2026</span>
                    </div>
                    <div className="h-40 bg-mealmate-green/60 w-1/4 flex items-center justify-center">
                      <span className="font-medium text-xs rotate-270">2027</span>
                    </div>
                    <div className="h-52 bg-mealmate-green/80 w-1/4 flex items-center justify-center">
                      <span className="font-medium text-xs rotate-270">2028</span>
                    </div>
                  </div>
                  
                  <div className="absolute top-0 left-0 w-full h-8 flex items-center">
                    <span className="text-center w-full font-medium text-sm text-gray-700">Crescita delle Entrate</span>
                  </div>
                </div>
                
                <h4 className="font-semibold text-mealmate-green mb-2">Previsioni di crescita</h4>
                <p className="text-gray-700">
                  Entro il 2028 prevediamo:
                </p>
                <ul className="space-y-1 text-gray-700 mt-2">
                  <li className="flex items-start">
                    <span className="text-mealmate-green mr-2">•</span>
                    <span>Oltre 13.000€ da abbonamenti premium</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mealmate-green mr-2">•</span>
                    <span>Quasi 11.000€ da collaborazioni</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-mealmate-green mr-2">•</span>
                    <span>Una crescita graduale del crowdfunding</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="font-bold text-mealmate-black mb-6">Struttura ricavi e costi</h3>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="font-semibold text-mealmate-green mb-4">Revenue Streams</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-mealmate-green mr-2"></div>
                        <span>Premium features</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-mealmate-green mr-2"></div>
                        <span>Crowd funding</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-mealmate-green mr-2"></div>
                        <span>Sponsor</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-mealmate-green mr-2"></div>
                        <span>Affiliate advertisement</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-mealmate-green mb-4">Costi</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-gray-500 mr-2"></div>
                        <span>Partner</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-gray-500 mr-2"></div>
                        <span>Manutenzione</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-gray-500 mr-2"></div>
                        <span>Marketing</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-gray-500 mr-2"></div>
                        <span>Sviluppo</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-gray-500 mr-2"></div>
                        <span>Distribuzione</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-mealmate-light-green rounded-lg p-4">
                  <h4 className="font-medium text-mealmate-green mb-2">Confronto costi/ricavi</h4>
                  <p className="text-gray-700">
                    Le entrate superano i costi già a partire dal 2026, anno in cui stimiamo di 
                    raggiungere il nostro break-even-point, confermando la redditività e la 
                    solidità del nostro modello di business.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
