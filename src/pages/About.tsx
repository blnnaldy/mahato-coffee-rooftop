import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Coffee, Users, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import aboutImage from "@/assets/about-outlet.jpg";
import interiorImage from "@/assets/about-interior.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Cerita Kami
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Perjalanan Mahato Coffee dimulai dari kecintaan mendalam terhadap kopi arabika premium 
              dan keinginan untuk menciptakan ruang yang menginspirasi di tengah hiruk pikuk Jakarta.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Awal Mula Perjalanan</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Mahato Coffee lahir dari visi sederhana namun bermakna: menghadirkan pengalaman kopi 
                  yang autentik dan berkualitas tinggi dalam suasana yang hangat dan menginspirasi.
                </p>
                <p>
                  Berlokasi strategis di Palmerah, Jakarta Barat, kami memilih konsep rooftop untuk 
                  memberikan perspektif baru bagi para pecinta kopi yang ingin menikmati secangkir 
                  kopi sambil melihat pemandangan kota.
                </p>
                <p>
                  Dengan komitmen menggunakan 100% kopi arabika pilihan, setiap cangkir yang kami 
                  sajikan adalah hasil dari proses seleksi dan roasting yang teliti untuk 
                  menghadirkan cita rasa terbaik.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={aboutImage} 
                alt="Mahato Outlet" 
                className="rounded-2xl shadow-2xl w-full object-cover h-80"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Nilai-Nilai Kami</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Setiap aspek dari Mahato Coffee dibangun atas fondasi nilai-nilai yang kuat
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Coffee className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Kualitas Premium</h3>
                <p className="text-muted-foreground">
                  100% kopi arabika pilihan dengan proses roasting yang sempurna
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Komunitas</h3>
                <p className="text-muted-foreground">
                  Menciptakan ruang yang mempertemukan para pecinta kopi
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Keunggulan</h3>
                <p className="text-muted-foreground">
                  Standar pelayanan tinggi dalam setiap aspek pengalaman
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Konsistensi</h3>
                <p className="text-muted-foreground">
                  Menjaga kualitas dan standar dalam setiap cangkir kopi
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Atmosphere Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={interiorImage} 
                alt="Mahato interior" 
                className="rounded-2xl shadow-2xl w-full object-cover h-80"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Suasana yang Menginspirasi</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Desain interior Mahato Coffee menggabungkan elemen modern dengan sentuhan hangat 
                  yang menciptakan atmosfer nyaman untuk berbagai aktivitas - dari meeting bisnis 
                  hingga waktu santai bersama teman.
                </p>
                <p>
                  Area rooftop kami menawarkan pemandangan kota Jakarta yang memukau, terutama 
                  saat matahari terbenam. Ini adalah tempat sempurna untuk melepas penat setelah 
                  seharian beraktivitas.
                </p>
                <p>
                  Dengan jam operasional hingga dini hari (16:00 - 03:00 WIB), kami hadir sebagai 
                  tempat yang selalu siap menyambut Anda kapan pun Anda membutuhkan secangkir kopi 
                  berkualitas.
                </p>
              </div>
              <div className="mt-8">
                <Button variant="ocean" size="lg" className="hover-scale">
                  Kunjungi Kami Sekarang
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Tim Kami</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dibalik setiap cangkir kopi yang sempurna, ada tim yang berdedikasi untuk 
              memberikan pengalaman terbaik bagi setiap pengunjung
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Coffee className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Head Barista</h3>
                <p className="text-muted-foreground">
                  Ahli dalam seni brewing dan latte art dengan pengalaman bertahun-tahun
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer Service</h3>
                <p className="text-muted-foreground">
                  Tim yang ramah dan profesional siap memberikan pelayanan terbaik
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Control</h3>
                <p className="text-muted-foreground">
                  Memastikan setiap produk memenuhi standar kualitas tertinggi
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;