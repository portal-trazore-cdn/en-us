import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

interface Crypto {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
}

const CryptoTicker: React.FC = () => {
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 10,
              page: 1,
              sparkline: false,
              price_change_percentage: '24h',
            },
          }
        );
        setCryptos(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
        setLoading(false);
      }
    };

    fetchCryptos();
    const interval = setInterval(fetchCryptos, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="crypto-ticker w-full py-3 text-white overflow-hidden">
        <div className="flex justify-center">
          <p>Loading cryptocurrency prices...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="crypto-ticker w-full py-3 text-white overflow-hidden">
      <motion.div 
        className="flex space-x-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          repeat: Infinity, 
          duration: 30,
          ease: "linear"
        }}
      >
        {[...cryptos, ...cryptos].map((crypto, index) => (
          <div key={index} className="flex items-center space-x-2 whitespace-nowrap">
            <span className="font-bold">{crypto.name}</span>
            <span>${crypto.current_price.toLocaleString()}</span>
            <span 
              className={crypto.price_change_percentage_24h >= 0 ? "text-green-200" : "text-red-300"}
            >
              {crypto.price_change_percentage_24h >= 0 ? "+" : ""}
              {crypto.price_change_percentage_24h.toFixed(2)}%
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default CryptoTicker;