import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Users, Music, Camera, Clock, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import eventImage from "@/assets/event-view5.jpg";
import eventMusic from "@/assets/event-music.jpg";
import eventMusic2 from "@/assets/event-music-2.jpg";
import eventView1 from "@/assets/event-view1.jpg";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Coffee Tasting Workshop",
      date: "15 Januari 2024",
      time: "19:00 - 21:00 WIB",
      capacity: "15 orang",
      price: "Rp 150.000",
      description: "Belajar tentang karakteristik kopi dari berbagai daerah dengan dipandu barista profesional",
      type: "Workshop",
      status: "Available"
    },
    {
      title: "Acoustic Night",
      date: "20 Januari 2024", 
      time: "20:00 - 23:00 WIB",
      capacity: "50 orang",
      price: "Gratis",
      description: "Menikmati musik acoustic live dengan pemandangan kota Jakarta di rooftop",
      type: "Entertainment",
      status: "Almost Full"
    },
    {
      title: "Latte Art Competition",
      date: "28 Januari 2024",
      time: "16:00 - 18:00 WIB", 
      capacity: "20 peserta",
      price: "Rp 100.000",
      description: "Kompetisi latte art untuk barista pemula dan menengah dengan hadiah menarik",
      type: "Competition",
      status: "Registration Open"
    }
  ];

  const eventTypes = [
    {
      icon: Users,
      title: "Corporate Events",
      description: "Meeting, presentasi, dan acara perusahaan dengan suasana yang inspiratif",
      features: ["Meeting room private", "Projector & sound system", "Coffee & snack catering", "Parking space"]
    },
    {
      icon: Music,
      title: "Live Music",
      description: "Pertunjukan musik live setiap weekend dengan artis lokal berkualitas",
      features: ["Live acoustic", "Open mic session", "Sound system profesional", "Rooftop atmosphere"]
    },
    {
      icon: Camera,
      title: "Photography Session",
      description: "Lokasi fotografi yang aesthetic dengan pemandangan kota Jakarta",
      features: ["Rooftop view", "Indoor & outdoor setting", "Natural lighting", "Flexible timing"]
    },
    {
      icon: Calendar,
      title: "Private Party",
      description: "Perayaan pribadi seperti ulang tahun, anniversary, atau gathering",
      features: ["Exclusive area", "Custom decoration", "Special menu", "Extended hours"]
    }
  ];

  const monthlyPrograms = [
    {
      name: "Coffee Cupping Session",
      schedule: "Setiap Sabtu pertama",
      time: "15:00 - 17:00 WIB",
      description: "Sesi mencicipi dan mengevaluasi kopi dari berbagai origin"
    },
    {
      name: "Barista Workshop", 
      schedule: "Setiap Minggu ketiga",
      time: "10:00 - 12:00 WIB",
      description: "Belajar teknik brewing dan latte art dari barista berpengalaman"
    },
    {
      name: "Sunset Jazz",
      schedule: "Setiap Jumat",
      time: "18:00 - 20:00 WIB", 
      description: "Live jazz music sambil menikmati sunset di rooftop"
    },
    {
      name: "Community Meetup",
      schedule: "Setiap Minggu kedua",
      time: "19:00 - 21:00 WIB",
      description: "Networking dan berbagi pengalaman bersama komunitas kopi"
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
              Event & Acara
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Bergabunglah dengan berbagai acara menarik di Mahato Coffee. Dari workshop kopi 
              hingga live music, kami menghadirkan pengalaman yang berkesan di rooftop Jakarta.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Calendar className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-primary mb-4">Event Mendatang</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Jangan lewatkan acara-acara menarik yang akan segera berlangsung
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted overflow-hidden rounded-t-lg">
                  <img 
                    src={index === 0 ? eventImage : index === 1 ? eventMusic : eventMusic2} 
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{event.type}</Badge>
                    <Badge 
                      className={
                        event.status === "Available" ? "bg-green-100 text-green-800" :
                        event.status === "Almost Full" ? "bg-yellow-100 text-yellow-800" :
                        "bg-blue-100 text-blue-800"
                      }
                    >
                      {event.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{event.capacity}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {event.description}
                  </p>
                  
                  <div className="flex justify-between items-center pt-4">
                    <span className="text-lg font-bold text-primary">{event.price}</span>
                    <Button variant="ocean" size="sm" className="hover-scale">
                      Daftar Sekarang
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Jenis Acara</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kami menyediakan berbagai jenis acara sesuai dengan kebutuhan Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {eventTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <type.icon className="w-12 h-12 text-primary" />
                    <div>
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {type.description}
                  </p>
                  <div>
                    <h4 className="font-semibold mb-2">Fasilitas:</h4>
                    <ul className="space-y-1">
                      {type.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Program Rutin</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Program bulanan yang dapat Anda ikuti secara berkala
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {monthlyPrograms.map((program, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{program.name}</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-primary font-medium">{program.schedule}</p>
                    <p className="text-sm text-muted-foreground">{program.time}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Information */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Ingin Mengadakan Event?</h2>
              <p className="text-xl opacity-90">
                Konsultasikan kebutuhan acara Anda dengan tim kami. Kami siap membantu 
                mewujudkan event yang berkesan di rooftop Mahato Coffee.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Informasi Booking</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5" />
                      <span>Booking minimal 1 minggu sebelumnya</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5" />
                      <span>Kapasitas maksimal 80 orang</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5" />
                      <span>Tersedia setiap hari 16:00 - 03:00 WIB</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5" />
                      <span>Area indoor & rooftop tersedia</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Paket Event</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold">Basic Package</p>
                      <p className="text-sm opacity-90">Venue + coffee & snack</p>
                    </div>
                    <div>
                      <p className="font-semibold">Premium Package</p>
                      <p className="text-sm opacity-90">Venue + full catering + decoration</p>
                    </div>
                    <div>
                      <p className="font-semibold">Corporate Package</p>
                      <p className="text-sm opacity-90">Meeting room + AV equipment + catering</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-8">
              <Button variant="secondary" size="lg" className="hover-scale" asChild>
                <a href="https://wa.me/6282246239567" target="_blank" rel="noopener noreferrer">
                  Konsultasi Event
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;