import { motion } from "framer-motion";
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Heart className="text-white h-5 w-5" />
              </div>
              <span className="text-xl font-semibold">Arogya Sangam Foundation</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Empowering youth to drive sustainable health initiatives, combining traditional wisdom with modern solutions for stronger, healthier communities.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="h-4 w-4" />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="h-4 w-4" />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("vision")}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Vision & Mission
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("programs")}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Our Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("change")}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Theory of Change
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("impact")}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Community Impact
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("get-involved")}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Get Involved
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-primary" />
                <span>thearogyasangamfoundation@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-primary" />
                <span>+91 82239 77514</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 text-primary mt-1" />
                <span>
                  59 B Bhagirath Colony, Dharnaka<br />
                  Mhow, Indore (M.P), India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Arogya Sangam Foundation. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
