import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Wallet } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-gradient text-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-white">Treżor.io/start</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            The future of cryptocurrency security begins here
          </p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col md:flex-row justify-center gap-6 mb-12"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-xl flex flex-col items-center"
            >
              <ShieldCheck size={48} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Maximum Security</h3>
              <p>Your assets deserve the best protection available</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-xl flex flex-col items-center"
            >
              <Lock size={48} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Full Control</h3>
              <p>You are the only one with access to your funds</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-xl flex flex-col items-center"
            >
              <Wallet size={48} className="mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Setup</h3>
              <p>Begin your journey with <a href="https://trezor.io/start" className="underline">Treżor.io/start</a></p>
            </motion.div>
          </motion.div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-green-800 font-bold py-3 px-8 rounded-full text-lg shadow-lg"
          >
            Get Started Now
          </motion.button>
        </motion.div>
      </div>
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-white/10"
        animate={{
          y: [0, 30, 0],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-white/10"
        animate={{
          y: [0, -40, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </section>
  );
};

export default HeroSection;