import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CO2Calculator from './components/CO2Calculator';
import EcoProfile from './components/EcoProfile';
import EcoGestes from './components/EcoGestes';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Navbar />
      <main>
        <Hero />
        <CO2Calculator />
        <EcoProfile />
        <EcoGestes />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
