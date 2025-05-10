import { Button } from "@/components/ui/button"

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20 px-4 bg-gradient-to-b from-mealmate-light-green to-white">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="animate-fade-in">
          <h1 className="font-bold text-5xl lg:text-6xl text-mealmate-black leading-tight mb-4">
            Healthy & <br />
            <span className="text-mealmate-green">Sustainable</span> Diet
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-lg">
            MealMate è la tua alleata smart in cucina: un'app intelligente che
            tiene sotto controllo la tua dispensa, monitora le date di scadenza
            e ti suggerisce ricette personalizzate in base agli ingredienti che
            hai già.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-mealmate-green hover:bg-mealmate-dark-green text-white font-semibold px-6 py-6 rounded-lg transition-all duration-300">
              Scopri di più
            </Button>
            <Button
              variant="outline"
              className="border-mealmate-green text-mealmate-green hover:bg-mealmate-light-green px-6 py-6 rounded-lg transition-all duration-300"
            >
              Contattaci
            </Button>
          </div>
        </div>

        <div className="md:translate-x-12 animate-scale-in">
          <div className="rounded-lg overflow-hidden">
            <img
              src="/mealmate-it/lovable-uploads/76414ac0-c1a6-4228-aa54-85f8d5fafe71.png"
              alt="MealMate Robot Chef"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
