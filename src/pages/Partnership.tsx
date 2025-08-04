import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Handshake, TrendingUp, Users, Coffee, MapPin, DollarSign, Clock, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Partnership = () => {
  const partnershipTypes = [
    {
      icon: Coffee,
      title: "Franchise Mahato Coffee",
      investment: "Rp 250.000.000 - Rp 500.000.000",
      description: "Buka outlet Mahato Coffee dengan brand dan sistem operasional yang telah terbukti",
      benefits: [
        "Training lengkap sistem operasional",
        "Marketing support & brand awareness",
        "Supply chain management",
        "Ongoing support & consultation"
      ],
      requirements: [
        "Lokasi strategis minimal 100m²",
        "Pengalaman bisnis F&B (preferred)",
        "Komitmen jangka panjang",
        "Tim operasional yang dedicated"
      ]
    },
    {
      icon: MapPin,
      title: "Coffee Corner Partnership",
      investment: "Rp 50.000.000 - Rp 150.000.000", 
      description: "Kemitraan untuk membuka coffee corner di lokasi strategis seperti mall, perkantoran, atau kampus",
      benefits: [
        "Investment lebih rendah",
        "Fleksibilitas operasional",
        "Menu signature Mahato",
        "Training barista professional"
      ],
      requirements: [
        "Lokasi foot traffic tinggi",
        "Area minimal 20m²",
        "Akses listrik & air memadai",
        "Izin operasional lengkap"
      ]
    },
    {
      icon: Users,
      title: "Corporate Catering",
      investment: "Partnership Revenue Sharing",
      description: "Menjadi mitra penyedia coffee catering untuk acara corporate dan event besar",
      benefits: [
        "Revenue sharing model",
        "Equipment support",
        "Professional barista team",
        "Event management assistance"
      ],
      requirements: [
        "Pengalaman event catering",
        "Team yang reliable",
        "Transportation & equipment",
        "Insurance & legal compliance"
      ]
    }
  ];

  const investmentBreakdown = [
    { item: "Franchise Fee", amount: "Rp 75.000.000", description: "Biaya hak waralaba dan training awal" },
    { item: "Equipment & Setup", amount: "Rp 125.000.000", description: "Mesin kopi profesional dan setup cafe" },
    { item: "Interior Design", amount: "Rp 50.000.000", description: "Desain interior sesuai brand standard" },
    { item: "Working Capital", amount: "Rp 50.000.000", description: "Modal operasional 3 bulan pertama" },
    { item: "Marketing Launch", amount: "Rp 25.000.000", description: "Campaign grand opening dan promosi awal" }
  ];

  const supportPrograms = [
    {
      icon: Award,
      title: "Training Program",
      description: "Pelatihan komprehensif untuk owner dan staff tentang operasional cafe, customer service, dan quality control",
      duration: "4 minggu intensif"
    },
    {
      icon: TrendingUp,
      title: "Marketing Support",
      description: "Dukungan marketing digital, social media management, dan campaign promosi berkelanjutan",
      duration: "Ongoing support"
    },
    {
      icon: Coffee,
      title: "Quality Assurance",
      description: "Regular quality check, menu development, dan standarisasi rasa untuk semua outlet",
      duration: "Monthly visits"
    },
    {
      icon: DollarSign,
      title: "Financial Guidance",
      description: "Konsultasi business plan, financial projection, dan strategy untuk profitability optimization",
      duration: "Quarterly review"
    }
  ];

  const successStories = [
    {
      location: "Mahato Coffee Menteng",
      period: "Buka: Januari 2023",
      achievement: "ROI 18 bulan",
      highlights: ["150+ customers/day", "Rating 4.8/5", "Revenue target tercapai 120%"]
    },
    {
      location: "Mahato Corner Sudirman",
      period: "Buka: Maret 2023", 
      achievement: "Break even 8 bulan",
      highlights: ["200+ cups/day", "Corporate clients 15+", "Profit margin 25%"]
    },
    {
      location: "Mahato Catering Jakarta",
      period: "Partnership: Juni 2023",
      achievement: "50+ events handled",
      highlights: ["Monthly revenue 100jt+", "Client retention 85%", "5-star reviews 95%"]
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
              Kemitraan
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Bergabunglah dengan Mahato Coffee dan jadilah bagian dari revolusi kopi premium 
              di Indonesia. Kami menawarkan berbagai model kemitraan yang menguntungkan.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Handshake className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-primary mb-4">Model Kemitraan</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pilih model kemitraan yang sesuai dengan budget dan visi bisnis Anda
            </p>
          </div>
          
          <div className="space-y-8">
            {partnershipTypes.map((partnership, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <partnership.icon className="w-12 h-12 text-primary" />
                    <div>
                      <CardTitle className="text-2xl">{partnership.title}</CardTitle>
                      <Badge variant="outline" className="mt-2">
                        Investment: {partnership.investment}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {partnership.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Benefit Kemitraan:</h4>
                      <ul className="space-y-2">
                        {partnership.benefits.map((benefit, idx) => (
                          <li key={idx} className="text-sm flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Persyaratan:</h4>
                      <ul className="space-y-2">
                        {partnership.requirements.map((req, idx) => (
                          <li key={idx} className="text-sm flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Breakdown */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Rincian Investasi Franchise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Detail investasi yang diperlukan untuk membuka outlet Mahato Coffee
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {investmentBreakdown.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-4 border-b border-border/50 last:border-b-0">
                      <div>
                        <h3 className="font-semibold text-lg">{item.item}</h3>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-primary">{item.amount}</p>
                      </div>
                    </div>
                  ))}
                  <div className="pt-6 border-t-2 border-primary">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold">Total Investment</h3>
                      <p className="text-2xl font-bold text-primary">Rp 325.000.000</p>
                    </div>
                    <p className="text-muted-foreground text-sm mt-2">
                      *Estimasi untuk lokasi standard, dapat bervariasi sesuai kondisi
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Program Dukungan</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Kami memberikan dukungan komprehensif untuk kesuksesan bisnis mitra
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {supportPrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <program.icon className="w-10 h-10 text-primary" />
                    <div>
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      <Badge variant="outline" className="mt-1">{program.duration}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Kisah Sukses Mitra</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Lihat bagaimana mitra-mitra kami mencapai kesuksesan bersama Mahato Coffee
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{story.location}</CardTitle>
                  <p className="text-muted-foreground">{story.period}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <Badge className="bg-green-100 text-green-800 text-lg py-2 px-4">
                      {story.achievement}
                    </Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Highlights:</h4>
                    <ul className="space-y-1">
                      {story.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {highlight}
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

      {/* Timeline & Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Clock className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-primary mb-4">Proses Kemitraan</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Langkah-langkah mudah untuk memulai kemitraan dengan Mahato Coffee
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Konsultasi Awal", desc: "Diskusi model kemitraan dan requirement", time: "1-2 hari" },
                { step: "2", title: "Survey Lokasi", desc: "Tim kami akan survey dan evaluasi lokasi", time: "1 minggu" },
                { step: "3", title: "Agreement", desc: "Penandatanganan kontrak kemitraan", time: "1-2 minggu" },
                { step: "4", title: "Setup & Launch", desc: "Training, setup, dan grand opening", time: "4-6 minggu" }
              ].map((process, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {process.step}
                    </div>
                    <h3 className="font-semibold mb-2">{process.title}</h3>
                    <p className="text-muted-foreground text-sm mb-2">{process.desc}</p>
                    <Badge variant="outline">{process.time}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Siap Memulai Kemitraan?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Jangan lewatkan kesempatan menjadi bagian dari brand kopi premium yang berkembang pesat. 
            Hubungi tim kami untuk konsultasi gratis.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary" size="lg" className="hover-scale" asChild>
              <a href="https://wa.me/6282246239567" target="_blank" rel="noopener noreferrer">
                Konsultasi WhatsApp
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary hover-scale" asChild>
              <a href="mailto:mahatoidn@gmail.com">
                Email Partnership
              </a>
            </Button>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <h4 className="font-semibold mb-2">📱 WhatsApp</h4>
              <p className="opacity-90">0822-4623-9567</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">📧 Email</h4>
              <p className="opacity-90">mahatoidn@gmail.com</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">🌐 Website</h4>
              <p className="opacity-90">coffeemahato.xyz</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partnership;