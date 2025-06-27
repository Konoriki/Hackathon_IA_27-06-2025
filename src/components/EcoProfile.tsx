import { FaMedal, FaTree, FaLeaf } from 'react-icons/fa';
import { motion } from 'framer-motion';

const EcoProfile = () => {
  // Mock data - in a real app, this would come from an API
  const profile = {
    score: 850,
    level: 'Éco-Champion',
    treesEquivalent: 12,
    co2Saved: 1250,
    badges: [
      { name: 'Premier Covoiturage', icon: <FaLeaf />, date: '2024-01-15' },
      { name: 'Super Économiseur', icon: <FaMedal />, date: '2024-02-01' },
      { name: 'Protecteur de la Planète', icon: <FaTree />, date: '2024-02-15' },
    ],
  };

  const scorePercentage = (profile.score / 1000) * 100;

  return (
    <section id="profile" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">Votre Profil Éco-Conducteur</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Score and Level Card */}
          <div className="eco-card">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Score Écologique</h3>
            <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden mb-4">
              <motion.div
                className="absolute top-0 left-0 h-full bg-blabla-green-500"
                initial={{ width: 0 }}
                animate={{ width: `${scorePercentage}%` }}
                transition={{ duration: 1 }}
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold text-blabla-green-600">{profile.score}</span>
              <span className="text-lg font-medium text-gray-600">{profile.level}</span>
            </div>
          </div>

          {/* Impact Stats Card */}
          <div className="eco-card">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Votre Impact</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <FaTree className="w-8 h-8 mx-auto text-blabla-green-500 mb-2" />
                <div className="text-2xl font-bold text-gray-900">{profile.treesEquivalent}</div>
                <div className="text-sm text-gray-600">Arbres équivalents</div>
              </div>
              <div className="text-center">
                <FaLeaf className="w-8 h-8 mx-auto text-blabla-green-500 mb-2" />
                <div className="text-2xl font-bold text-gray-900">{profile.co2Saved}kg</div>
                <div className="text-sm text-gray-600">CO₂ économisé</div>
              </div>
            </div>
          </div>
        </div>

        {/* Badges Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Vos Badges</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {profile.badges.map((badge, index) => (
              <motion.div
                key={badge.name}
                className="eco-card text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-4xl text-blabla-green-500 mb-2 flex justify-center">
                  {badge.icon}
                </div>
                <h4 className="font-medium text-gray-900">{badge.name}</h4>
                <p className="text-sm text-gray-500">
                  Obtenu le {new Date(badge.date).toLocaleDateString('fr-FR')}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <button className="eco-button">
            Partager Mon Impact
          </button>
        </div>
      </div>
    </section>
  );
};

export default EcoProfile; 