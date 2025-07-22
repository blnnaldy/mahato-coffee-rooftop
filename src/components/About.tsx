import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Coffee, Award, Users, Clock } from "lucide-react";
import coffeeBeansImage from "@/assets/coffee-beans.jpg";
import interiorImage from "@/assets/interior.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-wave-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary">Tentang Kami</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Passion untuk Kopi Arabika Terbaik
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Mahato Rooftop hadir dengan komitmen menyajikan kopi arabika 100% premium dalam suasana rooftop yang menenangkan, 
            menciptakan pengalaman yang tak terlupakan untuk setiap pencinta kopi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={coffeeBeansImage} 
              alt="Premium Arabica Coffee Beans" 
              className="w-full rounded-2xl shadow-ocean"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-primary mb-6">100% Kopi Arabika Premium</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Kami bangga menyajikan kopi arabika 100% yang dipilih langsung dari perkebunan terbaik Indonesia. 
              Setiap biji kopi dipanggang dengan teknik khusus untuk menghadirkan cita rasa yang kaya dan aroma yang menggugah selera.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Coffee className="w-5 h-5 text-accent" />
                <span>Biji kopi arabika pilihan dari petani lokal</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-accent" />
                <span>Proses roasting dengan standar internasional</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-accent" />
                <span>Barista berpengalaman dan bersertifikat</span>
              </div>
            </div>
            <Button variant="coffee" size="lg">
              Pelajari Lebih Lanjut
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="md:order-2">
            <img 
              src={interiorImage} 
              alt="Rooftop Interior" 
              className="w-full rounded-2xl shadow-ocean"
            />
          </div>
          <div className="md:order-1">
            <h3 className="text-3xl font-bold text-primary mb-6">Suasana Rooftop yang Menawan</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Nikmati kopi terbaik sambil menikmati pemandangan kota Jakarta dari rooftop kami yang nyaman. 
              Desain interior yang elegan dengan sentuhan modern dan alami menciptakan atmosfer yang sempurna 
              untuk bersantai atau berkumpul bersama teman.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <Card className="p-4 text-center bg-white/50 backdrop-blur-sm">
                <CardContent className="p-0">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold">Buka Setiap Hari</p>
                  <p className="text-sm text-muted-foreground">08:00 - 23:00</p>
                </CardContent>
              </Card>
              <Card className="p-4 text-center bg-white/50 backdrop-blur-sm">
                <CardContent className="p-0">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold">Kapasitas</p>
                  <p className="text-sm text-muted-foreground">60 Orang</p>
                </CardContent>
              </Card>
            </div>
            <Button variant="ocean" size="lg">
              Lihat Galeri
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;