import { Button } from "@/components/ui/button";
import { Menu, MapPin, Phone } from "lucide-react";
import mahatoLogo from "@/assets/mahato-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={mahatoLogo} alt="Mahato Logo" className="w-10 h-10" />
          <div>
            <h1 className="text-xl font-bold text-primary">Mahato</h1>
            <p className="text-xs text-muted-foreground">100% Arabica Coffee</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-foreground hover:text-primary transition-colors">Cerita Kami</a>
          <a href="#menu" className="text-foreground hover:text-primary transition-colors">Menu</a>
          <a href="#location" className="text-foreground hover:text-primary transition-colors">Outlet</a>
          <a href="#events" className="text-foreground hover:text-primary transition-colors">Event</a>
          <a href="#partnership" className="text-foreground hover:text-primary transition-colors">Kemitraan</a>
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