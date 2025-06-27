import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaLeaf } from 'react-icons/fa';

const Footer = () => {
  const navigation = {
    main: [
      { name: 'À propos', href: '#' },
      { name: 'Blog', href: '#blog' },
      { name: 'Carrières', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Confidentialité', href: '#' },
    ],
    social: [
      { name: 'Facebook', href: '#', icon: FaFacebook },
      { name: 'Twitter', href: '#', icon: FaTwitter },
      { name: 'Instagram', href: '#', icon: FaInstagram },
      { name: 'LinkedIn', href: '#', icon: FaLinkedin },
    ],
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <FaLeaf className="h-8 w-8 text-blabla-green-500" />
              <span className="ml-2 text-xl font-bold text-gray-900">BlaBlaCar Eco</span>
            </div>
            <p className="mt-4 text-gray-600 max-w-md">
              Ensemble, réduisons notre empreinte carbone et construisons un avenir
              plus durable pour la mobilité.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Navigation
            </h3>
            <ul className="mt-4 space-y-4">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-blabla-green-600 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Suivez-nous
            </h3>
            <div className="mt-4 flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-blabla-green-600 transition-colors duration-200"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} BlaBlaCar Eco. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 