import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export default function HeroSection() {
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
      href: "mailto:chaudhari.niraj@northeastern.edu",
      icon: Mail,
      label: "Email"
    },
    {
      href: "https://ncchaudhari10.github.io/Niraj_Chaudhari_Resume.pdf",
      icon: FileText,
      label: "Resume"
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative section-padding">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <img
            src="./photo.jpeg"
            alt="Niraj Chaudhari - AI Research Scientist"
            className="w-48 h-48 rounded-full mx-auto border-4 border-cosmic-purple shadow-2xl object-cover"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-6 text-cosmic-gold shadow-glow"
        >
          Niraj Chaudhari
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl mb-4 text-cosmic-purple"
        >
          AI Research Scientist
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Exploring the quantum realm of artificial intelligence • Crafting generative models that paint reality •
          Where ancient wisdom meets modern algorithms • 5+ years of discovering patterns in chaos
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center space-x-6 mb-12"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-cosmic-medium rounded-full flex items-center justify-center hover:bg-cosmic-gold hover:text-cosmic-dark transition-all duration-300 border-2 border-cosmic-gold"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
            >
              <link.icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        <motion.a
          href="#journey"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-cosmic-purple text-cosmic-dark px-8 py-4 rounded-full font-semibold hover:bg-purple-400 transition-all duration-300"
        >
          Explore My Universe
        </motion.a>
      </div>
    </section>
  );
}
