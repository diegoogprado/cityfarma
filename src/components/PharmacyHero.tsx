import { Button } from "@/components/ui/button";
import { MessageCircle, Shield, Clock, MapPin } from "lucide-react";
import cityBanner from "@/assets/city-banner.jpeg";
import cityFarmaLogo from "@/assets/cityfarma-logo.png";

// Declare gtag for TypeScript
declare global {
  function gtag(...args: any[]): void;
}

const PharmacyHero = () => {
  const handleWhatsAppClick = () => {
    // Analytics tracking similar to the original
    if (typeof gtag !== 'undefined') {
      gtag('event', 'click_whatsapp', {
        event_category: 'engajamento',
        event_label: 'Botão WhatsApp CityFarma',
        value: 1
      });
    }
    
    window.open(
      'https://wa.me/5521970411688?text=Olá%20CityFarma&utm_source=googleads&utm_medium=cpc&utm_campaign=campanha_farmacia',
      '_blank'
    );
  };

  return (
    <main className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="bg-card rounded-2xl shadow-soft overflow-hidden">
          {/* Hero Image Section */}
          <div className="relative h-48 md:h-64 lg:h-72 overflow-hidden">
            <img 
              src={cityBanner} 
              alt="CityFarma Oswaldo Cruz - Farmácia física e confiável" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/20"></div>
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-8 lg:p-12 text-center">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <img 
                src={cityFarmaLogo} 
                alt="CityFarma Logo" 
                className="h-16 md:h-20 w-auto"
              />
            </div>

            {/* Welcome Header */}
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
                Bem-vindo à CityFarma
                <span className="block text-lg md:text-xl lg:text-2xl font-normal text-muted-foreground mt-2">
                  Oswaldo Cruz
                </span>
              </h1>
            </header>

            {/* Trust Indicators */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8" aria-label="Nossos diferenciais">
              <div className="flex flex-col items-center p-4 bg-medical-light rounded-lg">
                <Shield className="w-8 h-8 text-medical mb-2" aria-hidden="true" />
                <span className="text-sm font-medium text-medical">Confiança</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-primary/5 rounded-lg">
                <Clock className="w-8 h-8 text-primary mb-2" aria-hidden="true" />
                <span className="text-sm font-medium text-primary">Rapidez</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-muted rounded-lg">
                <MapPin className="w-8 h-8 text-foreground mb-2" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">Oswaldo Cruz</span>
              </div>
            </section>

            {/* Main Message */}
            <section className="mb-8 space-y-4">
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                Precisa de um medicamento com urgência?
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Nossa equipe está pronta para atendê-lo com agilidade e profissionalismo. 
                Entre em contato conosco pelo WhatsApp e receba atendimento personalizado.
              </p>
            </section>

            {/* Call to Action */}
            <section className="space-y-4">
              <Button 
                variant="whatsapp" 
                size="lg" 
                onClick={handleWhatsAppClick}
                className="w-full md:w-auto text-base md:text-lg px-8 py-4"
                aria-label="Falar com CityFarma pelo WhatsApp"
              >
                <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
                Fale Conosco no WhatsApp
              </Button>
              <p className="text-sm text-muted-foreground">
                Atendimento rápido e personalizado
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PharmacyHero;