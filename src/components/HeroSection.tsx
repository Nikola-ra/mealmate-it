
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToFooter = () => {
    const footer = document.getElementById('contact');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20 px-4 bg-gradient-to-b from-mealmate-light-green to-white relative overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div 
          className="animate-fade-in"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <h1 
            className="font-bold text-5xl lg:text-6xl text-mealmate-black leading-tight mb-4"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            Healthy & <br />
            <span className="text-mealmate-green">Sustainable</span> Diet
          </h1>
          <p 
            className="text-lg text-gray-700 mb-8 max-w-lg"
            style={{ transform: `translateY(${scrollY * 0.15}px)` }}
          >
            MealMate è la tua alleata smart in cucina: un'app intelligente che
            tiene sotto controllo la tua dispensa, monitora le date di scadenza
            e ti suggerisce ricette personalizzate in base agli ingredienti che
            hai già.
          </p>
          <div 
            className="flex flex-col sm:flex-row gap-4"
            style={{ transform: `translateY(${scrollY * 0.12}px)` }}
          >
            <Link to="/download">
              <Button className="bg-mealmate-green hover:bg-mealmate-dark-green text-white font-semibold px-6 py-6 rounded-lg transition-all duration-300 hover:scale-105">
                Installa la beta
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-mealmate-green text-mealmate-green hover:bg-mealmate-light-green px-6 py-6 rounded-lg transition-all duration-300 hover:scale-105"
              onClick={scrollToFooter}
            >
              Contattaci
            </Button>
          </div>
        </div>

        <div 
          className="md:translate-x-12 animate-scale-in"
          style={{ transform: `translateX(48px) translateY(${scrollY * -0.25}px)` }}
        >
          <div className="rounded-lg">
            <img
              src="/mealmate-it/lovable-uploads/76414ac0-c1a6-4228-aa54-85f8d5fafe71.png"
              alt="MealMate Robot Chef"
              className="w-full h-auto"
              style={{ transform: `translateY(${scrollY * -0.2}px)` }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
