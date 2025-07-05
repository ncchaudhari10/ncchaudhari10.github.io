import { motion } from "framer-motion";

const equations = [
  { text: "∇θJ(θ) = E[∇θ log π(a|s,θ)Q(s,a)]", x: "15%", y: "10%" },
  { text: "x_t = √(ᾱ_t)x_0 + √(1-ᾱ_t)ε", x: "80%", y: "25%" },
  { text: "L = E_t[||ε - ε_θ(x_t,t)||²]", x: "10%", y: "45%" },
  { text: "∂L/∂θ = ∇_θ E_q[KL(q||p_θ)]", x: "85%", y: "65%" },
  { text: "H(X) = -Σp(x)log p(x)", x: "25%", y: "80%" },
  { text: "p(x_{t-1}|x_t,x_0) = N(μ̃_t,β̃_t I)", x: "70%", y: "15%" },
  { text: "α_t = 1 - β_t, ᾱ_t = ∏_{s=1}^t α_s", x: "5%", y: "65%" },
  { text: "q(x_t|x_{t-1}) = N(√(1-β_t)x_{t-1}, β_t I)", x: "90%", y: "45%" }
];

export default function FloatingEquations() {
  return (
    <div className="fixed inset-0 pointer-events-none z-1">
      {equations.map((equation, index) => (
        <motion.div
          key={index}
          className="floating-equation absolute font-mono text-sm text-cosmic-gold opacity-70"
          style={{
            left: equation.x,
            top: equation.y,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0, -5, 0],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 6 + index * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.8
          }}
        >
          {equation.text}
        </motion.div>
      ))}
    </div>
  );
}
