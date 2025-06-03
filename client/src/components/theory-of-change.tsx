import { motion } from "framer-motion";
import { Sprout, Users, HeartPulse, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function TheoryOfChange() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  const steps = [
    {
      icon: Sprout,
      number: 1,
      title: "Empower Youth",
      description: "We invest in young leaders, providing them with knowledge, skills, and resources to become health champions in their communities.",
    },
    {
      icon: Users,
      number: 2,
      title: "Strengthen Communities",
      description: "Empowered youth create ripple effects, building stronger, more resilient communities through peer education and grassroots initiatives.",
    },
    {
      icon: HeartPulse,
      number: 3,
      title: "Transform Health",
      description: "Sustainable health practices become embedded in daily life, creating lasting positive change for current and future generations.",
    },
  ];

  return (
    <section id="change" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-primary mb-6">Theory of Change</h2>
          <p className="text-2xl text-accent font-medium mb-8">
            "Youth lead, communities thrive, and health becomes a way of life."
          </p>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="text-center relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative mb-8">
                <motion.div
                  className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.5 
                  }}
                >
                  <step.icon className="h-8 w-8 text-white" />
                </motion.div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{step.number}</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-primary mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
              
              {/* Arrow between steps (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/3 -right-6 lg:-right-8">
                  <ArrowRight className="h-6 w-6 text-accent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Flow Indicators */}
        <motion.div
          className="hidden md:flex justify-center items-center mt-12"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex items-center space-x-8">
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            <ArrowRight className="h-5 w-5 text-primary" />
            <div className="w-16 h-1 bg-gradient-to-r from-accent to-primary rounded-full"></div>
            <ArrowRight className="h-5 w-5 text-primary" />
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
          </div>
        </motion.div>

        {/* Result Section */}
        <motion.div
          className="mt-16 bg-gray-50/80 rounded-2xl p-8 lg:p-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h4 className="text-2xl font-bold text-primary mb-4">The Result</h4>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            When youth are empowered as health leaders, entire communities benefit from improved health literacy, 
            stronger support networks, and innovative solutions that address root causes of health inequity. 
            This creates a multiplying effect where health becomes integrated into daily life and community culture.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
