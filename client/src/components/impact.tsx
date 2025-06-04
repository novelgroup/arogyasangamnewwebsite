import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function Impact() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  const statistics = [
    { value: "50+", label: "Youth Trained" },
    { value: "10+", label: "Communities Reached" },
    { value: "1000+", label: "Lives Impacted" },
    { value: "5", label: "Programs Active" },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Youth Health Champion",
      quote: "The financial literacy program completely changed how I think about healthcare expenses. Now I help other families in my village plan for medical emergencies.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    },
    {
      name: "Rahul Verma",
      role: "Community Leader",
      quote: "Through the mental wellness program, I learned to recognize stress in myself and others. I've become a support person for many young people in our community.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    },
    {
      name: "Anita Desai",
      role: "Nutrition Educator",
      quote: "The nutrition program helped me combine my grandmother's traditional recipes with modern nutritional knowledge. Now I teach cooking classes that improve our community's health.",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    },
  ];

  return (
    <section id="impact" className="py-24 bg-gradient-to-b from-gray-50 to-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-light text-primary mb-6">Community Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from communities we've had the privilege to serve and learn from.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
        </motion.div>

        {/* Impact Statistics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center bg-white rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white rounded-2xl p-6 shadow-lg h-full"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} testimonial`}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-primary">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic mb-4">
                "{testimonial.quote}"
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community in Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-primary text-center mb-8">Our Community in Action</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
              alt="Health education workshop"
              className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-48 object-cover"
              whileHover={{ scale: 1.05 }}
            />
            <motion.img
              src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
              alt="Community nutrition garden"
              className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-48 object-cover"
              whileHover={{ scale: 1.05 }}
            />
            <motion.img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
              alt="Financial literacy training"
              className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-48 object-cover"
              whileHover={{ scale: 1.05 }}
            />
            <motion.img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"
              alt="Mental wellness support group"
              className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 w-full h-48 object-cover"
              whileHover={{ scale: 1.05 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
