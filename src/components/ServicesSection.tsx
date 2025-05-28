
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scan, ChefHat, BookOpen, Clock, Users, Utensils } from "lucide-react";
import { useEffect, useState } from "react";

const ServicesSection = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="services" className="section-padding bg-mealmate-light-green relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div 
          className="text-center mb-16"
          style={{ transform: `translateY(${scrollY * 0.03}px)` }}
        >
          <h2 className="font-bold text-mealmate-black mb-4">I nostri servizi</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Scopri come MealMate può aiutarti a gestire la tua dispensa, 
            ridurre gli sprechi e trovare nuove idee per i tuoi piatti.
          </p>
        </div>

        <div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{ transform: `translateY(${scrollY * -0.05}px)` }}
        >
          <ServiceCard 
            icon={<Scan className="h-12 w-12 text-mealmate-green" />}
            title="Scansione dei prodotti"
            description="La nostra app consente di scannerizzare prodotti in modo facile e veloce, evitando di dover tenere a mente traccia dell'intera dispensa, rischiando di sprecare cibo."
            delay="0"
            scrollY={scrollY}
            parallaxSpeed={0.02}
          />
          <ServiceCard 
            icon={<ChefHat className="h-12 w-12 text-mealmate-green" />}
            title="Ricette innovative"
            description="Ci rivolgiamo a supermercati e cuochi privati per avere un ricettario all'avanguardia e spingere i nostri clienti a mettersi in gioco uscendo dalla comfort-zone."
            delay="100"
            scrollY={scrollY}
            parallaxSpeed={-0.03}
          />
          <ServiceCard 
            icon={<BookOpen className="h-12 w-12 text-mealmate-green" />}
            title="Gestione della dispensa"
            description="Grazie alla nostra soluzione, i clienti non devono fare nulla, ci penserà MealMate a tenere traccia di tutti i prodotti presenti in casa vostra e grazie ad essi vi suggerirà ricette deliziose!"
            delay="200"
            scrollY={scrollY}
            parallaxSpeed={0.04}
          />
          <ServiceCard 
            icon={<Users className="h-12 w-12 text-mealmate-green" />}
            title="Partnership e affiliazione"
            description="Se sei un cuoco o sei qualcuno che come noi, ha a cuore la salute e qualità del cibo, potrai chiederci di fare pubblicità ai tuoi servizi nella nostra app e nel nostro sito."
            delay="300"
            scrollY={scrollY}
            parallaxSpeed={-0.01}
          />
          <ServiceCard 
            icon={<Clock className="h-12 w-12 text-mealmate-green" />}
            title="Gestione del tempo"
            description="Scannerizzare i tuoi prodotti in 5 minuti ti permetterà di risparmiare ore e ore di ragionamento su cosa vorrai cucinare. Affidati al nostro sistema di ricette creative."
            delay="400"
            scrollY={scrollY}
            parallaxSpeed={0.02}
          />
          <ServiceCard 
            icon={<Utensils className="h-12 w-12 text-mealmate-green" />}
            title="Esperienza utente"
            description="Abbiamo progettato un'interfaccia intuitiva e facile da usare, per garantirti un'esperienza fluida e piacevole durante l'utilizzo della nostra app, anche per chi è meno esperto di tecnologia."
            delay="500"
            scrollY={scrollY}
            parallaxSpeed={-0.02}
          />
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
  scrollY: number;
  parallaxSpeed: number;
}

const ServiceCard = ({ icon, title, description, delay, scrollY, parallaxSpeed }: ServiceCardProps) => {
  return (
    <Card 
      className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in" 
      style={{ 
        animationDelay: `${delay}ms`,
        transform: `translateY(${scrollY * parallaxSpeed}px)`
      }}
    >
      <CardHeader>
        <div className="mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold text-mealmate-black">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-700 text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServicesSection;
