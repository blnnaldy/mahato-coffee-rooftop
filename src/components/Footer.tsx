import { Coffee, MapPin, Phone, Instagram, Facebook, Mail } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

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
                <h3 className="text-xl font-bold">Mahato</h3>
                <p className="text-sm opacity-80">100% Arabica Coffee</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed mb-6">
              Menghadirkan pengalaman kopi arabika premium dengan suasana rooftop yang menawan di jantung Jakarta Barat.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/mahato.id/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors hover-scale"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@mahato.id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors hover-scale"
              >
                <FaTiktok className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/6282246239567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors hover-scale"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href="mailto:mahatoidn@gmail.com"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors hover-scale"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Menu Utama</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="opacity-80 hover:opacity-100 transition-opacity story-link">Cerita Kami</Link></li>
              <li><Link to="/menu" className="opacity-80 hover:opacity-100 transition-opacity story-link">Menu</Link></li>
              <li><Link to="/location" className="opacity-80 hover:opacity-100 transition-opacity story-link">Outlet</Link></li>
              <li><Link to="/events" className="opacity-80 hover:opacity-100 transition-opacity story-link">Event</Link></li>
              <li><Link to="/partnership" className="opacity-80 hover:opacity-100 transition-opacity story-link">Kemitraan</Link></li>
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
                  Jl. Kyai H. Taisir No.2 B, RT.3/RW.11, Palmerah, Jakarta Barat 11480, Indonesia
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 opacity-80" />
                <p className="opacity-80">0822-4623-9567</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 opacity-80" />
                <p className="opacity-80">mahatoidn@gmail.com</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs opacity-80">🌐</span>
                <a href="https://coffeemahato.xyz" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity text-sm story-link">
                  coffeemahato.xyz
                </a>
              </div>
            </div>

            <div className="mt-4 p-4 bg-white/10 rounded-lg">
              <p className="text-xs opacity-80 mb-1">Jam Operasional:</p>
              <p className="text-sm font-semibold">Setiap Hari 16:00 - 03:00 WIB</p>
              <p className="text-xs opacity-80 mt-1">Buka 7 hari dalam seminggu</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2024 Mahato Coffee. All rights reserved. | Designed with ❤️ for coffee lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;