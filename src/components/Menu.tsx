import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Coffee, Utensils, Cookie } from "lucide-react";

const Menu = () => {
  const menuItems = {
    coffee: [
      { name: "Mahato Signature", price: "35K", description: "Blend kopi arabika premium dengan sentuhan spesial", popular: true },
      { name: "Espresso Single", price: "18K", description: "Shot espresso murni dari biji arabika pilihan" },
      { name: "Americano", price: "22K", description: "Espresso dengan air panas, rasa kopi yang kuat" },
      { name: "Cappuccino", price: "28K", description: "Espresso dengan steamed milk dan foam lembut" },
      { name: "Latte Art", price: "32K", description: "Latte dengan seni foam yang indah" },
      { name: "V60 Pour Over", price: "40K", description: "Manual brewing untuk cita rasa maksimal", popular: true }
    ],
    food: [
      { name: "Croissant Butter", price: "25K", description: "Croissant segar dengan butter premium" },
      { name: "Sandwich Club", price: "45K", description: "Sandwich isi ayam dengan sayuran segar" },
      { name: "Pasta Carbonara", price: "55K", description: "Pasta dengan saus carbonara creamy" },
      { name: "Nasi Goreng Special", price: "42K", description: "Nasi goreng dengan bumbu khas" }
    ],
    dessert: [
      { name: "Tiramisu", price: "35K", description: "Dessert klasik Italia dengan kopi" },
      { name: "Cheese Cake", price: "32K", description: "Kue keju lembut dengan topping berry" },
      { name: "Brownies", price: "28K", description: "Brownies coklat dengan es krim vanilla" }
    ]
  };

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary">Menu Kami</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Cita Rasa yang Menggugah Selera
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nikmati berbagai pilihan kopi arabika premium dan hidangan lezat yang dipersembahkan khusus untuk Anda
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Coffee Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Coffee className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-primary">Kopi Arabika</h3>
            </div>
            <div className="space-y-4">
              {menuItems.coffee.map((item, index) => (
                <Card key={index} className="hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-foreground">{item.name}</h4>
                        {item.popular && (
                          <Badge variant="default" className="text-xs bg-accent">Popular</Badge>
                        )}
                      </div>
                      <span className="font-bold text-primary">{item.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Food Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Utensils className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-primary">Makanan</h3>
            </div>
            <div className="space-y-4">
              {menuItems.food.map((item, index) => (
                <Card key={index} className="hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground">{item.name}</h4>
                      <span className="font-bold text-primary">{item.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Dessert Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Cookie className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-primary">Dessert</h3>
            </div>
            <div className="space-y-4">
              {menuItems.dessert.map((item, index) => (
                <Card key={index} className="hover:shadow-soft transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-foreground">{item.name}</h4>
                      <span className="font-bold text-primary">{item.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="ocean" size="lg">
            Lihat Menu Lengkap
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;