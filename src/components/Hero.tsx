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
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Bien arrivée à <span className="text-blabla-green-600">destination</span> ?
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Rejoignez la plus grande communauté de covoiturage et participez à la
            réduction de l'empreinte carbone des transports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="eco-button">
              Commencer à covoiturer
            </button>
            <a href="#calculator" className="px-6 py-3 bg-white text-blabla-green-600 rounded-lg border-2 border-blabla-green-600 hover:bg-blabla-green-50 transition-colors duration-200 text-center">
              Calculer mon impact
            </a>
          </div>
        </motion.div>

        {/* About BlaBlaCar Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <blockquote className="text-4xl font-bold italic mb-6 font-nourd m-6">
            « Faire Paris-Marseille sans culpabiliser devant un arbre, c’est possible. »
          </blockquote>
          <div className="max-w-4xl mx-auto bg-white/90 rounded-xl shadow-eco p-8 text-lg text-gray-800 leading-relaxed border-l-8 border-blabla-green-300">
            <p className="mb-6">
              Chez <span className="font-bold text-blabla-green-600">BlaBlaCar</span>, nous croyons qu’il est possible de voyager loin sans alourdir son empreinte carbone. <span className="font-semibold text-blabla-green-700">Chaque trajet partagé</span>, chaque siège occupé, chaque rencontre sur la route contribue à réduire l’impact environnemental des transports.
            </p>
            <p className="mb-6">
              <span className="font-bold text-blabla-blue-600">Leader mondial du covoiturage</span>, BlaBlaCar transforme chaque déplacement en un geste concret pour la planète : <span className="font-semibold text-blabla-green-700">moins de voitures vides</span>, moins d’émissions de CO₂, plus de convivialité et d’économies pour tous.
            </p>
            <p className="mb-6">
              En choisissant BlaBlaCar, vous rejoignez une <span className="font-bold text-blabla-green-600">communauté engagée</span> qui réinvente la mobilité : plus solidaire, plus responsable, plus durable. Ensemble, faisons du covoiturage le moteur d’une transition écologique ambitieuse et accessible à tous.
            </p>
            <p className="text-right font-semibold text-blabla-green-700">
              Parce qu’aujourd’hui, voyager malin, c’est aussi voyager plus vert.
            </p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            BlaBlaCar en quelques chiffres
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="eco-card text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.2 }}
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
          </div>
        </motion.div>

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