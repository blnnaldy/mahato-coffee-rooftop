import { Button } from "@/components/ui/button";
import { MapPin, Star, Coffee } from "lucide-react";
import heroImage from "@/assets/mahato-rooftop-real.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Mahato Rooftop Coffee" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ocean-gradient/70"></div>
      </div>

      {/* Floating Coffee Bean Animation */}
      <div className="absolute top-20 right-20 animate-float opacity-20">
        <Coffee className="w-16 h-16 text-white" />
      </div>
      <div className="absolute bottom-40 left-20 animate-wave opacity-20">
        <Coffee className="w-12 h-12 text-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
            ☕ 100% Kopi Arabika Premium
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="block">Mahato</span>
          <span className="block text-white/90">Rooftop</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          Nikmati pengalaman kopi arabika 100% terbaik dengan pemandangan kota yang menakjubkan di rooftop yang nyaman dan estetik
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button variant="wave" size="lg" className="px-8 py-6 text-lg">
            Jelajahi Menu
          </Button>
          <Button variant="coffee" size="lg" className="px-8 py-6 text-lg" asChild>
            <a href="https://wa.me/6282246239567" target="_blank" rel="noopener noreferrer">
              Reservasi Sekarang
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Palmerah, Jakarta Barat</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 fill-current" />
            <span>Rating 4.8/5</span>
          </div>
          <div className="flex items-center gap-2">
            <Coffee className="w-4 h-4" />
            <span>Buka Setiap Hari</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;