
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import MealMateLogo from './MealMateLogo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <MealMateLogo size={40} />
          <span className="ml-2 text-xl font-bold">MealMate</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-mealmate-black hover:text-mealmate-green font-medium transition-colors">
            Chi siamo
          </a>
          <a href="#services" className="text-mealmate-black hover:text-mealmate-green font-medium transition-colors">
            Servizi
          </a>
          <a href="#target" className="text-mealmate-black hover:text-mealmate-green font-medium transition-colors">
            Target
          </a>
          <a href="#market" className="text-mealmate-black hover:text-mealmate-green font-medium transition-colors">
            Mercato
          </a>
          <a href="#business" className="text-mealmate-black hover:text-mealmate-green font-medium transition-colors">
            Business
          </a>
          <a href="#contact" className="text-mealmate-black hover:text-mealmate-green font-medium transition-colors">
            Contatti
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6 absolute top-full left-0 w-full">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#about" 
              className="text-mealmate-black hover:text-mealmate-green font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Chi siamo
            </a>
            <a 
              href="#services" 
              className="text-mealmate-black hover:text-mealmate-green font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Servizi
            </a>
            <a 
              href="#target" 
              className="text-mealmate-black hover:text-mealmate-green font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Target
            </a>
            <a 
              href="#market" 
              className="text-mealmate-black hover:text-mealmate-green font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Mercato
            </a>
            <a 
              href="#business" 
              className="text-mealmate-black hover:text-mealmate-green font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Business
            </a>
            <a 
              href="#contact" 
              className="text-mealmate-black hover:text-mealmate-green font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contatti
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
