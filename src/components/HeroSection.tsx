
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { Apple, Carrot, Cookie } from "lucide-react"

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
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating food icons with parallax effect */}
        <div 
          className="absolute top-20 left-10 text-mealmate-green opacity-20"
          style={{ transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)` }}
        >
          <Apple size={40} />
        </div>
        <div 
          className="absolute top-32 right-20 text-orange-400 opacity-25"
          style={{ transform: `translateY(${scrollY * 0.5}px) rotate(${-scrollY * 0.15}deg)` }}
        >
          <Carrot size={35} />
        </div>
        <div 
          className="absolute top-40 left-1/4 text-amber-600 opacity-20"
          style={{ transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.08}deg)` }}
        >
          <Cookie size={30} />
        </div>
        <div 
          className="absolute top-60 right-1/3 text-red-400 opacity-25"
          style={{ transform: `translateY(${scrollY * 0.4}px) rotate(${-scrollY * 0.12}deg)` }}
        >
          <Apple size={45} />
        </div>
        <div 
          className="absolute top-80 left-20 text-green-400 opacity-20"
          style={{ transform: `translateY(${scrollY * 0.6}px) rotate(${scrollY * 0.2}deg)` }}
        >
          <Carrot size={38} />
        </div>
        
        {/* Background gradient that moves with scroll */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-mealmate-light-green/30 to-transparent"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
      </div>

      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div 
          className="animate-fade-in"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
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
          style={{ transform: `translateX(48px) translateY(${scrollY * 0.08}px)` }}
        >
          <div className="rounded-lg">
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
