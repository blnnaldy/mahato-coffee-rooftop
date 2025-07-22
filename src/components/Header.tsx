import { Button } from "@/components/ui/button";
import { Menu, Coffee, MapPin, Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Coffee className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-xl font-bold text-primary">Mahato Rooftop</h1>
            <p className="text-xs text-muted-foreground">100% Arabica Coffee</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">Beranda</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">Tentang</a>
          <a href="#menu" className="text-foreground hover:text-primary transition-colors">Menu</a>
          <a href="#location" className="text-foreground hover:text-primary transition-colors">Lokasi</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Kontak</a>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Palmerah, Jakarta Barat</span>
          </div>
          <Button variant="ocean" size="sm">
            Reservasi
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;