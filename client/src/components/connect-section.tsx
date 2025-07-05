import { motion } from "framer-motion";
import { Briefcase, Rocket, TrendingUp, MapPin, Satellite } from "lucide-react";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const opportunities = [
  {
    icon: Briefcase,
    text: "Full-time opportunities starting Jan 2026"
  },
  {
    icon: Rocket,
    text: "AI/ML Research & Generative AI roles"
  },
  {
    icon: TrendingUp,
    text: "Data Science positions"
  },
  {
    icon: MapPin,
    text: "Boston, MA & Remote opportunities"
  }
];

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/niraj-chaudhari-76934a173/",
    icon: Linkedin,
    label: "LinkedIn"
  },
  {
    href: "https://github.com/ncchaudhari10/",
    icon: Github,
    label: "GitHub"
  },
  {
    href: "mailto:n.c.chaudhari10@gmail.com",
    icon: Mail,
    label: "Email"
  },
  {
    href: "https://ncchaudhari10.github.io/Niraj_Chaudhari_Resume.pdf",
    icon: FileText,
    label: "Resume"
  }
];

export default function ConnectSection() {
  return (
    <section id="connect" className="section-padding relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cosmic-gold">Let's Connect</h2>
          <p className="text-xl text-cosmic-silver max-w-3xl mx-auto">
            Ready to explore the intersection of ancient wisdom and modern AI? Let's discuss the mysteries of the universe over coffee.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card p-8 rounded-xl"
            >
              <h3 className="text-2xl font-bold text-cosmic-gold mb-6">Currently Seeking</h3>
              <div className="space-y-4 mb-8">
                {opportunities.map((opportunity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <opportunity.icon size={20} className="text-cosmic-gold" />
                    <span className="text-cosmic-silver">{opportunity.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="border-t border-cosmic-gold border-opacity-20 pt-6">
                <p className="text-cosmic-silver italic">
                  "Always curious, always learning, always pushing the boundaries of data exploration to empower smarter decisions."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="mb-8">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-32 h-32 bg-gradient-to-br from-cosmic-gold to-cosmic-purple rounded-full flex items-center justify-center mx-auto mb-6 animate-glow"
                >
                  <Satellite size={48} className="text-cosmic-dark" />
                </motion.div>
                <h3 className="text-2xl font-bold text-cosmic-gold mb-4">Ready to Launch?</h3>
                <p className="text-cosmic-silver mb-8">
                  Let's explore how we can push the boundaries of AI together.
                </p>
              </div>

              {/* Social Links */}
              <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass-card p-4 rounded-xl hover:bg-cosmic-gold hover:text-cosmic-dark transition-all duration-300 group"
                  >
                    <link.icon size={24} className="mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-sm">{link.label}</p>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
