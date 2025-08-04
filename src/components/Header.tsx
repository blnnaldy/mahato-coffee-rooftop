import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, MapPin, Phone, X } from "lucide-react";
import { Link } from "react-router-dom";
import mahatoLogo from "@/assets/mahato-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={mahatoLogo} alt="Mahato Logo" className="w-10 h-10 hover-scale" />
            <div>
              <h1 className="text-xl font-bold text-primary">Mahato</h1>
              <p className="text-xs text-muted-foreground">100% Arabica Coffee</p>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/about" className="text-foreground hover:text-primary transition-all duration-300 story-link">Cerita Kami</Link>
            <Link to="/menu" className="text-foreground hover:text-primary transition-all duration-300 story-link">Menu</Link>
            <Link to="/location" className="text-foreground hover:text-primary transition-all duration-300 story-link">Outlet</Link>
            <Link to="/events" className="text-foreground hover:text-primary transition-all duration-300 story-link">Event</Link>
            <Link to="/partnership" className="text-foreground hover:text-primary transition-all duration-300 story-link">Kemitraan</Link>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Palmerah, Jakarta Barat</span>
            </div>
            <Button variant="ocean" size="sm" className="hover-scale">
              Reservasi
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden hover-scale"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm animate-fade-in" onClick={() => setIsMenuOpen(false)} />
          <div className="fixed top-0 right-0 w-80 h-full bg-background shadow-2xl animate-slide-in-right">
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center gap-3">
                <img src={mahatoLogo} alt="Mahato Logo" className="w-8 h-8" />
                <h2 className="text-lg font-bold text-primary">Mahato</h2>
              </div>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            
            <nav className="p-6">
              <div className="space-y-4">
                <Link 
                  to="/about" 
                  className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors border-b border-border/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cerita Kami
                </Link>
                <Link 
                  to="/menu" 
                  className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors border-b border-border/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Menu
                </Link>
                <Link 
                  to="/location" 
                  className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors border-b border-border/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Outlet
                </Link>
                <Link 
                  to="/events" 
                  className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors border-b border-border/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Event
                </Link>
                <Link 
                  to="/partnership" 
                  className="block py-3 text-lg font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kemitraan
                </Link>
              </div>
              
              <div className="mt-8 space-y-4">
                <Button variant="ocean" className="w-full">
                  Reservasi Sekarang
                </Button>
                <div className="text-center text-sm text-muted-foreground">
                  <p>📍 Palmerah, Jakarta Barat</p>
                  <p>⏰ 16:00 - 03:00 WIB</p>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;