import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Instagram, Car, Train, Mail } from "lucide-react";

const Location = () => {
  return (
    <section id="location" className="py-20 bg-wave-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary">Lokasi & Kontak</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Temukan Kami di Jakarta Barat
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Berlokasi strategis di kawasan Palmerah dengan akses mudah dan pemandangan rooftop yang menakjubkan
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Placeholder */}
          <div className="bg-muted rounded-2xl h-96 flex items-center justify-center shadow-soft">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Peta Lokasi</h3>
              <p className="text-muted-foreground">Mahato Coffee</p>
              <p className="text-sm text-muted-foreground">Jl. Kyai H. Taisir No.2 B, RT.3/RW.11</p>
              <p className="text-xs text-muted-foreground">Palmerah, Jakarta Barat</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  Alamat Lengkap
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Jl. Kyai H. Taisir No.2 B, RT.3/RW.11, Palmerah, Kec. Palmerah, 
                  Kota Jakarta Barat, DKI Jakarta 11480, Indonesia
                </p>
                <Button variant="outline" className="mt-4">
                  Buka di Google Maps
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-primary" />
                  Jam Operasional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
                    <span className="font-semibold text-primary">Setiap Hari</span>
                    <span className="font-bold text-primary">16:00 - 03:00 WIB</span>
                  </div>
                  <p className="text-sm text-muted-foreground text-center">
                    Buka 7 hari dalam seminggu
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-primary" />
                  Hubungi Kami
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    <span>0822-4623-9567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span>mahatoidn@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Instagram className="w-4 h-4 text-muted-foreground" />
                    <span>@mahato.id</span>
                  </div>
                </div>
                <div className="flex gap-3 mt-4">
                  <Button variant="coffee" size="sm">
                    WhatsApp
                  </Button>
                  <Button variant="outline" size="sm">
                    Instagram
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle>Akses Transportasi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Car className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-semibold text-sm">Parkir Tersedia</p>
                      <p className="text-xs text-muted-foreground">50 slot mobil</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Train className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-semibold text-sm">Stasiun Palmerah</p>
                      <p className="text-xs text-muted-foreground">5 menit jalan kaki</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;