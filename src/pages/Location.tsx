import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Clock, Phone, Car, Train, Bus, Wifi, AirVent, Utensils } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import mahatoRooftop from "@/assets/mahato-rooftop-real.jpg";

const Location = () => {
  const facilities = [
    { icon: Wifi, name: "Free WiFi", description: "High-speed internet untuk semua pengunjung" },
    { icon: AirVent, name: "AC & Outdoor", description: "Area indoor ber-AC dan rooftop outdoor" },
    { icon: Utensils, name: "Full Kitchen", description: "Menu makanan dan minuman lengkap" },
    { icon: Car, name: "Parkir", description: "Area parkir yang memadai" }
  ];

  const transportGuide = [
    {
      type: "Mobil/Motor",
      icon: Car,
      directions: "Dari Jalan Raya Palmerah menuju Jl. Kyai H. Taisir No.2 B. Lokasi mudah diakses dari berbagai arah."
    },
    {
      type: "KRL",
      icon: Train,
      directions: "Stasiun Palmerah (10 menit jalan kaki) atau Stasiun Tanah Abang (15 menit berkendara)."
    },
    {
      type: "TransJakarta",
      icon: Bus,
      directions: "Halte Palmerah atau Slipi, kemudian lanjut dengan ojek online atau jalan kaki."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Lokasi Kami
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Temukan Mahato Coffee di jantung Jakarta Barat, dengan akses mudah 
              dan suasana rooftop yang menawan untuk pengalaman kopi yang tak terlupakan.
            </p>
          </div>
        </div>
      </section>

      {/* Main Location Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Mahato Coffee Rooftop</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Alamat Lengkap</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Jl. Kyai H. Taisir No.2 B, RT.3/RW.11<br />
                      Palmerah, Kec. Palmerah<br />
                      Kota Jakarta Barat, DKI Jakarta 11480<br />
                      Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Jam Operasional</h3>
                    <div className="space-y-1">
                      <p className="text-muted-foreground">Setiap Hari: <span className="font-semibold text-primary">16:00 - 03:00 WIB</span></p>
                      <Badge variant="outline" className="mt-2">Buka 7 Hari Seminggu</Badge>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Kontak</h3>
                    <div className="space-y-2">
                      <p className="text-muted-foreground">
                        WhatsApp: <a href="https://wa.me/6282246239567" className="text-primary hover:underline">0822-4623-9567</a>
                      </p>
                      <p className="text-muted-foreground">
                        Email: <a href="mailto:mahatoidn@gmail.com" className="text-primary hover:underline">mahatoidn@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button variant="ocean" size="lg" className="hover-scale" asChild>
                  <a href="https://wa.me/6282246239567" target="_blank" rel="noopener noreferrer">
                    Hubungi Kami
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="hover-scale" asChild>
                  <a href="https://maps.google.com/?q=Jl.+Kyai+H.+Taisir+No.2+B,+RT.3/RW.11,+Palmerah,+Jakarta+Barat" target="_blank" rel="noopener noreferrer">
                    Buka di Maps
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src={mahatoRooftop} 
                alt="Mahato Coffee location" 
                className="rounded-2xl shadow-2xl w-full object-cover h-96"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Fasilitas</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nikmati berbagai fasilitas yang tersedia untuk kenyamanan Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <facility.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{facility.name}</h3>
                  <p className="text-muted-foreground text-sm">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation Guide */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Panduan Transportasi</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Berbagai pilihan transportasi untuk mencapai lokasi kami
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {transportGuide.map((transport, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <transport.icon className="w-12 h-12 text-primary mx-auto mb-2" />
                  <CardTitle>{transport.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed text-center">
                    {transport.directions}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Peta Lokasi</h2>
            <p className="text-xl text-muted-foreground">
              Temukan kami dengan mudah menggunakan peta di bawah ini
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8659087775247!2d106.79089!3d-6.155556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7a6e5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sJl.%20Kyai%20H.%20Taisir%20No.2B%2C%20Palmerah%2C%20Jakarta%20Barat!5e0!3m2!1sen!2sid!4v1234567890123"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mahato Coffee Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Kunjungi Kami Hari Ini</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Rasakan pengalaman kopi premium di rooftop dengan pemandangan kota Jakarta. 
            Kami menunggu kedatangan Anda!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" className="hover-scale" asChild>
              <a href="https://wa.me/6282246239567" target="_blank" rel="noopener noreferrer">
                Reservasi WhatsApp
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary hover-scale">
              Lihat Menu
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Location;