import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white/95 backdrop-blur-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="/attached_assets/IMG_3809.PNG" 
              alt="The Arogya Sangam Foundation"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("vision")}
              className="text-gray-600 hover:text-primary transition-colors duration-300"
            >
              Vision & Mission
            </button>
            <button
              onClick={() => scrollToSection("programs")}
              className="text-gray-600 hover:text-primary transition-colors duration-300"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection("change")}
              className="text-gray-600 hover:text-primary transition-colors duration-300"
            >
              Theory of Change
            </button>
            <button
              onClick={() => scrollToSection("impact")}
              className="text-gray-600 hover:text-primary transition-colors duration-300"
            >
              Impact
            </button>
            <button
              onClick={() => scrollToSection("get-involved")}
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors duration-300"
            >
              Get Involved
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="text-primary h-6 w-6" /> : <Menu className="text-primary h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="md:hidden py-4 space-y-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <button
              onClick={() => scrollToSection("vision")}
              className="block text-gray-600 hover:text-primary transition-colors duration-300"
            >
              Vision & Mission
            </button>
            <button
              onClick={() => scrollToSection("programs")}
              className="block text-gray-600 hover:text-primary transition-colors duration-300"
            >
              Programs
            </button>
            <button
              onClick={() => scrollToSection("change")}
              className="block text-gray-600 hover:text-primary transition-colors duration-300"
            >
              Theory of Change
            </button>
            <button
              onClick={() => scrollToSection("impact")}
              className="block text-gray-600 hover:text-primary transition-colors duration-300"
            >
              Impact
            </button>
            <button
              onClick={() => scrollToSection("get-involved")}
              className="block bg-primary text-white px-6 py-2 rounded-full text-center hover:bg-primary/90 transition-colors duration-300"
            >
              Get Involved
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
