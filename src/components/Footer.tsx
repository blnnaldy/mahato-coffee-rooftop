import { Coffee, MapPin, Phone, Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="w-8 h-8" />
              <div>
                <h3 className="text-xl font-bold">Mahato Rooftop</h3>
                <p className="text-sm opacity-80">100% Arabica Coffee</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed mb-4">
              Menghadirkan pengalaman kopi arabika premium dengan suasana rooftop yang menawan di jantung Jakarta Barat.
            </p>
            <div className="flex gap-3">
              <Instagram className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
              <Mail className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Menu Utama</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="opacity-80 hover:opacity-100 transition-opacity">Beranda</a></li>
              <li><a href="#about" className="opacity-80 hover:opacity-100 transition-opacity">Tentang Kami</a></li>
              <li><a href="#menu" className="opacity-80 hover:opacity-100 transition-opacity">Menu</a></li>
              <li><a href="#location" className="opacity-80 hover:opacity-100 transition-opacity">Lokasi</a></li>
              <li><a href="#contact" className="opacity-80 hover:opacity-100 transition-opacity">Kontak</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2 text-sm">
              <li className="opacity-80">Dine In</li>
              <li className="opacity-80">Take Away</li>
              <li className="opacity-80">Coffee Catering</li>
              <li className="opacity-80">Private Event</li>
              <li className="opacity-80">Meeting Space</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 opacity-80" />
                <p className="opacity-80">
                  Jl. Kyai H. Taisir No.2 B, RW.11, Palmerah, Jakarta Barat 11480
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 opacity-80" />
                <p className="opacity-80">+62 21 1234 5678</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 opacity-80" />
                <p className="opacity-80">info@mahatorooftop.com</p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-white/10 rounded-lg">
              <p className="text-xs opacity-80 mb-1">Jam Operasional:</p>
              <p className="text-sm">Setiap Hari 08:00 - 23:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 Mahato Rooftop. All rights reserved. | Designed with ❤️ for coffee lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;