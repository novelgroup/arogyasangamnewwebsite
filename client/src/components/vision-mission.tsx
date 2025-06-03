import { motion } from "framer-motion";
import { Eye, Target, Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function VisionMission() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  const missionPoints = [
    "Empower youth as health companions through education, leadership, and peer-driven initiatives.",
    "Preserve traditional knowledge while integrating research-based solutions for emerging health challenges.",
    "Strengthen financial literacy to drive informed decisions and sustainable healthcare practices.",
    "Improve healthcare access and equity through advocacy, grassroots programs, and community resilience.",
    "Build a healthier future by addressing nutrition, mental health, and disease prevention with impactful, scalable solutions.",
  ];

  return (
    <section id="vision" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-primary mb-6">Our Vision & Mission</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-primary to-primary/80 p-8 rounded-2xl text-white h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold">Vision</h3>
              </div>
              <p className="text-lg leading-relaxed">
                A future where empowered youth drive sustainable health for all.
              </p>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gray-50 border-2 border-accent p-8 rounded-2xl h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-primary">Mission</h3>
              </div>
              <ul className="space-y-4 text-gray-700">
                {missionPoints.map((point, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  >
                    <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
