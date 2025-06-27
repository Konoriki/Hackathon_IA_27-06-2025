import { useState } from 'react';
import { FaCar, FaUsers, FaTrain, FaPlane } from 'react-icons/fa';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CO2Calculator = () => {
  const [distance, setDistance] = useState<number>(100);
  const [passengers, setPassengers] = useState<number>(3);

  // CO2 emissions in g/km per person
  const emissions = {
    carSolo: 170,
    carShared: 170 / passengers,
    train: 14,
    plane: 285,
  };

  const totalEmissions = {
    carSolo: emissions.carSolo * distance,
    carShared: emissions.carShared * distance,
    train: emissions.train * distance,
    plane: emissions.plane * distance,
  };

  const data = {
    labels: ['Voiture Solo', 'Covoiturage', 'Train', 'Avion'],
    datasets: [
      {
        label: 'Émissions CO₂ (g)',
        data: [
          totalEmissions.carSolo,
          totalEmissions.carShared,
          totalEmissions.train,
          totalEmissions.plane,
        ],
        backgroundColor: [
          'rgba(239, 68, 68, 0.7)',
          'rgba(34, 197, 94, 0.7)',
          'rgba(59, 130, 246, 0.7)',
          'rgba(168, 85, 247, 0.7)',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Comparaison des émissions CO₂ par mode de transport',
      },
    },
  };

  return (
    <section id="calculator" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">Calcul ton Impact CO₂</h2>
        <p className="text-center text-gray-600 mb-8">
          Comparez l'impact environnemental de différents modes de transport  
        </p>

        <div className="eco-card mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Distance (km)
              </label>
              <input
                type="number"
                min="1"
                value={distance}
                onChange={(e) => setDistance(Math.max(1, parseInt(e.target.value) || 0))}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blabla-green-500 focus:ring-blabla-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nombre de passagers en covoiturage
              </label>
              <input
                type="number"
                min="2"
                max="8"
                value={passengers}
                onChange={(e) => setPassengers(Math.min(8, Math.max(2, parseInt(e.target.value) || 2)))}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blabla-green-500 focus:ring-blabla-green-500"
              />
            </div>
          </div>
        </div>

        <div className="eco-card">
          <Bar options={options} data={data} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {Object.entries(totalEmissions).map(([key, value]) => {
            const icons = {
              carSolo: <FaCar />,
              carShared: <FaUsers />,
              train: <FaTrain />,
              plane: <FaPlane />,
            };
            const labels = {
              carSolo: 'Voiture Solo',
              carShared: 'Covoiturage',
              train: 'Train',
              plane: 'Avion',
            };

            return (
              <div key={key} className="eco-card text-center">
                <div className="text-3xl mb-2 text-blabla-green-500 flex justify-center">
                  {icons[key as keyof typeof icons]}
                </div>
                <h3 className="font-semibold text-gray-900">
                  {labels[key as keyof typeof labels]}
                </h3>
                <p className="text-2xl font-bold text-blabla-green-600">
                  {Math.round(value)}g
                </p>
                <p className="text-sm text-gray-500">de CO₂</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CO2Calculator; 