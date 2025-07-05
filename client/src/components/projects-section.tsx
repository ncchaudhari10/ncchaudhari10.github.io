import { motion } from "framer-motion";
import { FileText, Trophy, Palette, Search, Brain, ExternalLink, Github } from "lucide-react";

const publications = [
  {
    title: "Deep Learning-based Downscaling of Meteorological Data",
    description: "Published research on enhancing rainfall resolution using CNN architectures. Achieved 4x resolution improvement with correlation ρ = 0.86.",
    equation: "ρ = 0.86, Resolution: 4x (0.125° × 0.125°)",
    link: "https://link.springer.com/article/10.1007/s00704-020-03489-6",
    icon: FileText
  },
  {
    title: "Nowcasting of Satellite Imagery using ConvLSTM",
    description: "Award-winning solution at Smart India Hackathon 2020 for ISRO. Developed innovative autoencoder architecture for satellite forecasting.",
    equation: "Correlation > 0.85, Winner SIH 2020",
    link: "https://github.com/ncchaudhari10/nowcasting_of_satellite_images",
    icon: Trophy
  }
];

const projects = [
  {
    title: "Image Colorization with Diffusion",
    description: "Advanced diffusion model for grayscale to color transformation using state-of-the-art techniques.",
    icon: Palette,
    link: "https://github.com/ncchaudhari10"
  },
  {
    title: "Research Paper RAG System",
    description: "NLP-powered retrieval system for academic research with advanced document processing capabilities.",
    icon: Search,
    link: "https://github.com/ncchaudhari10"
  },
  {
    title: "Classifier-guided Diffusion",
    description: "Advanced diffusion techniques exploring both guided and free generation methodologies.",
    icon: Brain,
    link: "https://github.com/ncchaudhari10"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cosmic-gold">Publications & Projects</h2>
          <p className="text-xl text-cosmic-silver max-w-3xl mx-auto">
            Research contributions and technical implementations
          </p>
        </motion.div>

        {/* Publications */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-cosmic-gold mb-8 text-center"
          >
            Publications
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {publications.map((publication, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 rounded-xl"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cosmic-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <publication.icon size={24} className="text-cosmic-dark" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-cosmic-gold mb-2">
                      {publication.title}
                    </h4>
                    <p className="text-cosmic-silver mb-3">
                      {publication.description}
                    </p>
                    <div className="font-mono text-sm text-cosmic-gold mb-3 bg-cosmic-medium p-2 rounded border border-cosmic-gold border-opacity-20">
                      {publication.equation}
                    </div>
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cosmic-gold hover:text-yellow-400 transition-colors flex items-center space-x-2"
                    >
                      <ExternalLink size={16} />
                      <span>View Publication</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-cosmic-gold mb-8 text-center"
          >
            Featured Projects
          </motion.h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 rounded-xl cursor-pointer"
              >
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-cosmic-gold rounded-full flex items-center justify-center mx-auto mb-3">
                    <project.icon size={24} className="text-cosmic-dark" />
                  </div>
                  <h4 className="text-xl font-bold text-cosmic-gold">{project.title}</h4>
                </div>
                <p className="text-cosmic-silver mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cosmic-gold hover:text-yellow-400 transition-colors flex items-center space-x-2"
                >
                  <Github size={16} />
                  <span>View Project</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
