import Navigation from './components/Navigation';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';


function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;