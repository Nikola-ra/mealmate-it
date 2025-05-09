import { Phone, Mail, Youtube, Instagram } from "lucide-react"
import MealMateLogo from "./MealMateLogo"

const FooterSection = () => {
  return (
    <section id="contact" className="bg-mealmate-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <MealMateLogo size={50} className="filter brightness-0 invert" />
              <span className="ml-3 text-2xl font-bold">MealMate</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              MealMate è la tua alleata smart in cucina: un'app intelligente che
              ti aiuta a ridurre gli sprechi alimentari e a riscoprire il
              piacere di cucinare in modo sostenibile.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail className="h-5 w-5 mr-2 text-mealmate-green" />
                <span>mealmatebusiness2025@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-5 w-5 mr-2 text-mealmate-green" />
                <span>+39 123 456 7890</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Link Rapidi</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-mealmate-green transition-colors"
                  >
                    Chi siamo
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-mealmate-green transition-colors"
                  >
                    Servizi
                  </a>
                </li>
                <li>
                  <a
                    href="#target"
                    className="text-gray-300 hover:text-mealmate-green transition-colors"
                  >
                    Target
                  </a>
                </li>
                <li>
                  <a
                    href="#market"
                    className="text-gray-300 hover:text-mealmate-green transition-colors"
                  >
                    Mercato
                  </a>
                </li>
                <li>
                  <a
                    href="#business"
                    className="text-gray-300 hover:text-mealmate-green transition-colors"
                  >
                    Business
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Seguici</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://instagram.com/mealmatebusiness"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-mealmate-green transition-colors flex items-center"
                  >
                    <Instagram className="h-4 w-4 mr-2 text-mealmate-green" />
                    @mealmatebusiness
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@MealMateBusiness"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-mealmate-green transition-colors flex items-center"
                  >
                    <Youtube className="h-4 w-4 mr-2 text-mealmate-green" />
                    @MealMateBusiness
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} MealMate - ITI G. Marconi, Lombardia,
            Italy
          </p>
        </div>
      </div>
    </section>
  )
}

export default FooterSection
