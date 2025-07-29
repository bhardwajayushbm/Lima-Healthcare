import Navigation from './components/Navigation';
import Hero_ from './components/Hero_';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero_ />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;