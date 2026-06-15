import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import About from "../components/About";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
<Stats />
<About />

<Services />
      <Footer />
    </>
  );
}

export default Home;