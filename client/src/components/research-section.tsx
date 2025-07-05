import { motion } from "framer-motion";
import { Dna, Expand, Network } from "lucide-react";

const researchProjects = [
  {
    title: "Protein Generation with Diffusion",
    icon: Dna,
    description: "Leveraging diffusion models to generate functional protein structures up to 300 amino acids. Integrating RFdiffusion, AlphaFold, and ProteinMPNN for end-to-end protein design.",
    equation: "x_t = √(ᾱ_t)x_0 + √(1-ᾱ_t)ε",
    tags: ["RFdiffusion", "AlphaFold", "ProteinMPNN"]
  },
  {
    title: "Super Resolution with Diffusion",
    icon: Expand,
    description: "Developing advanced diffusion techniques for 4x image enhancement. Building upon CNN architectures with novel training methodologies.",
    equation: "L = E_t[||ε - ε_θ(x_t,t)||²]",
    tags: ["CNN", "4x Enhancement", "Diffusion"]
  },
  {
    title: "BPE Tokenization on Proteins",
    icon: Network,
    description: "Exploring tokenization strategies for protein sequences using Graph Neural Networks. Advancing sequence representation learning for biological applications.",
    equation: "H(X) = -Σp(x)log p(x)",
    tags: ["GNNs", "BPE", "Tokenization"]
  }
];

export default function ResearchSection() {
  return (
    <section id="research" className="section-padding relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cosmic-gold">Current Research</h2>
          <p className="text-xl text-cosmic-silver max-w-3xl mx-auto">
            Pushing the boundaries of generative AI and diffusion models
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {researchProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-8 rounded-xl cursor-pointer"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-cosmic-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <project.icon size={32} className="text-cosmic-dark" />
                </div>
                <h3 className="text-2xl font-bold text-cosmic-gold mb-4">{project.title}</h3>
              </div>
              
              <p className="text-cosmic-silver mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="font-mono text-sm text-cosmic-gold mb-4 bg-cosmic-medium p-3 rounded border border-cosmic-gold border-opacity-20">
                {project.equation}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-cosmic-purple rounded-full text-xs text-cosmic-silver"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
