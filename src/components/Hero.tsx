import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-12 w-12 text-yellow-400 mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold">
              AI Interior Design
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl mb-4 text-blue-100">
            Transform Your Space with Our Premium Tiles & Sanitary Products
          </p>
          
          <p className="text-lg mb-8 text-blue-200 max-w-2xl mx-auto">
            Upload your unfinished interior photo and see how it looks with our beautiful floor tiles, 
            wall tiles, roof tiles, and modern sanitary fixtures - powered by AI technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#upload"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Try AI Design Now
            </motion.a>
            
            <motion.a
              href="#products"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Products
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="h-6 w-6 text-white" />
      </motion.div>
    </section>
  );
};

export default Hero;