import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        跳转到主要内容
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Services />
        <Projects />
        <Process />
        <Pricing />
        <WhyChooseUs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
