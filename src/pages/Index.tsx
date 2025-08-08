import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="Beranda"
        description="Selamat datang di Mahato Coffee Rooftop. Nikmati kopi terbaik dengan pemandangan kota yang menakjubkan dari rooftop kami yang nyaman dan estetik."
        keywords="mahato coffee, coffee shop, rooftop, kopi, jakarta, palmerah"
      />
      <Header />
      <Hero />
      <div data-aos="fade-up">
        <About />
      </div>
      <div data-aos="fade-up">
        <Menu />
      </div>
      <div data-aos="fade-up">
        <Location />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
