import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Coffee, Star, Leaf, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Menu = () => {
  const coffeeMenu = [
    {
      name: "Mahato Signature Blend",
      price: "32.000",
      description: "Blend khusus dengan notes chocolate & caramel yang khas",
      category: "signature",
      popular: true
    },
    {
      name: "Ethiopian Single Origin",
      price: "38.000",
      description: "Notes floral dan fruity dari dataran tinggi Ethiopia",
      category: "single-origin",
      popular: false
    },
    {
      name: "Colombian Supremo",
      price: "35.000",
      description: "Full body dengan rasa nutty dan hints of citrus",
      category: "single-origin",
      popular: true
    },
    {
      name: "Mahato Cold Brew",
      price: "28.000",
      description: "Smooth dan refreshing, diseduh dingin selama 12 jam",
      category: "cold",
      popular: false
    },
    {
      name: "Espresso",
      price: "25.000",
      description: "Shot ganda dengan crema yang sempurna",
      category: "espresso",
      popular: false
    },
    {
      name: "Cappuccino",
      price: "30.000",
      description: "Kombinasi sempurna espresso dengan steamed milk",
      category: "milk-based",
      popular: true
    }
  ];

  const foodMenu = [
    {
      name: "Croissant Butter",
      price: "18.000",
      description: "Croissant fresh dengan butter premium"
    },
    {
      name: "Sandwich Club",
      price: "45.000",
      description: "Sandwich lengkap dengan chicken, lettuce, tomato"
    },
    {
      name: "Pasta Aglio Olio",
      price: "42.000",
      description: "Pasta dengan olive oil, garlic, dan parsley"
    },
    {
      name: "Cheese Cake",
      price: "25.000",
      description: "New York style cheesecake dengan berry sauce"
    }
  ];

  const nonCoffeeMenu = [
    {
      name: "Hot Chocolate",
      price: "26.000",
      description: "Premium chocolate dengan whipped cream"
    },
    {
      name: "Green Tea Latte",
      price: "28.000",
      description: "Matcha premium dengan steamed milk"
    },
    {
      name: "Fresh Orange Juice",
      price: "22.000",
      description: "Jus jeruk segar tanpa pengawet"
    },
    {
      name: "Iced Tea",
      price: "18.000",
      description: "Es teh segar dengan lemon"
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
              Menu Kami
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Nikmati koleksi kopi arabika premium dan hidangan berkualitas yang disiapkan 
              dengan penuh perhatian untuk memberikan pengalaman rasa yang tak terlupakan.
            </p>
          </div>
        </div>
      </section>

      {/* Coffee Menu Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Coffee className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-primary mb-4">Kopi Premium</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              100% Arabika pilihan dari berbagai daerah dengan karakteristik unik
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coffeeMenu.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow relative">
                {item.popular && (
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <span className="text-lg">{item.name}</span>
                    <span className="text-primary font-bold">Rp {item.price}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-4">
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Food Menu Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Leaf className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-primary mb-4">Makanan</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hidangan segar dan lezat untuk melengkapi pengalaman kopi Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {foodMenu.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <span className="text-primary font-bold">Rp {item.price}</span>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Non-Coffee Menu Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Zap className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-primary mb-4">Minuman Non-Kopi</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pilihan minuman segar untuk yang tidak mengonsumsi kopi
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nonCoffeeMenu.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <span className="text-primary font-bold">Rp {item.price}</span>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Penawaran Khusus</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Happy Hour</h3>
                <p className="mb-4">Diskon 20% untuk semua kopi setiap hari 16:00 - 18:00 WIB</p>
                <Badge className="bg-accent text-accent-foreground">Setiap Hari</Badge>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Paket Meeting</h3>
                <p className="mb-4">Kopi + Snack untuk 4 orang mulai dari Rp 150.000</p>
                <Badge className="bg-accent text-accent-foreground">Reservasi</Badge>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8">
            <Button variant="secondary" size="lg" className="hover-scale" asChild>
              <a href="https://wa.me/6282246239567" target="_blank" rel="noopener noreferrer">
                Reservasi Sekarang
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;