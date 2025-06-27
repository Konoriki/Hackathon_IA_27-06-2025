import { FaArrowRight, FaCalendar, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: 'Comment BlaBlaCar contribue à réduire l\'empreinte carbone',
      excerpt: 'Découvrez l\'impact positif du covoiturage sur l\'environnement et comment nous participons à la transition écologique.',
      author: 'Équipe BlaBlaCar',
      date: '2024-02-20',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      category: 'Environnement',
    },
    {
      id: 2,
      title: 'Les nouveaux défis écologiques dans le transport',
      excerpt: 'Analyse des enjeux actuels et futurs de la mobilité durable, avec un focus sur les solutions innovantes.',
      author: 'Marie Dubois',
      date: '2024-02-15',
      image: 'https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      category: 'Innovation',
    },
    {
      id: 3,
      title: 'Success Story : 1 million de tonnes de CO₂ économisées',
      excerpt: 'Retour sur une année record pour la communauté BlaBlaCar et son impact sur l\'environnement.',
      author: 'Pierre Martin',
      date: '2024-02-10',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
      category: 'Actualités',
    },
  ];

  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">Actualités & Blog</h2>
        <p className="text-center text-gray-600 mb-12">
          Restez informé des dernières actualités sur l'écologie et la mobilité durable
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              className="eco-card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="relative h-48 mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white rounded-full text-sm font-medium text-blabla-green-600">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <FaUser className="mr-2" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <FaCalendar className="mr-2" />
                      {new Date(article.date).toLocaleDateString('fr-FR')}
                    </div>
                  </div>
                </div>

                <button className="mt-4 flex items-center text-blabla-green-600 hover:text-blabla-green-700 transition-colors duration-200">
                  Lire la suite
                  <FaArrowRight className="ml-2" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="eco-button">
            Voir tous les articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog; 