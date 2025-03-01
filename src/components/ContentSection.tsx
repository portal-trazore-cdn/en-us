import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ExternalLink } from 'lucide-react';

const ContentSection: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeIn}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-8 text-gray-900 text-center">
            Getting Started with <span className="text-green-800">Treżor.io/start</span>
          </h2>

          <div className="prose prose-lg max-w-none">
            <p>
              Welcome to <a href="https://trezor.io/start" className="text-green-800 font-semibold">Treżor.io/start</a>, your comprehensive guide to setting up and securing your cryptocurrency assets with the world's most trusted hardware wallet. In today's digital age, protecting your digital wealth has never been more critical, and Treżor provides the ultimate solution for cryptocurrency security and management.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-green-800">Why Hardware Wallets Are Essential</h3>
            <p>
              As cryptocurrency adoption continues to grow exponentially, so do the threats from hackers and malicious actors. Software wallets and exchange accounts remain vulnerable to various attack vectors, from phishing attempts to sophisticated malware. <a href="https://trezor.io/start" className="text-green-800 font-semibold">Treżor.io/start</a> introduces you to hardware wallets that keep your private keys offline and secure, providing an impenetrable barrier against online threats.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-green-800">The Treżor Advantage</h3>
            <p>
              When you begin with <a href="https://trezor.io/start" className="text-green-800 font-semibold">Treżor.io/start</a>, you're choosing a device built with security as its foundation. Unlike other solutions, Treżor devices are completely open-source, allowing security researchers worldwide to verify and improve the code. This transparency ensures that there are no hidden vulnerabilities or backdoors, giving you complete confidence in your device's integrity.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-green-800">Setting Up Your Device</h3>
            <p>
              The journey at <a href="https://trezor.io/start" className="text-green-800 font-semibold">Treżor.io/start</a> begins with an intuitive setup process designed for users of all experience levels. From unboxing to securing your first transaction, the step-by-step guide ensures you configure your device correctly, creating a fortress for your digital assets.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6 mb-8">
              <h4 className="text-xl font-bold mb-4 text-green-800">Key Setup Steps at Treżor.io/start</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-green-800 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Verify your device's authenticity using the holographic seal</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-800 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Connect your device to Treżor Suite via <a href="https://trezor.io/start" className="text-green-800 font-semibold">Treżor.io/start</a></span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-800 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Create a new wallet or recover an existing one using your seed phrase</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-800 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Set a strong PIN to protect against physical access</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-800 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Securely back up your recovery seed offline</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-800 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Install the latest firmware updates through <a href="https://trezor.io/start" className="text-green-800 font-semibold">Treżor.io/start</a></span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-green-800">Advanced Security Features</h3>
            <p>
              <a href="https://trezor.io/start" className="text-green-800 font-semibold">Treżor.io/start</a> introduces you to advanced security features that go beyond basic protection. The Shamir Backup allows you to split your recovery seed into multiple shares, requiring a predefined number to restore access. This revolutionary approach ensures that even if one backup location is compromised, your funds remain secure.
            </p>
            <p>
              Additionally, the passphrase feature creates hidden wallets within your device, providing plausible deniability in high-risk situations. By entering different passphrases, you can access separate wallets, keeping your primary holdings concealed from potential threats.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-green-800">Supporting Multiple Cryptocurrencies</h3>
            <p>
              When you begin with <a href="https://trezor.io/start" className="text-green-800 font-semibold">Treżor.io/start</a>, you gain access to a vast ecosystem of supported cryptocurrencies. From major assets like Bitcoin, Ethereum, and Litecoin to emerging altcoins and tokens, Treżor provides a unified interface for managing diverse portfolios. This versatility eliminates the need for multiple wallets, streamlining your cryptocurrency experience.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6 mb-8">
              <h4 className="text-xl font-bold mb-4 text-green-800">Benefits of Using Treżor.io/start</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="text-green-800 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Complete isolation from online threats and malware</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-800 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Protection against phishing with on-device verification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-800 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Recovery options if your device is lost or damaged</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-800 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Intuitive interface accessible to crypto beginners</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-800 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Regular firmware updates enhancing security and features</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-800 mr-2 mt-1 flex-shrink-0" size={20} />
                  <span>Compatibility with popular cryptocurrency platforms</span>
                </li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-green-800">Integration with DeFi and Web3</h3>
            <p>
              The modern cryptocurrency landscape extends beyond simple transfers to decentralized finance (DeFi) and Web3 applications. <a href="https://trezor.io/start" className="text-green-800 font-semibold">Treżor.io/start</a> guides you through connecting your device to these ecosystems securely, allowing you to participate in staking, lending, and other yield-generating activities without compromising security.
            </p>
            <p>
              Through WalletConnect integration, you can interact with decentralized applications while keeping your private keys secure on your hardware device. This breakthrough technology bridges the gap between maximum security and full participation in the evolving crypto economy.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-green-800">Educational Resources</h3>
            <p>
              <a href="https://trezor.io/start" className="text-green-800 font-semibold">Treżor.io/start</a> isn't just about device setup—it's a comprehensive educational platform. The knowledge base covers everything from basic cryptocurrency concepts to advanced security practices, empowering you to make informed decisions about your digital assets.
            </p>
            <p>
              Regular blog updates and security advisories keep you informed about the latest developments in the cryptocurrency space, ensuring you stay ahead of potential threats and opportunities. This commitment to education reflects Treżor's mission to not just provide tools, but to build a more secure and knowledgeable community.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4 text-green-800">Conclusion</h3>
            <p>
              In a world where digital assets are increasingly valuable targets, <a href="https://trezor.io/start" className="text-green-800 font-semibold">Treżor.io/start</a> represents the gold standard in cryptocurrency security. By combining cutting-edge hardware with intuitive software and comprehensive education, Treżor provides a complete solution for anyone serious about protecting their digital wealth.
            </p>
            <p>
              Whether you're a seasoned investor with a diverse portfolio or just beginning your cryptocurrency journey, starting with <a href="https://trezor.io/start" className="text-green-800 font-semibold">Treżor.io/start</a> is the definitive first step toward true financial sovereignty. In an uncertain world, Treżor offers something invaluable: peace of mind knowing your digital assets are truly secure.
            </p>

            <div className="mt-8 flex items-center justify-center">
              <a 
                href="https://trezor.io/learn" 
                className="inline-flex items-center text-green-800 font-semibold hover:underline"
              >
                Learn more about cryptocurrency security
                <ExternalLink size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentSection;