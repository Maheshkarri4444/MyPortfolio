import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SlideIn } from './components/ui/transitions';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen px-4 text-white bg-black/30">
      <div className="w-full max-w-2xl text-center">
        <SlideIn>
          <motion.div
            className="text-[12rem] md:text-[16rem] font-bold leading-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-red-700">4</span>
            <span className="text-white/90">0</span>
            <span className="text-red-600">4</span>
          </motion.div>
        </SlideIn>

        <motion.h2 
          className="mb-4 text-2xl font-bold text-white/90 md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Page Not Found
        </motion.h2>

        <motion.p 
          className="mb-8 text-lg text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 px-6 py-3 text-white transition-colors duration-300 bg-red-700 rounded-lg hover:bg-red-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft size={20} />
          Back to Home
        </motion.button>
      </div>
    </div>
  );
};

export default NotFound;