import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    ecoPoints: number; // Points d'écologie de 1 à 4
  }[];
  feedback: string[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "Yo ! Pour tes déplacements quotidiens, tu gères ça comment ? 🚗",
    options: [
      { text: "Je combine vélo et transports en commun", ecoPoints: 4 },
      { text: "Je privilégie les transports en commun quand c'est possible", ecoPoints: 3 },
      { text: "Je fais du covoiturage régulièrement", ecoPoints: 3 },
      { text: "Je prends ma voiture en solo, j'ai pas trop le choix avec mes horaires", ecoPoints: 1 }
    ],
    feedback: [
      "Wow, t'es un vrai warrior de la mobilité douce ! 🚲",
      "Les transports en commun, c'est déjà super cool ! 🚌",
      "Le covoiturage, ça c'est l'esprit ! 🚗",
      "Hey, on comprend les contraintes, mais peut-être tenter le covoiturage de temps en temps ? 😊"
    ]
  },
  {
    id: 2,
    question: "Quand tu fais tes courses, c'est quoi ton mood ? 🛍️",
    options: [
      { text: "Je prends mon temps, je compare les origines et la saisonnalité", ecoPoints: 4 },
      { text: "J'achète local quand je peux, mais parfois je craque", ecoPoints: 3 },
      { text: "Je fonce sur les promos sans trop réfléchir", ecoPoints: 1 },
      { text: "Je commande tout en ligne, c'est plus simple", ecoPoints: 2 }
    ],
    feedback: [
      "T'es le Sherlock Holmes des courses responsables ! 🔍",
      "Le local c'est idéal, et on a tous nos petits craquages ! 🌱",
      "Les promos c'est tentant, mais check un peu l'origine la prochaine fois ? 😉",
      "Le online c'est pratique, mais pense aux petits commerces de quartier ! 🏪"
    ]
  },
  {
    id: 3,
    question: "Pour ton café/thé du matin au bureau, tu gères ça comment ? ☕",
    options: [
      { text: "J'ai ma tasse réutilisable et mon café équitable", ecoPoints: 4 },
      { text: "Gobelet jetable de la machine, mais je recycle", ecoPoints: 2 },
      { text: "Je vais au café d'à côté avec ma tasse réutilisable", ecoPoints: 3 },
      { text: "Je prends à emporter, mais en carton recyclable", ecoPoints: 1 }
    ],
    feedback: [
      "La tasse réutilisable + café équitable, c'est le combo gagnant ! Tu fais plaisir à la planète ET aux producteurs. Bien joué champion ! ♻️",
      "Gobelet jetable de la machine, mais je recycle, c'est déjà super cool ! Bien joué ! 🌱",
      "Je vais au café d'à côté avec ma tasse réutilisable, c'est une bonne idée ! 🌱",
      "Je prends à emporter, mais en carton recyclable, c'est un geste écologique ! Bien joué ! 🌱"
    ]
  },
  {
    id: 4,
    question: "Le week-end, pour tes petites escapades... 🌳",
    options: [
      { text: "Je découvre les spots nature près de chez moi à pied/vélo", ecoPoints: 4 },
      { text: "Je pars plus loin mais en train quand c'est possible", ecoPoints: 3 },
      { text: "Je prends la voiture mais je fais du covoiturage", ecoPoints: 2 },
      { text: "Week-end tranquille à la maison, zéro impact", ecoPoints: 4 }
    ],
    feedback: [
      "Explorer son territoire à pied ou à vélo, c'est la base ! Mais le train et le covoiturage, c'est aussi des super alternatives. L'important c'est de bouger malin ! 🚶‍♂️",
      "Le train et le covoiturage, c'est aussi des super alternatives. L'important c'est de bouger malin ! 🚉🚗",
      "Le covoiturage, ça c'est l'esprit ! 🚗",
      "Week-end tranquille à la maison, zéro impact, c'est le top ! 🌱"
    ]
  },
  {
    id: 5,
    question: "Pour tes repas, tu t'organises comment ? 🥗",
    options: [
      { text: "Je planifie mes menus, zéro gaspi et local au max", ecoPoints: 4 },
      { text: "Je mange moins de viande et je privilégie la qualité", ecoPoints: 3 },
      { text: "J'achète bio quand je peux", ecoPoints: 3 },
      { text: "Je mange varié sans trop me prendre la tête", ecoPoints: 2 }
    ],
    feedback: [
      "La planification zéro gaspi, c'est le niveau expert ! Mais réduire sa conso de viande et choisir la qualité, c'est déjà un super pas. Chaque petit geste compte ! 🥬",
      "Mange moins de viande et privilégie la qualité, c'est déjà un super pas ! 🥬",
      "J'achète bio quand je peux, c'est super ! Bien joué ! 🌱",
      "Mange varié sans trop me prendre la tête, c'est super ! Bien joué ! 🌱"
    ]
  },
  {
    id: 6,
    question: "Niveau shopping fringues, quelle est ta stratégie ? 👕",
    options: [
      { text: "Je privilégie la seconde main et je répare", ecoPoints: 2 },
      { text: "J'achète moins mais de meilleure qualité", ecoPoints: 3 },
      { text: "Je fais attention aux labels éthiques", ecoPoints: 4 },
      { text: "J'attends les soldes pour renouveler ma garde-robe", ecoPoints: 1 }
    ],
    feedback: [
      "La seconde main et la réparation, c'est le duo gagnant ! Mais acheter moins et mieux ou faire attention aux labels, c'est aussi super responsable. L'important c'est de consommer conscient ! 👔",
      "Acheter moins mais de meilleure qualité, c'est déjà un super pas ! 👕",
      "Faire attention aux labels éthiques, c'est super ! Bien joué ! 👔",
      "J'attends les soldes pour renouveler ma garde-robe, c'est pas mal du tout ! 👕"
    ]
  }
];

const getEcoLevel = (score: number) => {
  const maxScore = questions.length * 4; // Score maximum possible
  const percentage = (score / maxScore) * 100;
  
  if (percentage >= 90) {
    return {
      title: "🌟 MÉGA WARRIOR DE L'ÉCOLOGIE !",
      message: "T'es tellement écolo que les arbres te saluent quand tu passes ! Greta serait fière de toi ! 🌿",
      emoji: "🦸‍♂️"
    };
  } else if (percentage >= 70) {
    return {
      title: "🌱 ECO-WARRIOR EN FORMATION !",
      message: "Pas mal du tout ! Encore quelques efforts et tu pourras postuler chez Greenpeace ! 😎",
      emoji: "🌱"
    };
  } else if (percentage >= 50) {
    return {
      title: "😅 APPRENTI ÉCOLO !",
      message: "T'es sur la bonne voie bestie ! La planète commence à t'apprécier, continue comme ça ! 🌍",
      emoji: "🌱"
    };
  } else {
    return {
      title: "🤔 ROOKIE DE L'ÉCOLOGIE",
      message: "Allez, on va pas se mentir, t'as une marge de progression ! Mais t'es là, c'est déjà un début ! 🌱",
      emoji: "🌱"
    };
  }
};

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [ecoScore, setEcoScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswerClick = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(answerIndex);
    
    // Ajouter les points d'écologie de la réponse choisie
    setEcoScore(ecoScore + questions[currentQuestion].options[answerIndex].ecoPoints);
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);
    setSelectedAnswer(null);
    
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setEcoScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  const ecoLevel = getEcoLevel(ecoScore);

  return (
    <section className="py-12 bg-gradient-to-br from-blabla-green-50 to-blabla-beige-50 rounded-lg shadow-lg my-8">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Quiz Écolo : Quel genre de warrior es-tu ? 🌍
        </h2>

        {showScore ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="text-6xl mb-4">{ecoLevel.emoji}</div>
            <h3 className="text-2xl font-bold mb-4">
              {ecoLevel.title}
            </h3>
            <p className="text-xl mb-4">
              Score écolo : {ecoScore} / {questions.length * 4}
            </p>
            <p className="mb-6 text-gray-600 text-lg">
              {ecoLevel.message}
            </p>
            <button
              onClick={resetQuiz}
              className="bg-blabla-green-500 text-white px-6 py-2 rounded-full hover:bg-blabla-green-600 transition-colors duration-200"
            >
              Retenter le quiz ? 🎯
            </button>
          </motion.div>
        ) : (
          <div>
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Question {currentQuestion + 1}/{questions.length}</span>
                <span>Points écolo : {ecoScore}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  className="bg-blabla-green-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-800">
                {questions[currentQuestion].question}
              </h3>

              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswerClick(index)}
                    className={`w-full p-4 text-left rounded-lg transition-colors duration-200 
                      ${selectedAnswer === null 
                        ? 'hover:bg-gray-100 bg-white' 
                        : selectedAnswer === index
                          ? 'bg-blabla-green-100 border-blabla-green-500'
                          : 'bg-white'
                      } border-2 ${
                        selectedAnswer !== null ? 'cursor-default' : 'cursor-pointer'
                      }`}
                    disabled={selectedAnswer !== null}
                  >
                    {option.text}
                  </motion.button>
                ))}
              </div>

              {showFeedback && selectedAnswer !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6"
                >
                  <div className="p-4 bg-blue-50 rounded-lg text-blue-800 mb-4 text-lg">
                    {questions[currentQuestion].feedback[selectedAnswer]}
                  </div>
                  
                  <motion.button
                    onClick={handleNextQuestion}
                    className="w-full flex items-center justify-center space-x-2 bg-blabla-green-500 text-white px-6 py-3 rounded-full hover:bg-blabla-green-600 transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{currentQuestion + 1 === questions.length ? "Voir mon niveau écolo ! 🎉" : "Question suivante"}</span>
                    <FaArrowRight className="ml-2" />
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Quiz; 