import { motion } from 'framer-motion';
import { FaLeaf, FaUsers, FaGlobeEurope } from 'react-icons/fa';

const Hero = () => {
  const stats = [
    {
      icon: <FaUsers />,
      value: '100M+',
      label: 'Utilisateurs',
    },
    {
      icon: <FaLeaf />,
      value: '1.6M',
      label: 'Tonnes de CO₂ économisées',
    },
    {
      icon: <FaGlobeEurope />,
      value: '22',
      label: 'Pays',
    },
  ];

  return (
    <section id="home" className="relative bg-gradient-to-b from-blabla-green-50 to-white pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Voyagez{' '}
              <span className="text-blabla-green-600">écologique</span>
              <br />
              avec BlaBlaCar
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Rejoignez la plus grande communauté de covoiturage et participez à la
              réduction de l'empreinte carbone des transports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="eco-button">
                Commencer à covoiturer
              </button>
              <button className="px-6 py-3 bg-white text-blabla-green-600 rounded-lg border-2 border-blabla-green-600 hover:bg-blabla-green-50 transition-colors duration-200">
                Calculer mon impact
              </button>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="eco-card text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.2 }}
              >
                <div className="text-3xl text-blabla-green-500 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero; 