import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Quelle est la réduction moyenne des émissions de CO2 lors d'un trajet en covoiturage par rapport à un trajet solo ?",
    options: [
      "10-20%",
      "30-40%",
      "50-70%",
      "80-90%"
    ],
    correctAnswer: 2,
    explanation: "Le covoiturage permet de réduire les émissions de CO2 de 50-70% en moyenne par passager !"
  },
  {
    id: 2,
    question: "Combien de voitures en moyenne un covoitureur régulier permet-il d'éviter sur les routes ?",
    options: [
      "1 voiture",
      "3 voitures",
      "5 voitures",
      "7 voitures"
    ],
    correctAnswer: 1,
    explanation: "En moyenne, un covoitureur régulier permet d'éviter 3 voitures sur les routes !"
  },
  {
    id: 3,
    question: "Quel pourcentage des émissions de CO2 en France provient des transports ?",
    options: [
      "15%",
      "31%",
      "45%",
      "60%"
    ],
    correctAnswer: 1,
    explanation: "Les transports représentent 31% des émissions de CO2 en France, d'où l'importance du covoiturage !"
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerClick = (answerIndex: number) => {
    if (selectedAnswer !== null) return; // Empêcher de répondre plusieurs fois
    setSelectedAnswer(answerIndex);
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    setSelectedAnswer(null);
    
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  return (
    <section className="py-12 bg-gradient-to-br from-blabla-green-50 to-blabla-beige-50 rounded-lg shadow-lg my-8">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Quiz Éco-Mobilité
        </h2>

        {showScore ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold mb-4">
              Score final : {score}/{questions.length}
            </h3>
            <p className="mb-6 text-gray-600">
              {score === questions.length 
                ? "Parfait ! Vous êtes un expert de l'éco-mobilité !" 
                : "Continuez d'apprendre sur l'impact environnemental des transports !"}
            </p>
            <button
              onClick={resetQuiz}
              className="bg-blabla-green-500 text-white px-6 py-2 rounded-full hover:bg-blabla-green-600 transition-colors duration-200"
            >
              Recommencer le quiz
            </button>
          </motion.div>
        ) : (
          <div>
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Question {currentQuestion + 1}/{questions.length}</span>
                <span>Score: {score}</span>
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
                    className={`w-full p-4 text-left rounded-lg transition-colors duration-200 ${
                      selectedAnswer === null
                        ? 'hover:bg-gray-100 bg-white'
                        : selectedAnswer === index
                        ? index === questions[currentQuestion].correctAnswer
                          ? 'bg-green-100 border-green-500'
                          : 'bg-red-100 border-red-500'
                        : index === questions[currentQuestion].correctAnswer
                        ? 'bg-green-100 border-green-500'
                        : 'bg-white'
                    } border-2 ${
                      selectedAnswer !== null ? 'cursor-default' : 'cursor-pointer'
                    }`}
                    disabled={selectedAnswer !== null}
                  >
                    {option}
                  </motion.button>
                ))}
              </div>

              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6"
                >
                  <div className="p-4 bg-blue-50 rounded-lg text-blue-800 mb-4">
                    {questions[currentQuestion].explanation}
                  </div>
                  
                  <motion.button
                    onClick={handleNextQuestion}
                    className="w-full flex items-center justify-center space-x-2 bg-blabla-green-500 text-white px-6 py-3 rounded-full hover:bg-blabla-green-600 transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{currentQuestion + 1 === questions.length ? "Voir mon score" : "Question suivante"}</span>
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