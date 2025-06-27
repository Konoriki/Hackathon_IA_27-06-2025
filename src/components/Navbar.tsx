import { useState } from 'react';
import { FaBars, FaTimes, FaShareAlt } from 'react-icons/fa';
import logoBlablacar from '../assets/logo-blablacar-05.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Accueil', href: '#home' },
    { label: 'Calculateur CO₂', href: '#calculator' },
    { label: 'Profil Éco', href: '#profile' },
    { label: 'Écogestes', href: '#ecogestes' },
    { label: 'Blog', href: '#blog' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img src={logoBlablacar} alt="BlaBlaCar Logo" className="h-8 w-8 object-contain" />
              <span className="ml-2 text-xl font-bold text-gray-900">BlaBlaCar</span>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-blabla-green-500 transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}

              <div className="flex items-center space-x-3 ml-4">
                <button className="px-4 py-2 text-blabla-green-600 hover:text-blabla-green-700 font-medium transition-colors duration-200">
                  Se connecter
                </button>
                <button className="px-4 py-2 bg-blabla-blue-500 text-white font-medium rounded-lg hover:bg-blabla-blue-600 transition-colors duration-200">
                  S'inscrire
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <button className="px-4 py-2 bg-blabla-green-500 text-white text-sm font-semibold rounded-full hover:bg-blabla-green-600 transition-colors duration-200 flex items-center">
                <FaShareAlt className="mr-1" />
                Partager
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                {isOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 text-gray-600 hover:text-blabla-green-500 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex flex-col space-y-2 mt-4 px-3">
                  <button className="w-full px-4 py-2 text-blabla-green-600 hover:text-blabla-green-700 font-medium transition-colors duration-200 text-center border border-blabla-green-600 rounded-lg">
                    Se connecter
                  </button>
                  <button className="w-full px-4 py-2 bg-blabla-blue-500 text-white font-medium rounded-lg hover:bg-blabla-blue-600 transition-colors duration-200">
                    S'inscrire
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 