
import { Button } from "@/components/ui/button";
import MealMateLogo from "@/components/MealMateLogo";
import { Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { Download as DownloadIcon } from "lucide-react";

const Download = () => {
  const downloadLink = "https://expo.dev/accounts/nikola_rahovic/projects/MealMate/builds/5645c814-01b0-4f0b-9f3f-8b5ef979dd0d";

  return (
    <div className="min-h-screen bg-gradient-to-b from-mealmate-light-green to-white">
      {/* Header with navigation back to home */}
      <div className="container mx-auto pt-8">
        <Link to="/" className="text-mealmate-green hover:text-mealmate-dark-green font-medium">
          ← Torna alla home
        </Link>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-16 flex flex-col items-center">
        <MealMateLogo size={120} className="mb-8 animate-bounce" />
        
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Scarica <span className="text-mealmate-green">MealMate</span>
        </h1>
        
        <p className="text-xl text-center mb-10 max-w-2xl">
          La tua nuova app per una cucina intelligente e sostenibile sarà 
          <span className="font-bold text-mealmate-green"> disponibile entro Agosto 2025</span>.
        </p>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl w-full mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Versione di anteprima</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
            <div className="bg-mealmate-light-green p-4 rounded-lg">
              <Smartphone className="w-20 h-20 text-mealmate-green mx-auto" />
            </div>
            
            <div>
              <p className="text-lg mb-4">
                Puoi scaricare e installare la versione di anteprima dell'app MealMate sul tuo dispositivo mobile.
              </p>
              <p className="text-gray-600">
                Nota: Questa è una versione preliminare e potrebbe non essere disponibile continuamente.
              </p>
            </div>
          </div>
          
          <Button 
            className="w-full py-6 bg-mealmate-green hover:bg-mealmate-dark-green text-white text-lg font-semibold rounded-lg flex items-center justify-center gap-2"
            onClick={() => window.open(downloadLink, '_blank')}
          >
            <DownloadIcon className="w-5 h-5" /> Scarica ora
          </Button>
        </div>
        
        {/* Status information */}
        <div className="bg-gray-100 p-4 rounded-lg max-w-md w-full">
          <h3 className="font-semibold mb-2 text-center">Status attuale dell'app</h3>
          <div className="flex items-center justify-center gap-2">
            <span className="w-3 h-3 rounded-full bg-orange-500"></span>
            <p className="text-gray-700">Non Accessibile ma installabile</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
