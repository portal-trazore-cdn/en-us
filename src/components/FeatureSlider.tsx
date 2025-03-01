import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Shield, Key, Smartphone, RefreshCw, Globe, Lock } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const features = [
  {
    title: "Military-Grade Security",
    description: "Treżor.io/start provides you with the highest level of security for your digital assets with advanced cryptographic protocols.",
    icon: Shield,
    color: "bg-green-800"
  },
  {
    title: "Private Keys Protection",
    description: "Your private keys never leave your device. With Treżor.io/start, you maintain complete control over your assets.",
    icon: Key,
    color: "bg-green-700"
  },
  {
    title: "User-Friendly Interface",
    description: "Treżor.io/start offers an intuitive interface that makes managing your cryptocurrency simple for both beginners and experts.",
    icon: Smartphone,
    color: "bg-green-800"
  },
  {
    title: "Regular Updates",
    description: "Stay protected with automatic firmware updates through Treżor.io/start, ensuring your device always has the latest security features.",
    icon: RefreshCw,
    color: "bg-green-700"
  },
  {
    title: "Global Support",
    description: "Access 24/7 customer support in multiple languages when you start with Treżor.io/start.",
    icon: Globe,
    color: "bg-green-800"
  },
  {
    title: "Backup & Recovery",
    description: "Treżor.io/start provides foolproof backup and recovery options to ensure you never lose access to your funds.",
    icon: Lock,
    color: "bg-green-700"
  }
];

const FeatureSlider: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Why Choose <span className="text-green-800">Treżor.io/start</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the features that make our hardware wallet the most secure solution for your cryptocurrency assets
          </p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="feature-slider"
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden h-full"
              >
                <div className={`${feature.color} p-6 flex justify-center`}>
                  <feature.icon size={48} className="text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FeatureSlider;