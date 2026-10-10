import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F5F1E9] selection:bg-[#C89B52] selection:text-[#0B0B0B]">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Gallery />
        <Location />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
