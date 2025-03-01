import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Facebook, Instagram, Youtube, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Treżor.io</h3>
            <p className="mb-4">
              The most trusted hardware wallet in the world. Secure your crypto assets with <a href="https://trezor.io/start" className="underline">Treżor.io/start</a>.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://twitter.com/trezor" 
                whileHover={{ y: -3 }}
                className="hover:text-green-300"
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a 
                href="https://facebook.com/trezor" 
                whileHover={{ y: -3 }}
                className="hover:text-green-300"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a 
                href="https://instagram.com/trezor" 
                whileHover={{ y: -3 }}
                className="hover:text-green-300"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a 
                href="https://youtube.com/trezor" 
                whileHover={{ y: -3 }}
                className="hover:text-green-300"
              >
                <Youtube size={20} />
              </motion.a>
              <motion.a 
                href="https://github.com/trezor" 
                whileHover={{ y: -3 }}
                className="hover:text-green-300"
              >
                <Github size={20} />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="https://trezor.io/trezor-model-t" className="hover:text-green-300">Trezor Model T</a></li>
              <li><a href="https://trezor.io/trezor-model-one" className="hover:text-green-300">Trezor Model One</a></li>
              <li><a href="https://trezor.io/trezor-safe" className="hover:text-green-300">Trezor Safe</a></li>
              <li><a href="https://trezor.io/trezor-suite" className="hover:text-green-300">Trezor Suite</a></li>
              <li><a href="https://trezor.io/start" className="hover:text-green-300">Treżor.io/start</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://trezor.io/support" className="hover:text-green-300">Support</a></li>
              <li><a href="https://trezor.io/learn" className="hover:text-green-300">Learn</a></li>
              <li><a href="https://trezor.io/blog" className="hover:text-green-300">Blog</a></li>
              <li><a href="https://trezor.io/ambassador" className="hover:text-green-300">Ambassador Program</a></li>
              <li><a href="https://trezor.io/start" className="hover:text-green-300">Treżor.io/start</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="https://trezor.io/about" className="hover:text-green-300">About Us</a></li>
              <li><a href="https://trezor.io/jobs" className="hover:text-green-300">Careers</a></li>
              <li><a href="https://trezor.io/press" className="hover:text-green-300">Press</a></li>
              <li><a href="https://trezor.io/privacy" className="hover:text-green-300">Privacy Policy</a></li>
              <li><a href="https://trezor.io/terms" className="hover:text-green-300">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-800 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} Treżor. All rights reserved. <a href="https://trezor.io/start" className="underline">Treżor.io/start</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;