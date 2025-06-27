import { useState } from 'react';
import { FaCheckCircle, FaLeaf, FaCar, FaThermometerHalf } from 'react-icons/fa';
import { motion } from 'framer-motion';

const EcoGestes = () => {
  const [] = useState(0);

  const weeklyTips = [
    {
      id: 1,
      title: 'Couper le moteur à l\'arrêt',
      description: 'Éteignez votre moteur lors d\'arrêts de plus de 30 secondes pour réduire votre consommation.',
      icon: <FaCar />,
      impact: '- 200g CO₂ par jour',
      completed: true,
    },
    {
      id: 2,
      title: 'Optimiser la climatisation',
      description: 'Utilisez la climatisation de manière raisonnée et privilégiez la ventilation naturelle.',
      icon: <FaThermometerHalf />,
      impact: '- 150g CO₂ par trajet',
      completed: false,
    },
    {
      id: 3,
      title: 'Éco-conduite',
      description: 'Adoptez une conduite souple et anticipez les freinages pour économiser du carburant.',
      icon: <FaLeaf />,
      impact: '- 15% de consommation',
      completed: false,
    },
  ];

  const challenges = [
    {
      title: 'Défi de la Semaine',
      description: 'Réalisez 3 covoiturages cette semaine',
      progress: 2,
      total: 3,
      reward: '200 points éco',
    },
    {
      title: 'Défi du Mois',
      description: 'Économisez 5kg de CO₂',
      progress: 3.5,
      total: 5,
      reward: 'Badge Éco-Warrior',
    },
  ];

  return (
    <section id="ecogestes" className="py-20 px-4 ">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">Écogestes BlaBla</h2>
        <p className="text-center text-gray-600 mb-12">
          Découvre nos conseils pour une conduite plus écologique
        </p>

        {/* Weekly Tips */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {weeklyTips.map((tip, index) => (
            <motion.div
              key={tip.id}
              className="eco-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blabla-green-100 flex items-center justify-center text-blabla-green-500 text-2xl">
                    {tip.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{tip.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-blabla-green-600">
                      {tip.impact}
                    </span>
                    {tip.completed && (
                      <FaCheckCircle className="text-blabla-green-500" />
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Active Challenges */}
        <div className="eco-card">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Défis en Cours
          </h3>
          <div className="space-y-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-medium text-gray-900">{challenge.title}</h4>
                    <p className="text-sm text-gray-600">{challenge.description}</p>
                  </div>
                  <span className="text-sm font-medium text-blabla-green-600">
                    {challenge.reward}
                  </span>
                </div>
                <div className="relative pt-1">
                  <div className="flex mb-2 items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold inline-block text-blabla-green-600">
                        {(challenge.progress / challenge.total * 100).toFixed(0)}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                      transition={{ duration: 1 }}
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blabla-green-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoGestes; 