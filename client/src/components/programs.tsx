import { motion } from "framer-motion";
import { GraduationCap, DollarSign, Heart, Apple, Shield, Plus, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Programs() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  const programs = [
    {
      icon: GraduationCap,
      title: "Health Education",
      description: "Comprehensive health literacy programs that equip youth with essential knowledge and skills to make informed health decisions.",
      color: "bg-primary",
    },
    {
      icon: DollarSign,
      title: "Financial Literacy",
      description: "Building financial acumen to support sustainable healthcare practices and informed economic decisions within communities.",
      color: "bg-accent",
    },
    {
      icon: Heart,
      title: "Mental Wellness",
      description: "Promoting mental health awareness and providing resources for emotional well-being and resilience building.",
      color: "bg-primary/80",
    },
    {
      icon: Apple,
      title: "Nutrition",
      description: "Evidence-based nutrition education programs that combine traditional dietary wisdom with modern nutritional science.",
      color: "bg-accent/80",
    },
    {
      icon: Shield,
      title: "Disease Prevention",
      description: "Proactive health strategies and community-based prevention programs to reduce disease burden and promote wellness.",
      color: "bg-primary/60",
    },
  ];

  return (
    <section id="programs" className="py-24 bg-gradient-to-b from-gray-50 to-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-primary mb-6">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive initiatives designed to empower youth and strengthen communities through health education and sustainable practices.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full group"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`w-16 h-16 ${program.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <program.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-4">{program.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{program.description}</p>
              <div className="flex items-center text-primary font-medium group-hover:text-accent transition-colors duration-300">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}

          {/* Additional Programs Card */}
          <motion.div
            className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-center items-center text-center group"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: programs.length * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <Plus className="h-12 w-12 mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-semibold mb-4">More Programs</h3>
            <p className="leading-relaxed">
              Discover additional initiatives and specialized programs tailored to community needs.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
