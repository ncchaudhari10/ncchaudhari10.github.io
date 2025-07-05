import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function NC() {
  return <span>&lt; NC /&gt;</span>;
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#journey", label: "Journey" },
    { href: "#research", label: "Research" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#connect", label: "Connect" }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-card">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="text-2xl font-bold text-cosmic-gold"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <NC />
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-cosmic-silver hover:text-cosmic-gold transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cosmic-gold"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 border-t border-cosmic-gold border-opacity-20 pt-4"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-cosmic-silver hover:text-cosmic-gold transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 10 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
