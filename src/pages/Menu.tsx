import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Coffee, Star, Leaf, Zap, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const menuCategories = [
    { id: "all", name: "All Menu", icon: <Coffee className="w-4 h-4" /> },
    { id: "signature", name: "Signature Coffee Series", icon: <Star className="w-4 h-4" /> },
    { id: "espresso", name: "Espresso Base", icon: <Coffee className="w-4 h-4" /> },
    { id: "non-coffee", name: "Non Coffee", icon: <Leaf className="w-4 h-4" /> },
    { id: "yogurt", name: "Yogurt Series", icon: <Zap className="w-4 h-4" /> },
    { id: "tea", name: "Flavour Tea", icon: <Leaf className="w-4 h-4" /> },
    { id: "bakmi", name: "Bakmi Series", icon: <Star className="w-4 h-4" /> }
  ];

  const menuItems = [
    // Signature Coffee Series
    {
      name: "Mahato Signature Blend",
      price: "32.000",
      description: "Blend khusus dengan notes chocolate & caramel yang khas",
      category: "signature",
      popular: true,
      image: "/placeholder.svg"
    },
    {
      name: "Mahato Special Roast",
      price: "35.000",
      description: "Single origin dengan karakteristik unik Mahato",
      category: "signature",
      popular: true,
      image: "/placeholder.svg"
    },
    {
      name: "Mahato Premium Gold",
      price: "42.000",
      description: "Premium blend dengan finishing vanilla dan caramel",
      category: "signature",
      popular: false,
      image: "/placeholder.svg"
    },

    // Espresso Base
    {
      name: "Espresso Single",
      price: "25.000",
      description: "Shot ganda dengan crema yang sempurna",
      category: "espresso",
      popular: false,
      image: "/placeholder.svg"
    },
    {
      name: "Espresso Double",
      price: "30.000",
      description: "Double shot untuk pengalaman kopi yang intens",
      category: "espresso",
      popular: false,
      image: "/placeholder.svg"
    },
    {
      name: "Americano",
      price: "28.000",
      description: "Espresso dengan air panas untuk rasa yang kuat",
      category: "espresso",
      popular: true,
      image: "/placeholder.svg"
    },
    {
      name: "Cappuccino",
      price: "32.000",
      description: "Kombinasi sempurna espresso dengan steamed milk",
      category: "espresso",
      popular: true,
      image: "/placeholder.svg"
    },
    {
      name: "Caffe Latte",
      price: "34.000",
      description: "Smooth dan creamy dengan latte art yang indah",
      category: "espresso",
      popular: true,
      image: "/placeholder.svg"
    },
    {
      name: "Macchiato",
      price: "30.000",
      description: "Espresso dengan sentuhan foam susu yang lembut",
      category: "espresso",
      popular: false,
      image: "/placeholder.svg"
    },

    // Non Coffee
    {
      name: "Hot Chocolate Premium",
      price: "28.000",
      description: "Premium chocolate dengan whipped cream dan marshmallow",
      category: "non-coffee",
      popular: false,
      image: "/placeholder.svg"
    },
    {
      name: "Matcha Latte",
      price: "30.000",
      description: "Matcha premium Jepang dengan steamed milk",
      category: "non-coffee",
      popular: true,
      image: "/placeholder.svg"
    },
    {
      name: "Chocolate Milkshake",
      price: "35.000",
      description: "Thick milkshake dengan coklat premium dan es krim",
      category: "non-coffee",
      popular: false,
      image: "/placeholder.svg"
    },
    {
      name: "Fresh Orange Juice",
      price: "22.000",
      description: "Jus jeruk segar tanpa pengawet",
      category: "non-coffee",
      popular: false,
      image: "/placeholder.svg"
    },

    // Yogurt Series
    {
      name: "Greek Yogurt Berry",
      price: "32.000",
      description: "Greek yogurt dengan mixed berry segar",
      category: "yogurt",
      popular: true,
      image: "/placeholder.svg"
    },
    {
      name: "Yogurt Granola Honey",
      price: "35.000",
      description: "Yogurt dengan granola dan madu alami",
      category: "yogurt",
      popular: false,
      image: "/placeholder.svg"
    },
    {
      name: "Tropical Yogurt Bowl",
      price: "38.000",
      description: "Yogurt dengan buah-buahan tropis segar",
      category: "yogurt",
      popular: true,
      image: "/placeholder.svg"
    },

    // Flavour Tea
    {
      name: "Earl Grey Premium",
      price: "25.000",
      description: "Earl Grey dengan bergamot oil yang harum",
      category: "tea",
      popular: false,
      image: "/placeholder.svg"
    },
    {
      name: "Jasmine Green Tea",
      price: "24.000",
      description: "Teh hijau dengan aroma melati yang menenangkan",
      category: "tea",
      popular: true,
      image: "/placeholder.svg"
    },
    {
      name: "Chamomile Honey",
      price: "26.000",
      description: "Teh chamomile dengan madu untuk relaksasi",
      category: "tea",
      popular: false,
      image: "/placeholder.svg"
    },
    {
      name: "Thai Tea Latte",
      price: "30.000",
      description: "Thai tea dengan susu kental manis",
      category: "tea",
      popular: true,
      image: "/placeholder.svg"
    },

    // Bakmi Series
    {
      name: "Bakmi Ayam Mahato",
      price: "38.000",
      description: "Bakmi ayam dengan bumbu khas Mahato",
      category: "bakmi",
      popular: true,
      image: "/placeholder.svg"
    },
    {
      name: "Bakmi Seafood",
      price: "45.000",
      description: "Bakmi dengan topping seafood segar",
      category: "bakmi",
      popular: false,
      image: "/placeholder.svg"
    },
    {
      name: "Bakmi Vegetarian",
      price: "35.000",
      description: "Bakmi dengan sayuran segar dan tahu tempe",
      category: "bakmi",
      popular: false,
      image: "/placeholder.svg"
    },
    {
      name: "Bakmi Special Combo",
      price: "52.000",
      description: "Bakmi dengan kombinasi ayam, seafood dan sayuran",
      category: "bakmi",
      popular: true,
      image: "/placeholder.svg"
    }
  ];

  const filteredItems = selectedCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

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

      {/* Category Filter */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {menuCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`flex items-center gap-2 ${
                  selectedCategory === category.id 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-primary/10"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.icon}
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              {menuCategories.find(cat => cat.id === selectedCategory)?.name || "All Menu"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {selectedCategory === "all" && "Semua menu tersedia untuk Anda"}
              {selectedCategory === "signature" && "Koleksi kopi signature khas Mahato"}
              {selectedCategory === "espresso" && "Berbagai variasi espresso-based coffee"}
              {selectedCategory === "non-coffee" && "Minuman segar tanpa kafein"}
              {selectedCategory === "yogurt" && "Yogurt sehat dengan berbagai topping"}
              {selectedCategory === "tea" && "Koleksi teh premium dengan rasa autentik"}
              {selectedCategory === "bakmi" && "Bakmi dengan cita rasa khas Indonesia"}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative group">
                {item.popular && (
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground z-10">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                )}
                
                <div className="aspect-square bg-muted rounded-t-lg overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="flex justify-between items-start">
                    <span className="text-lg font-semibold text-foreground">{item.name}</span>
                    <span className="text-primary font-bold">Rp {item.price}</span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href="https://wa.me/6282246239567" target="_blank" rel="noopener noreferrer">
                      Pesan Sekarang
                    </a>
                  </Button>
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