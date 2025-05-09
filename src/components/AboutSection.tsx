
import MealMateLogo from "./MealMateLogo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-bold text-mealmate-black mb-2">La nostra azienda</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Mealmate è una startup finalizzata a ridurre lo spreco alimentare e aiutare le 
            persone a tenere traccia di piatti, ingredienti e scadenze della loro dispensa in cucina. 
            Un vero e proprio assistente culinario!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="feature-card border-t-4 border-t-mealmate-green animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-mealmate-black flex items-center gap-2">
                <MealMateLogo size={30} />
                Vision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Vediamo nel futuro un mondo eco-friendly, in cui le persone possano essere 
                consapevoli dell'impatto che il loro consumo di cibo e stile di vita hanno 
                sulla sostenibilità ambientale.
              </p>
            </CardContent>
          </Card>

          <Card className="feature-card border-t-4 border-t-mealmate-green animate-fade-in delay-100">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-mealmate-black flex items-center gap-2">
                <MealMateLogo size={30} />
                Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Creare una soluzione valida a combattere gli sprechi di cibo e di tempo, 
                coinvolgendo le persone e sensibilizzandole per un obiettivo comune, 
                quale l'ecosostenibilità.
              </p>
            </CardContent>
          </Card>

          <Card className="feature-card border-t-4 border-t-mealmate-green animate-fade-in delay-200">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-mealmate-black flex items-center gap-2">
                <MealMateLogo size={30} />
                Valori fondamentali
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-mealmate-green text-white flex items-center justify-center mr-2 mt-0.5">P</div>
                  <div>
                    <span className="font-medium">Partnership</span> - Creiamo una rete di contatti uniti da obiettivi comuni.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-mealmate-green text-white flex items-center justify-center mr-2 mt-0.5">A</div>
                  <div>
                    <span className="font-medium">Ambiente</span> - Riduciamo lo spreco di cibo e il tempo sprecato in cucina.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-mealmate-green text-white flex items-center justify-center mr-2 mt-0.5">F</div>
                  <div>
                    <span className="font-medium">Feedback</span> - L'opinione degli utenti guida lo sviluppo delle nostre funzionalità.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
