import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Quiz from './components/Quiz';
import CO2Calculator from './components/CO2Calculator';
import EcoProfile from './components/EcoProfile';
import EcoGestes from './components/EcoGestes';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <main className="w-full max-w-6xl mx-auto">
          <Hero />
          <Quiz />
          <CO2Calculator />
          <EcoGestes />
          <EcoProfile />
          <Blog />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;