import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
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
